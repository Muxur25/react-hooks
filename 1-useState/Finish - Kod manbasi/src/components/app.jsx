import { useState } from 'react'

// class App extends React.Component {
// 	state = {
// 		counter: 0,
//    auto: false
// 	}

// 	onIncrement = () => this.setState(({counter}) => ({counter: counter+1}))

// 	onDecrement = () => this.setState(({counter}) => ({counter: counter-1}))

// 	render() {
// 		const {counter} = this.state
// 		return (
// 			<div className='w-full vh-100 bg-dark text-white d-flex justify-content-center align-items-center'>
// 				<div className='border w-50 p-5 rounded border-success border-opacity-50 d-flex align-items-center flex-column'>
// 					<h1>Counter</h1>
// 					<div className='d-flex align-items-center gap-2'>
// 						<button className='btn btn-success' onClick={this.onIncrement}>INC +</button>
// 						<h1>{counter}</h1>
// 						<button className='btn btn-danger' onClick={this.onDecrement}>DECR -</button>
// 					</div>
// 					<button className='btn btn-primary w-25'>
// 						Auto
// 					</button>
// 				</div>
// 			</div>
// 		)
// 	}
// }

const randomNumber = () => {
	console.log("random number")

	return (Math.random() * 100).toFixed(0)
}

function App() {
	const [counter, setCounter] = useState(randomNumber)
	const [auto, setAuto] = useState(false)

	function onIncrement() {
		setCounter(state => state+1)
	}

	function onDecrement() {
		setCounter(state => state-1)
	}

	function onToggleAuto() {
		setAuto(state => !state)
	}

	return (
		<div className='w-full vh-100 bg-dark text-white d-flex justify-content-center align-items-center'>
			<div className='border w-50 p-5 rounded border-success border-opacity-50 d-flex align-items-center flex-column'>
				<h1>Counter</h1>
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

export default App

