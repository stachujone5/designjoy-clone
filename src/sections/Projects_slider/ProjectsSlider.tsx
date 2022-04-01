import classes from './ProjectsSlider.module.scss'
import img1 from '../../images/ProjectsSlider1.jpg'
import img2 from '../../images/ProjectsSlider2.jpeg'
import img3 from '../../images/ProjectsSlider3.png'
import img4 from '../../images/ProjectsSlider4.jpg'
import img5 from '../../images/ProjectsSlider5.jpg'
import { useEffect, useState } from 'react'

export const ProjectsSlider = () => {
	const [transform, setTransform] = useState(0)
	const transformValue = 0.1

	useEffect(() => {
		let oldScrollY = 0

		const handleSlider = () => {
			if (window.scrollY > oldScrollY) {
				setTransform(prevTransform => prevTransform - transformValue)
			} else {
				setTransform(prevTransform => prevTransform + transformValue)
			}

			oldScrollY = window.scrollY
		}

		window.addEventListener('scroll', handleSlider)

		return () => window.removeEventListener('scroll', handleSlider)
	}, [])

	return (
		<section className={classes.slider}>
			<div style={{ transform: `translate(${transform}%)` }} className={classes['images-container']}>
				<img src={img1} alt='Img of project made by designjoy' />
				<img src={img2} alt='Img of project made by designjoy' />
				<img src={img3} alt='Img of project made by designjoy' />
				<img src={img4} alt='Img of project made by designjoy' />
				<img src={img5} alt='Img of project made by designjoy' />
			</div>
		</section>
	)
}
