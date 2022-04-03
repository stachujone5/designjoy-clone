import classes from './LatestImagesBottom.module.scss'
import latestFooter1 from '../../../images/LatestsFooter1.svg'
import latestFooter2 from '../../../images/LatestsFooter2.svg'
import latestFooter3 from '../../../images/LatestsFooter3.svg'
import latestFooter4 from '../../../images/LatestsFooter4.svg'

export const LatestImagesBottom = () => {
	return (
		<div className={classes.footer}>
			<p>Designs commonly featured by</p>
			<div className={classes.images}>
				<img src={latestFooter1} alt='' />
				<img src={latestFooter2} alt='' />
				<img src={latestFooter3} alt='' />
				<img src={latestFooter4} alt='' />
			</div>
		</div>
	)
}
