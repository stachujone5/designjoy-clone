import { useState } from 'react'
import classes from './FaqItem.module.scss'
import { IoIosArrowDown } from 'react-icons/io'

interface FaqItemProps {
	question: string
	answer: string
}

export const FaqItem = ({ question, answer }: FaqItemProps) => {
	const [isActive, setIsActive] = useState(false)

	return (
		<div className={classes.item}>
			<div className={classes.top}>
				<p>{question}</p>
				<button
					className={isActive ? `${classes.active}` : ''}
					onClick={() => {
						setIsActive(prevState => !prevState)
					}}>
					<IoIosArrowDown />
				</button>
			</div>
			{isActive && (
				<div>
					<p>{answer}</p>
				</div>
			)}
		</div>
	)
}
