import React from 'react'

class App extends React.Component {
	render() {
		return (
			<div className='w-full vh-100 bg-dark text-white d-flex justify-content-center align-items-center'>
				<div className='border w-50 p-5 rounded border-success border-opacity-50 d-flex align-items-center flex-column'>
					<h1>Counter</h1>
					<div className='d-flex align-items-center gap-2'>
						<button className='btn btn-success'>INC +</button>
						<h1>12</h1>
						<button className='btn btn-danger'>DECR -</button>
					</div>
					<button className='btn btn-primary w-25'>
						Auto
					</button>
				</div>
			</div>
		)
	}
}

export default App