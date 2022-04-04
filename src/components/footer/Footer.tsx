import { Button } from '../button/Button'
import { SectionHeader } from '../section_header/SectionHeader'
import classes from './Footer.module.scss'
import { FooterImages } from './footerImages/FooterImages'
import { FooterBottom } from './footerBottom/FooterBottom'

export const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className='container'>
				<SectionHeader
					h1='See if Designjoy is right for you. (It totally is.)'
					h2='Get a guided tour through Designjoy, and find out how you and your team can change the way you source design, forever.'
				/>
				<Button className={classes.btn} href='#register'>
					Get started
				</Button>
				<FooterImages />
				<FooterBottom />
			</div>
		</footer>
	)
}
