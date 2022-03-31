import { useEffect, useState } from 'react'
import img1 from '../../images/BrandsSlider1.svg'
import img2 from '../../images/BrandsSlider2.svg'
import img3 from '../../images/BrandsSlider3.svg'
import img4 from '../../images/BrandsSlider4.svg'
import img5 from '../../images/BrandsSlider5.svg'
import img6 from '../../images/BrandsSlider6.svg'
import img7 from '../../images/BrandsSlider7.svg'
import img8 from '../../images/BrandsSlider8.svg'
import classes from './Brands_slider.module.scss'

export const BrandsSlider = () => {
	const [transform, setTransform] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			if (transform < 50) {
				setTransform(prevTransform => prevTransform + 0.025)
			} else {
				setTransform(0)
			}
		}, 10)

		return () => clearInterval(interval)
	}, [transform])

	return (
		<section className={classes.slider}>
			<div className={classes['images-container']} style={{ transform: `translate(-${transform}%)` }}>
				<div className={classes.brand}>
					<img src={img1} alt='' />
				</div>
				<div className={classes.brand}>
					<img src={img2} alt='' />
				</div>
				<div className={classes.brand}>
					<img src={img3} alt='' />
				</div>
				<div className={classes.brand}>
					<img src={img4} alt='' />
				</div>
				<div className={classes.brand}>
					<img src={img5} alt='' />
				</div>
				<div className={classes.brand}>
					<img src={img6} alt='' />
				</div>
				<div className={classes.brand}>
					<img src={img7} alt='' />
				</div>
				<div className={classes.brand}>
					<img src={img8} alt='' />
				</div>
				<div className={classes.brand}>
					<img src={img1} alt='' />
				</div>
				<div className={classes.brand}>
					<img src={img2} alt='' />
				</div>
				<div className={classes.brand}>
					<img src={img3} alt='' />
				</div>
				<div className={classes.brand}>
					<img src={img4} alt='' />
				</div>
				<div className={classes.brand}>
					<img src={img5} alt='' />
				</div>
				<div className={classes.brand}>
					<img src={img6} alt='' />
				</div>
				<div className={classes.brand}>
					<img src={img7} alt='' />
				</div>
				<div className={classes.brand}>
					<img src={img8} alt='' />
				</div>
			</div>
		</section>
	)
}
