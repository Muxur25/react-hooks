function App() {


	return (
		<>
			<div className='w-full vh-100 bg-dark text-white d-flex justify-content-center align-items-center'>
				<div className='border border-5 w-50 p-5 rounded border-success border-opacity-50 d-flex align-items-center flex-column bg-secondary'> 
					<div className='d-flex h-50 gap-2'>
						{arr.map(img => (
							<img src={img} alt={img} key={img} className='w-50' />
						))}
					</div>
					<h1>Counter: 0</h1>

					<div className='d-flex gap-2'>
						<button className='btn btn-primary'>+</button>
						<button className='btn btn-success'>-</button>
						<button className='btn btn-danger'>Autoplay</button>
						<button className='btn btn-warning'>Slow Autoplay</button>
						<button className='btn btn-info'>Fast Autoplay</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default App


const arr = [
	"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
	"https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&w=800"
]