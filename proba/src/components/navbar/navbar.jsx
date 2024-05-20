import { Link, NavLink } from 'react-router-dom'
import { data } from '../../constants'
import './navbar.scss'
import logoText from '/logo-text.svg'
import logo from '/logo.svg'

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbar__logo'>
				<Link to={'/'}>
					<img src={logo} alt='Logo' />
					<img src={logoText} alt='Logo Text' />
				</Link>
			</div>

			<nav className='navbar__menu'>
				<ul>
					{data.map(item => (
						<li>
							<NavLink to={item.route}>{item.page}</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default Navbar
