import clsx from 'clsx'
import css from './Card.module.css'

const Card = ({ children, title, footerTitle, primary, secondary }) => {
	return (
		<div
			className={clsx(
				css.card,
				primary && css.primary,
				secondary && css.secondary
			)}
		>
			<h2 className={css.title}>{title}</h2>
			<div className={css.content}>{children}</div>
			{footerTitle && (
				<footer className={css.footer}>
					<p>{footerTitle}</p>
				</footer>
			)}
		</div>
	)
}

export default Card
