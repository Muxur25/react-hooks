import { useState } from 'react'
import Provider from '../context'
import Form from './form'

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
		<Provider value={data}>
			<div className='w-full vh-100 bg-dark text-white d-flex justify-content-center align-items-center'>
				<div className='border border-5 w-50 p-5 rounded border-success border-opacity-50 d-flex align-items-center flex-column bg-secondary'> 
					<Form />
					<button className='btn btn-primary' onClick={onChangeData}>Change data</button>
				</div>
			</div>
		</Provider>
	)
}

export default App

