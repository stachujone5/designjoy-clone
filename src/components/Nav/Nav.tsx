import { useRef, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import classes from './Nav.module.scss'

export const Nav = () => {
	const [isOpen, setIsOpen] = useState(false)
	const navRef = useRef<HTMLDivElement>(null)

	const handleNavOpen = () => {
		setIsOpen(prevState => !prevState)
	}

	const navHeight = navRef.current?.getBoundingClientRect().height + 'px'

	return (
		<>
			<div className={classes.burger} onClick={handleNavOpen}>
				{<GiHamburgerMenu />}
			</div>
			<nav className={classes.nav} style={{ height: isOpen ? navHeight : '0' }}>
				<div ref={navRef} className={classes.container}>
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
				</div>
			</nav>
		</>
	)
}
