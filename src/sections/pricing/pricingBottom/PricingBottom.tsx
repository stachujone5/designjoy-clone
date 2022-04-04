import classes from './PricingBottom.module.scss'
import pricingImg3 from '../../../images/PricingImages3.png'
import pricingImg4 from '../../../images/PricingImages4.png'
import pricingImg5 from '../../../images/PricingImages5.png'

export const PricingBottom = () => {
	return (
		<div className={classes.box}>
			<div className={classes.top}>
				<h3 className={classes['box-title']}>Power-ups</h3>
				<p>Take design to the next level with these premium add-ons. Individually priced.</p>
			</div>
			<div className={classes.bottom}>
				<div className={classes.item}>
					<div className={classes.img}>
						<img src={pricingImg3} alt='' />
					</div>
					<p className={classes.cta}>NOW AVAILABLE</p>
					<p className={classes.title}>Animations</p>
					<p>Bring things to life with audience-hooking, eye-catching animations.</p>
					<a href='#more'>Learn more</a>
				</div>
				<div className={classes.item}>
					<div className={classes.img}>
						<img src={pricingImg4} alt='' />
					</div>
					<p className={classes.cta}>NOW AVAILABLE</p>
					<p className={classes.title}>Custom illustrations</p>
					<p>Premier illustrations provided by artists behind your favorite brands.</p>
					<a href='#more'>Learn more</a>
				</div>
				<div className={classes.item}>
					<div className={classes.img}>
						<img src={pricingImg5} alt='' />
					</div>
					<p className={`${classes.cta} ${classes.special}`}>COMING SOON</p>
					<p className={classes.title}>3D design</p>
					<p>Stunning 3D objects & illustrations that will leave your audience in awe.</p>
				</div>
			</div>
		</div>
	)
}
