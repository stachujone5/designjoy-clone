import classes from './NeverBox.module.scss'
import ceo from '../../../images/NeverCeo.jpg'
import { MdFormatQuote } from 'react-icons/md'

export const NeverBox = () => {
	return (
		<div className={classes.box}>
			<MdFormatQuote />
			<h3>Design is everything and these guys have nailed it.</h3>
			<div className={classes['box-footer']}>
				<div className={classes.ceo}>
					<img src={ceo} alt='' />
				</div>
				<p>
					Kevin O'Leary. 🦈 <span>Shark Tank</span>
				</p>
			</div>
		</div>
	)
}
