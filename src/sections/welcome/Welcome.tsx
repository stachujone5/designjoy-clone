import { AiFillHeart } from 'react-icons/ai'
import { Button } from '../../components/button/Button'
import welcome1 from '../../images/Welcome1.svg'
import welcome2 from '../../images/Welcome2.svg'

import classes from './Welcome.module.scss'
export const Welcome = () => {
	return (
		<section className={classes.welcome} id='welcome'>
			<img src={welcome1} alt='' className={classes.welcome1} />
			<img src={welcome2} alt='' className={classes.welcome2} />
			<div className='container'>
				<h1 className={classes.heading}>A design agency with a twist</h1>
				<h2 className={classes.subheading}>Design subscriptions to scale your business.</h2>
				<Button href='#pricing'>See plans</Button>
				<p className={classes['header-text']}>Designs you'll {<AiFillHeart />}, guaranteed</p>
			</div>
		</section>
	)
}
