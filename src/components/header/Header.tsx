import { Logo } from '../logo/Logo'
import { Nav } from '../Nav/Nav'
import classes from './Header.module.scss'

export const Header = () => {
	return (
		<header>
			<div className={classes.container}>
				<Logo />
				<Nav />
			</div>
		</header>
	)
}
