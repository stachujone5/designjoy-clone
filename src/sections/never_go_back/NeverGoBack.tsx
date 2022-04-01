import classes from './NeverGoBack.module.scss'
import ceo from '../../images/NeverCeo.jpg'
import divider from '../../images/NeverDivider.svg'
import never1 from '../../images/Never1.svg'
import never2 from '../../images/Never2.svg'
import { MdFormatQuote } from 'react-icons/md'
import { SectionHeader } from '../../components/section_header/SectionHeader'

export const NeverGoBack = () => {
	return (
		<section className={classes.never}>
			<div className='container'>
				<SectionHeader
					h1="It's “you'll never go back” better"
					h2='Designjoy replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs
					delivered so fast that it will blow your mind.'
				/>
				<div className={classes.info}>
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
					<div className={classes.questions}>
						<p className={classes.question}>Totally async</p>
						<p className={classes.answer}>
							Don't like meetings? We don't either; so much so that we've outlawed them completely.
						</p>
						<p className={classes.question}>Manage with Trello</p>
						<p className={classes.answer}>
							Manage your design queue using Trello. View active, queued and completed tasks with ease.
						</p>
						<p className={classes.question}>Invite unlimited team members</p>
						<p className={classes.answer}>
							Invite unlimited users to your team, so anyone can submit requests and track their progress.
						</p>
					</div>
				</div>
			</div>
			<img src={divider} alt='' className={`${classes.decoration} ${classes.d1}`} />
			<img src={never1} alt='' className={`${classes.decoration} ${classes.d2}`} />
			<img src={never2} alt='' className={`${classes.decoration} ${classes.d3}`} />
		</section>
	)
}
