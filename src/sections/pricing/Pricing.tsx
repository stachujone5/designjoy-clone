import { Button } from '../../components/button/Button'
import { SectionHeader } from '../../components/section_header/SectionHeader'
import pricingImages1 from '../../images/PricingImages1.svg'
import pricingImages2 from '../../images/PricingImages2.svg'
import pricing3 from '../../images/Pricing3.svg'
import classes from './Pricing.module.scss'

export const Pricing = () => {
	return (
		<section className={classes.pricing}>
			<div className='container'>
				<SectionHeader h1="Let's keep it simple" h2='No contracts or surprises. Pause or cancel anytime.' />
				<div className={classes['img-header']}>
					<img src={pricing3} alt='' />
				</div>
				<div className={classes.box}>
					<div className={classes.item}>
						<div className={classes.top}>
							<div className={classes.info}>
								<h3>Design</h3>
								<p>For startups and enterprises with on-going design needs.</p>
							</div>
							<div className={classes.pricing}>
								<p className={classes.price}>$4,995/m</p>
								<p className={classes['price-info']}>Pause or cancel anytime</p>
							</div>
							<Button className={classes['btn-desktop']} href='#sign-up'>
								Get started
							</Button>
							<a href='#book' className={classes.link}>
								Book a call
							</a>
						</div>
						<div className={classes.bottom}>
							<p>What's included:</p>
							<ul>
								<li>Unlimited requests</li>
								<li>Unlimited revisions</li>
								<li>Unlimited brands</li>
								<li>Unlimited team members</li>
								<li>Unlimited stock photography</li>
							</ul>
						</div>
					</div>
					<div className={classes.item}>
						<div className={classes.top}>
							<div className={classes.info}>
								<h3>Design + Webflow</h3>
								<p>For those in need of design & front-end development.</p>
							</div>
							<div className={classes.pricing}>
								<p className={classes.price}>$5,495/m</p>
								<p className={classes['price-info']}>Pause or cancel anytime</p>
							</div>
							<Button className={classes['btn-desktop']} href='#sign-up'>
								Get started
							</Button>
							<a href='#book' className={classes.link}>
								Book a call
							</a>
						</div>
						<div className={classes.bottom}>
							<p>What's included:</p>
							<ul>
								<li className={classes.bold}>All the Design plan features</li>
								<li>Front-end development with Webflow</li>
								<li>Ongoing support & maintenance</li>
							</ul>
						</div>
					</div>
					<div className={classes.item}>
						<div className={classes.top}>
							<div className={classes.info}>
								<h3>Enterprise</h3>
								<p>More features, more requests, and expanded benefits to service higher demands.</p>
							</div>
							<Button className={`${classes.btn} ${classes['btn-desktop']}`} href='#sign-up'>
								Get started
							</Button>
							<a href='#book' className={classes.link}>
								Book a call
							</a>
						</div>
						<div className={classes.bottom}>
							<p>What's included:</p>
							<ul>
								<li>Multiple requests at a time</li>
								<li>Expedited delivery</li>
								<li>Real-time collaboration via Slack</li>
							</ul>
						</div>
					</div>
					<div className={`${classes.item} ${classes['item-special']}`}>
						<div className={`${classes['img-container']}`}>
							<img src={pricingImages1} alt='' />
						</div>
						<h3>Book a call</h3>
						<p>Learn more about how DesignJoy works and how it can help you.</p>
						<a className={classes['link-right']} href='#book'>
							Book now
						</a>

						<div className={classes['img-container']}>
							<img src={pricingImages2} alt='' />
						</div>
						<h3>Refer a friend & earn</h3>
						<p>Earn 5% monthly recurring commissions for each referral.</p>
						<a className={classes['link-right']} href='#book'>
							Join now
						</a>
					</div>
				</div>
				<div className={classes['power-ups']}></div>
			</div>
		</section>
	)
}
