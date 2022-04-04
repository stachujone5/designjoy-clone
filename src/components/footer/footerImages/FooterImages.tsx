import classes from './FooterImages.module.scss'
import img1 from '../../../images/FooterImages1.svg'
import img2 from '../../../images/FooterImages2.svg'
import img3 from '../../../images/FooterImages3.svg'
import img4 from '../../../images/FooterImages4.svg'
import img5 from '../../../images/FooterImages5.svg'

export const FooterImages = () => {
	return (
		<div className={classes.images}>
			<div className={classes.img}>
				<img src={img1} alt='' />
			</div>
			<div className={classes.img}>
				<img src={img2} alt='' />
			</div>
			<div className={classes.img}>
				<img src={img3} alt='' />
			</div>
			<div className={classes.img}>
				<img src={img4} alt='' />
			</div>
			<div className={`${classes.img} ${classes.span}`}>
				<img src={img5} alt='' />
			</div>
		</div>
	)
}
