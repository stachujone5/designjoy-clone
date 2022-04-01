import classes from './WhyUs.module.scss'
import quote from '../../images/whyusQuote.svg'
import webflow from '../../images/whyusWebflow.svg'
import { MdOutlineEmail, MdReplay, MdFlashOn, MdFormatQuote } from 'react-icons/md'

export const WhyUs = () => {
	return (
		<section className={classes['why-us']}>
			<div className='container'>
				<h1>We didn't reinvent the wheel, just design</h1>
				<h2>Design as you know it is out the door. Design as you want it just arrived.</h2>
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
				</div>
			</div>
		</section>
	)
}
