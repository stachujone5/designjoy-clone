import logo from '../../images/logo.svg'
import classes from './Logo.module.scss'

export const Logo = () => {
	return (
		<div className={classes['logo-container']}>
			<a href='#home'>
				<img src={logo} alt='Designjoy logo' />
			</a>
		</div>
	)
}
