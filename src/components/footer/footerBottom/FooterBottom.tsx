import classes from './FooterBottom.module.scss'
import footerLogo from '../../../images/FooterLogo.svg'
import footerCountry from '../../../images/FooterCountry.svg'

export const FooterBottom = () => {
	return (
		<div className={classes.box}>
			<div className={classes.logo}>
				<img src={footerLogo} alt='Designjoy logo' />
			</div>
			<div className={classes.country}>
				<img src={footerCountry} alt='' />
				<p>Designjoy is headquartered in Phoenix, Arizona.</p>
			</div>
			<div className={classes.links}>
				<a href='#latest'>Latest projects</a>
				<a href='#pricing'>Pricing</a>
				<a href='#faq'>FAQs</a>
				<a href='#contact'>Contact</a>
				<a href='#login'>Client login</a>
				<a href='#pricing'>Get started</a>
				<a href='#tos'>Terms & conditions</a>
				<a href='#pp'>Privacy policy</a>
			</div>
		</div>
	)
}
