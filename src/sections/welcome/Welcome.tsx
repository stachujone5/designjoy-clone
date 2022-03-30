import { AiFillHeart } from 'react-icons/ai'
import { Button } from '../../components/button/Button'

import classes from './Welcome.module.scss'
export const Welcome = () => {
	return (
		<section className={classes.welcome}>
			<div className='container'>
				<h1>A design agency with a twist</h1>
				<h2>Design subscriptions to scale your business.</h2>
				<Button href='#plans'>See plans</Button>
				<p>Designs you'll {<AiFillHeart />}, guaranteed</p>
			</div>
		</section>
	)
}
