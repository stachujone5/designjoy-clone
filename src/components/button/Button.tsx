import classes from './Button.module.scss'

interface ButtonProps {
	href: string
	children: React.ReactNode
}

export const Button = ({ href, children }: ButtonProps) => {
	return (
		<a className={classes.btn} href={href}>
			{children}
		</a>
	)
}
