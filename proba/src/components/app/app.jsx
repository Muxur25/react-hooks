import { Route, Routes } from 'react-router-dom'
import Navbar from '../navbar/navbar'

import { lazy, Suspense } from 'react'
import Spinner from '../spinner/spinner'

const HomePage = lazy(() => import('../pages/home-page'))
const Popular = lazy(() => import('../pages/popular'))
const Tranding = lazy(() => import('../pages/tranding'))
const Element = lazy(() => import('../pages/elements'))
const Error = lazy(() => import('../error/error'))

const App = () => {
	return (
		<div className='app'>
			<Navbar />
			<Suspense fallback={<Spinner />}>
				<Routes>
					<Route path='/' element={<HomePage />} />

					<Route path='/tranding' element={<Tranding />} />
					<Route path='/popular' element={<Popular />} />
					<Route path='*' element={<Error />} />
					<Route path='/movie/:movieId' element={<Element />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
