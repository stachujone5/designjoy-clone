import classes from './BenefitsBox.module.scss'

interface BenefitsBoxProps {
	icon?: JSX.Element
	h3?: string
	p?: string
}

export const BenefitsBox = ({ icon, h3, p }: BenefitsBoxProps) => {
	return (
		<div className={classes.box}>
			{icon}
			<h3>{h3}</h3>
			<p>{p}</p>
		</div>
	)
}
