import { useState } from 'react'

const Form = (props) => {
	console.log("Render");

	return (
		<>
			<div className="mb-3 w-100">
				<label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
				<input 
					type="text" 
					className={`form-control form-control-lg`}
					id="exampleFormControlInput1" 
					value={props.firstName}
				/>
			</div>
			<div className="mb-3 w-100">
				<label htmlFor="exampleFormControlTextarea1" className="form-label">Last Name</label>
				<input 
					type="text" 
					className={`form-control form-control-lg`}
					id="exampleFormControlInput1" 
					value={props.lastName}
				/>
			</div>
		</>
	)
}

function App() {
	const [data, setData] = useState({
		firstName: "Samar",
		lastName: "Badriddinov"
	})

	const onChangeData = () => {
		setData({
			firstName: "Yusufkhan",
			lastName: "Khamdamov"
		})
	}

	return (
		<div className='w-full vh-100 bg-dark text-white d-flex justify-content-center align-items-center'>
			<div className='border border-5 w-50 p-5 rounded border-success border-opacity-50 d-flex align-items-center flex-column bg-secondary'> 
				<Form 
					firstName={data.firstName} 
					lastName={data.lastName} 
				/>
				<button className='btn btn-primary' onClick={onChangeData}>Change data</button>
			</div>
		</div>
	)
}

export default App

