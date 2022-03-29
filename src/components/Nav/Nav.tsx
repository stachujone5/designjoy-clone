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
							<a href='#projects'>Latest projects</a>
						</li>
						<li>
							<a href='#pricing'>Pricing</a>
						</li>
						<li>
							<a href='#faq'>FAQs</a>
						</li>
						<li>
							<a href='#login'>Login</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}
