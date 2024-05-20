import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useMovieService from '../../services/movie-service'
import Error from '../error/error'
import Spinner from '../spinner/spinner'
import './deteiled-movie.scss'

const DeteiledMovie = () => {
	const [movie, setMovie] = useState(null)

	const { getDetailedMovie, loading, error } = useMovieService()
	const { movieId } = useParams()

	const updateMovie = () => {
		if (!movieId) {
			return
		}

		getDetailedMovie(movieId).then(res => setMovie(res))
	}

	useEffect(() => {
		updateMovie()
	}, [movieId])

	const initialContent = movie || loading || error ? null : <Spinner />
	const errorContent = error ? <Error /> : null
	const loadingContent = loading ? <Spinner /> : null
	const content = !(error || loading || !movie) ? (
		<Content movie={movie} />
	) : null
	console.log(movie)
	return (
		<>
			{initialContent}
			{errorContent}
			{loadingContent}
			{content}
		</>
	)
}

export default DeteiledMovie

const Content = ({ movie }) => {
	return (
		<div className='detailedmovie'>
			<div className='detailedmovie__image'>
				<img src={movie.poster_path} alt={movie.title} />
			</div>
			<div className='detailedmovie__descr'>
				<h1>{movie.name}</h1>
				<p>{movie.description}</p>
				<div className='detailedmovie__descr-info'>
					<img src='/date.svg' alt='data' />
					<p>{movie.release_date}</p>
					<div className='dot' />
					<p>{movie.vote_average.toFixed(1)}</p>
					<img src='/star.svg' alt='star' />
				</div>
			</div>
		</div>
	)
}
