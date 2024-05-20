import useHttp from '../hooks/useHttp'

function useMovieService() {
	const _apiBase = 'https://api.themoviedb.org/3'
	const _apiLng = 'language=en-US'
	const _apiKey = 'api_key=6a08c92d3759b55bb33190ae86926505'
	const _apiImg = 'https://image.tmdb.org/t/p/original'
	const _apiPage = 1

	const { request, loading, error, clearError } = useHttp()

	const getPopularMovies = async (page = _apiPage) => {
		const response = await request(
			`${_apiBase}/movie/popular?${_apiLng}&page=${page}&${_apiKey}`
		)
		const movies = response.results
		return movies && movies.map(movie => _transformMovie(movie))
	}

	const getTrandingMovies = async (page = _apiPage) => {
		const response = await request(
			`${_apiBase}/movie/top_rated?${_apiLng}&page=${page}&${_apiKey}`
		)
		const movies = response.results
		return movies && movies.map(movie => _transformMovie(movie))
	}

	const getDetailedMovie = async id => {
		const movie = await request(`${_apiBase}/movie/${id}?${_apiLng}&${_apiKey}`)
		return _transformMovie(movie)
	}

	const getRandomMovie = async () => {
		const res = await getPopularMovies()
		const movie = res[Math.floor(Math.random() * res.length)]
		return movie
	}

	const _transformMovie = movie => {
		return {
			name: movie.original_title,
			description: movie.overview,
			backdrop_path: `${_apiImg}${movie.backdrop_path}`,
			poster_path: `${_apiImg}${movie.poster_path}`,
			id: movie.id,
			release_date: movie.release_date,
			vote_average: movie.vote_average,
		}
	}

	return {
		loading,
		error,
		clearError,
		getPopularMovies,
		getDetailedMovie,
		getRandomMovie,
		getTrandingMovies,
	}
}

export default useMovieService
