import { useEffect, useRef, useState } from "react"

const Form = () => {
	const [query, setQuery] = useState()

	const myRef = useRef(1)

	const onClick = () => {
		myRef.current++
	}

	useEffect(() => {
		myRef.current = query
	})

	return (
		<div className='w-full vh-100 bg-dark text-white d-flex justify-content-center align-items-center'>
			<div className='border w-50 p-5 rounded border-success border-opacity-50 d-flex align-items-center flex-column'>
			<div className="mb-3 w-100">
				<label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
				<input 
					onChange={(e) => setQuery(e.target.value)}
					type="email" 
					className="form-control" 
					id="exampleFormControlInput1" 
					placeholder="name@example.com" 
				/>
			</div>
			<div className="mb-3 w-100">
				<label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
				<textarea 
					className="form-control" 
					id="exampleFormControlTextarea1" 
					value={myRef.current}
					rows="3"></textarea>
			</div>
			</div>
		</div>
	)
}

function App() {
	return <Form />
}

export default App

