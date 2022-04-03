import classes from './Button.module.scss'

interface ButtonProps {
	href: string
	children: React.ReactNode
	className?: string
}

export const Button = ({ href, children, className }: ButtonProps) => {
	return (
		<a className={`${classes.btn} ${className ? className : ''}`} href={href}>
			{children}
		</a>
	)
}
