import { useEffect, useReducer } from 'react'

function reducer(state, action) {
	switch (action.type) {
		case 'TOOGLE':
			return { autoplay: !state.autoplay }
		case 'FAST':
			return { autoplay: 1000 }
		case 'SLOW':
			return { autoplay: 700 }
		case 'EXTENDS':
			return { autoplay: action.payload }

		default:
			throw new Error()
	}
}

function sakla(state, action) {
	if (action.type == 'QOSH') {
		return { son: state.son + 1 }
	} else if (action.type == 'AYIR') {
		return { son: state.son - 1 }
	}
}

function App() {
	const [state, setStateDispatch] = useReducer(reducer, { autoplay: false })
	const [raqam, setraqam] = useReducer(sakla, { son: 0 })

	return (
		<>
			<div className='w-full vh-100 bg-dark text-white d-flex justify-content-center align-items-center'>
				<div className='border border-5 w-50 p-5 rounded border-success border-opacity-50 d-flex align-items-center flex-column bg-secondary'>
					<div className='d-flex h-50 gap-2'>
						{arr.map(img => (
							<img src={img} alt={img} key={img} className='w-50' />
						))}
					</div>
					<Hello />
					<Bye />
					<h1>Counter: {raqam.son}</h1>

					<p>{state.autoplay}</p>

					<div className='d-flex gap-2'>
						<button
							className='btn btn-primary'
							onClick={() => setraqam({ type: 'QOSH' })}
						>
							+
						</button>
						<button
							className='btn btn-success'
							onClick={() => setraqam({ type: 'AYIR' })}
						>
							-
						</button>
						<button
							className='btn btn-danger'
							onClick={() => setStateDispatch({ type: 'TOOGLE' })}
						>
							Autoplay
						</button>
						<button
							className='btn btn-warning'
							onClick={() => setStateDispatch({ type: 'SLOW' })}
						>
							Slow Autoplay
						</button>
						<button
							className='btn btn-info'
							onClick={() => setStateDispatch({ type: 'FAST' })}
						>
							Fast Autoplay
						</button>
						<button
							className='btn btn-info'
							onClick={e =>
								setStateDispatch({
									type: 'EXTENDS',
									payload: e.target.textContent,
								})
							}
						>
							2000
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

const high = (Component, text) => {
	return props => {
		useEffect(() => {
			console.log(text)
		}, [])
		return <Component />
	}
}

const HelloComponent = () => {
	return <div>Hello world</div>
}

const ByeComponent = () => {
	return <div>Bye world</div>
}

const Hello = high(HelloComponent, 'HelloComponent')
const Bye = high(ByeComponent, 'BYEcomponent')

export default App

const arr = [
	'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800',
	'https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&w=800',
]
