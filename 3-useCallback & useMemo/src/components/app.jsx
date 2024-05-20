import { useCallback, useEffect, useMemo, useState } from 'react'

const randomNumber = () => {
	console.log("Creating random number")
	return Math.floor(Math.random() * 100)
}

function Counter() {
	const [counter, setCounter] = useState(0)
	const [auto, setAuto] = useState(false)

	const getImages = useCallback(() => {
		console.log("Fetching image");

		return [
			"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
			"https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&w=800"
		]
	}, [])

	function onIncrement() {
		setCounter(state => state+1)
	}

	function onDecrement() {
		setCounter(state => state-1)
	}

	function onToggleAuto() {
		setAuto(state => !state)
	}

	const number = useMemo(() => {
		return randomNumber()
	}, [auto])

	const dynamicStyle = useMemo(() => ({
		color: counter > 5 ? "red" : "white"
	}), [counter])

	useEffect(() => {
		console.log("Styles!");
	}, [dynamicStyle])

	return (
		<div className='w-full vh-100 bg-dark text-white d-flex justify-content-center align-items-center'>
			<div className='border w-50 p-5 rounded border-success border-opacity-50 d-flex align-items-center flex-column'>
				<div className='d-flex h-50 gap-2'>
					<Slider getImages={getImages} />
				</div>
				<h1 style={dynamicStyle}>Counter: {number}</h1>
				<div className='d-flex align-items-center gap-2'>
					<button className='btn btn-success' onClick={onIncrement}>INC +</button>
					<h1>{counter}</h1>
					<button className='btn btn-danger' onClick={onDecrement}>DECR -</button>
				</div>
				{auto && "Auto play"}
				<button className='btn btn-primary w-25' onClick={onToggleAuto}>
					Auto
				</button>
			</div>
		</div>
	)
}

const Slider = ({getImages}) => {
	const [data, setData] = useState([])

	useEffect(() => {
		setData(getImages())
	}, [getImages])
	
	return data.map(img => (
		<img src={img} alt={img} key={img} className='w-50' />
	))
}

function App() {
	return <Counter />
}

export default App

