import { Button } from '../../components/button/Button'
import { SectionHeader } from '../../components/section_header/SectionHeader'
import latest1 from '../../images/Latest1.svg'
import latestDivider from '../../images/LatestDivider.svg'
import classes from './Latest.module.scss'
import { LatestImagesTop } from './latestImagesBottom/LatestImagesTop'
import { LatestImagesBottom } from './latestImagesTop/LatestImagesBottom'

export const Latest = () => {
	return (
		<section className={classes.latest}>
			<div className='container'>
				<SectionHeader h1='Recent work' h2='Award winning designs, and nothing less.' />
				<div className={classes.btn}>
					<Button href='#works'>View recent work</Button>
				</div>
				<LatestImagesTop />
				<LatestImagesBottom />
			</div>
			<img src={latestDivider} alt='' className={`${classes.decoration} ${classes.d1}`} />
			<img src={latest1} alt='' className={`${classes.decoration} ${classes.d2}`} />
		</section>
	)
}
