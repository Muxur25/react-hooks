import useInputValidation from '../hooks/use-input-validation'

const Form = () => {
	const input = useInputValidation("")
	const textarea = useInputValidation("")

	return (
		<div className='w-full vh-100 bg-dark text-white d-flex justify-content-center align-items-center'>
			<div className='border w-50 p-5 rounded border-success border-opacity-50 d-flex align-items-center flex-column'>
			<div className="alert alert-info w-100" role="alert">
				{input.value} / {textarea.value}
			</div>
			<div className="mb-3 w-100">
				<label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
				<input 
					type="text" 
					className={`form-control ${input.error()}`}
					id="exampleFormControlInput1" 
					value={input.value}
					onChange={input.onChange}
				/>
			</div>
			<div className="mb-3 w-100">
				<label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
				<textarea 
					className={`form-control ${textarea.error()}`}
					id="exampleFormControlTextarea1" 
					rows="3"
					value={textarea.value}
					onChange={textarea.onChange}
				></textarea>
			</div>
			</div>
		</div>
	)
}

function App() {
	return <Form />
}

export default App

