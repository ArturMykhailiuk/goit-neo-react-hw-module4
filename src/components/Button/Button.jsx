import clsx from 'clsx'
import css from './Button.module.css'
import { FaVirus } from 'react-icons/fa'

const Button = ({ children, primary, secondary }) => {
	return (
		<button
			// className={clsx(css.btn, {
			// 	[css.primary]: primary,
			// 	[css.secondary]: secondary,
			// })}
			className={clsx(
				css.btn,
				primary && css.primary,
				secondary && css.secondary
			)}
		>
			<FaVirus className={css.icon} />
			{children}
		</button>
	)
}

export default Button

// const user = {
// 	name: 'Alex',
// }

// const user2 = {
// 	[user.name]: 'QQQ',
// }
