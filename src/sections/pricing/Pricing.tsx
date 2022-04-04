import { SectionHeader } from '../../components/section_header/SectionHeader'
import { PricingTop } from './pricingTop/PricingTop'
import pricing3 from '../../images/Pricing3.svg'
import pricing2 from '../../images/Pricing2.svg'
import pricing1 from '../../images/Pricing1.svg'
import pricingDivider from '../../images/PricingDivider.svg'
import classes from './Pricing.module.scss'
import { PricingBottom } from './pricingBottom/PricingBottom'

export const Pricing = () => {
	return (
		<section className={classes.pricing} id='pricing'>
			<div className='container'>
				<SectionHeader h1="Let's keep it simple" h2='No contracts or surprises. Pause or cancel anytime.' />
				<div className={classes['img-header']}>
					<img src={pricing3} alt='' />
				</div>
				<PricingTop />
				<PricingBottom />
			</div>
			<img src={pricing1} alt='' className={`${classes.decoration} ${classes.d1}`} />
			<img src={pricing2} alt='' className={`${classes.decoration} ${classes.d2}`} />
			<img src={pricingDivider} alt='' className={`${classes.decoration} ${classes.d3}`} />
		</section>
	)
}
