import classes from './WhyUs.module.scss'
import WhyUs1 from '../../images/WhyUs1.svg'
import WhyUs2 from '../../images/WhyUs2.svg'
import webflow from '../../images/whyusWebflow.svg'
import { MdOutlineEmail, MdReplay, MdFlashOn, MdFormatQuote } from 'react-icons/md'
import { SectionHeader } from '../../components/section_header/SectionHeader'

export const WhyUs = () => {
	return (
		<section className={classes['why-us']} id='why-us'>
			<div className='container'>
				<SectionHeader
					h1="We didn't reinvent the wheel, just design"
					h2='Design as you know it is out the door. Design as you want it just arrived.'
				/>
				<div className={classes['icons-box']}>
					<div className={classes.icon}>
						<MdOutlineEmail />
						<p>Subscribe to a plan & request as many designs as you'd like.</p>
					</div>
					<div className={classes.icon}>
						<MdFlashOn />
						<p>Receive your design within a few business days on average, Monday to Friday.</p>
					</div>
					<div className={classes.icon}>
						<MdReplay />
						<p>We'll revise the designs until you're 100% satisfied.</p>
					</div>
				</div>
				<div className={classes.box}>
					<MdFormatQuote />
					<h3>Designjoy shows that they know the art of subtlety.</h3>
					<img src={webflow} alt='webflow' />
					<img className={`${classes.decoration} ${classes.d1}`} src={WhyUs1} alt='' />
					<img className={`${classes.decoration} ${classes.d2}`} src={WhyUs2} alt='' />
				</div>
			</div>
		</section>
	)
}
