import { useCallback, useState } from 'react'

function useHttp() {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	const request = useCallback(
		async (
			url,
			method = 'GET',
			body,
			headers = { 'Content-type': 'application/json' }
		) => {
			try {
				setLoading(true)
				const response = await fetch(url, { method, body, headers })
				if (!response.ok) {
					throw new Error(`Could not fetch ${url}, status: ${response.status}`)
				}
				setLoading(false)
				return await response.json()
			} catch (error) {
				setError(true)
				throw error
			}
		},
		[]
	)

	const clearError = useCallback(() => setError(null), [])

	return { error, loading, request, clearError }
}

export default useHttp
