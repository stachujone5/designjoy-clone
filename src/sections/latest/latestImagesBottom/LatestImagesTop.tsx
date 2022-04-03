import latestImg1 from '../../../images/LatestImg1.jpg'
import latestImg2 from '../../../images/LatestImg2.jpg'
import latestImg3 from '../../../images/LatestImg3.jpg'
import latestImg4 from '../../../images/LatestImg4.jpg'
import classes from './LatestImagesTop.module.scss'

export const LatestImagesTop = () => {
	return (
		<div className={classes['box-container']}>
			<div className={classes.box}>
				<img src={latestImg1} alt='' />
			</div>
			<div className={classes.box}>
				<img src={latestImg2} alt='' />
			</div>
			<div className={classes.box}>
				<img src={latestImg3} alt='' />
			</div>
			<div className={classes.box}>
				<img src={latestImg4} alt='' />
			</div>
		</div>
	)
}
