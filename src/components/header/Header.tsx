import { Logo } from '../logo/Logo'
import { Nav } from '../nav/Nav'
import classes from './Header.module.scss'

export const Header = () => {
	return (
		<header className={classes.header}>
			<div className={`${classes.container} container`}>
				<Logo />
				<Nav />
			</div>
		</header>
	)
}
