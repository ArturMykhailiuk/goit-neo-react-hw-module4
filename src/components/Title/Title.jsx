import clsx from 'clsx'
import css from './Title.module.css'

const Title = ({ isPrimary, children }) => {
	return (
		<h1 className={clsx(css.title, isPrimary ? css.primary : css.secondary)}>
			{children}
		</h1>
	)
	// return <h1 className={clsx(css.title, isPrimary && css.primary)}>Title</h1>
	// return <h1 className={clsx(css.secondary)}>Title</h1>
}

export default Title
// import css from './Title.module.css'

// const isPrimary = false

// const Title = () => {
// 	const classNames = [css.title]

// 	if (isPrimary) {
// 		classNames.push(css.primary)
// 	}

// 	console.log('classNames', classNames.join(' '))

// 	return <h1 className={classNames.join(' ')}>Title</h1>
// 	// return <h1 className={css.title}>Title</h1>
// }

// export default Title
