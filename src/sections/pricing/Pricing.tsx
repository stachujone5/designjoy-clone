import { SectionHeader } from '../../components/section_header/SectionHeader'
import { PricingTop } from './pricingTop/PricingTop'
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
				<PricingTop />
				<div className={classes['power-ups']}></div>
			</div>
		</section>
	)
}
