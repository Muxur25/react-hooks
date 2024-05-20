import React, { useEffect, useState } from 'react'

// class App extends React.Component {
// 	state = {
// 		counter: 0,
// 		auto: false
// 	}

// 	componentDidMount() {
// 		document.title = `Counter: ${this.state.counter}`
// 	}

// 	componentDidUpdate() {
// 		document.title = `Counter: ${this.state.counter}`
// 	}

// 	onIncrement = () => this.setState(({counter}) => ({counter: counter+1}))

// 	onDecrement = () => this.setState(({counter}) => ({counter: counter-1}))

// 	onToggleAuto = () => this.setState(({auto}) => ({auto: !auto}))

// 	render() {
// 		const {counter, auto} = this.state

// 		return (
// 			<div className='w-full vh-100 bg-dark text-white d-flex justify-content-center align-items-center'>
// 				<div className='border w-50 p-5 rounded border-success border-opacity-50 d-flex align-items-center flex-column'>
// 					<h1>Counter</h1>
// 					<div className='d-flex align-items-center gap-2'>
// 						<button className='btn btn-success' onClick={this.onIncrement}>INC +</button>
// 						<h1>{counter}</h1>
// 						<button className='btn btn-danger' onClick={this.onDecrement}>DECR -</button>
// 					</div>
// 					{auto && "Auto play"}
// 					<button className='btn btn-primary w-25' onClick={this.onToggleAuto}>
// 						Auto
// 					</button>
// 				</div>
// 			</div>
// 		)
// 	}
// }


function Counter() {
	const [counter, setCounter] = React.useState(0)
	const [auto, setAuto] = React.useState(false)

	const logger = () => console.log("Hello world!")

	useEffect(() => {
		console.log("Update Render")
		document.title = `Updated Counter: ${counter}`

		window.addEventListener("click", logger)
		
		return () => window.removeEventListener("click", logger)
	}, [counter])

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

function App() {
	const [isApp, setIsApp] = useState(true)

	return <>
		<button className='btn btn-secondary' onClick={() => setIsApp(false)}>Click</button>
		{isApp ? <Counter /> : null}
	</>
}

export default App

