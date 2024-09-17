import { useState } from 'react'
import SelectField from '../SelectField/SelectField'
import TextField from '../TextField/TextField'

const defState = {
	firstName: '',
	address: '',
	phone: '',
	lang: 'ua',
}

const ControlForm = ({ save }) => {
	const [formState, setFormState] = useState(defState)

	const handleSubmit = (e) => {
		e.preventDefault()
		save(formState)
		// e.target.reset()
		setFormState(defState)
	}

	const handleChange = (newValue, name) => {
		if (newValue.includes('@')) return
		setFormState({
			...formState,
			[name]: newValue,
		})
	}
	// const handleFirstNameChange = (newValue, name) => {
	// 	setFormState({
	// 		...formState,
	// 		[name]: newValue,
	// 	})
	// }

	// const handleAddressChange = (newValue, name) => {
	// 	console.log('name', name)
	// 	setFormState({
	// 		...formState,
	// 		address: newValue,
	// 	})
	// }

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				labelText='First Name'
				textValue={formState.firstName}
				change={handleChange}
				inputName='firstName'
			/>
			<br />
			<br />
			<TextField
				labelText='Address'
				textValue={formState.address}
				change={handleChange}
				inputName='address'
			/>
			<br />
			<br />
			<TextField
				labelText='Phone'
				textValue={formState.phone}
				change={handleChange}
				inputName='phone'
			/>
			<br />
			<br />
			<SelectField
				change={handleChange}
				selectName='lang'
				labelText='Lang'
				selectValue={formState.lang}
			/>
			<br />
			<br />
			<button type='submit'>Save</button>
		</form>
	)
}

export default ControlForm
