import classes from './SectionHeader.module.scss'

interface SectionHeaderProps {
	h1: string
	h2: string
}

export const SectionHeader = ({ h1, h2 }: SectionHeaderProps) => {
	return (
		<>
			<h1 className={classes.h1}>{h1}</h1>
			<h2 className={classes.h2}>{h2}</h2>
		</>
	)
}
