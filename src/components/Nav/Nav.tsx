import { GiHamburgerMenu } from 'react-icons/gi'
import classes from './Nav.module.scss'

export const Nav = () => {
	return (
		<>
			<div className={classes.burger}>{<GiHamburgerMenu />}</div>
			<nav className={classes.nav}>
				<ul>
					<li>
						<a href='#'>Latest projects</a>
					</li>
					<li>
						<a href='#Pricing'>Pricing</a>
					</li>
					<li>
						<a href='#'>FAQs</a>
					</li>
					<li>
						<a href='#'>Login</a>
					</li>
				</ul>
			</nav>
		</>
	)
}
