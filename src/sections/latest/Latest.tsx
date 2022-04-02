import { Button } from '../../components/button/Button'
import { SectionHeader } from '../../components/section_header/SectionHeader'
import latest1 from '../../images/Latest1.svg'
import latestDivider from '../../images/LatestDivider.svg'
import latestImg1 from '../../images/LatestImg1.jpg'
import latestImg2 from '../../images/LatestImg2.jpg'
import latestImg3 from '../../images/LatestImg3.jpg'
import latestImg4 from '../../images/LatestImg4.jpg'
import latestFooter1 from '../../images/LatestsFooter1.svg'
import latestFooter2 from '../../images/LatestsFooter2.svg'
import latestFooter3 from '../../images/LatestsFooter3.svg'
import latestFooter4 from '../../images/LatestsFooter4.svg'
import classes from './Latest.module.scss'

export const Latest = () => {
	return (
		<section className={classes.latest}>
			<div className='container'>
				<SectionHeader h1='Recent work' h2='Award winning designs, and nothing less.' />
				<div className={classes.btn}>
					<Button href='#works'>View recent work</Button>
				</div>
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
				<div className={classes.footer}>
					<p>Designs commonly featured by</p>
					<div className={classes.images}>
						<img src={latestFooter1} alt='' />
						<img src={latestFooter2} alt='' />
						<img src={latestFooter3} alt='' />
						<img src={latestFooter4} alt='' />
					</div>
				</div>
			</div>

			<img src={latestDivider} alt='' className={`${classes.decoration} ${classes.d1}`} />
			<img src={latest1} alt='' className={`${classes.decoration} ${classes.d2}`} />
		</section>
	)
}
