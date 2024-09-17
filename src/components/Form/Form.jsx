import { useId } from 'react'

const Form = ({ onSave }) => {
	const nameId = useId()
	const addressId = useId()
	const langId = useId()

	const handleSubmit = (e) => {
		e.preventDefault()
		// const data = {
		// 	name: e.target.elements.name.value,
		// 	address: e.target.elements.address.value,
		// 	lang: e.target.elements.lang.value,
		// }
		onSave({
			name: e.target.elements.name.value,
			address: e.target.elements.address.value,
			lang: e.target.elements.lang.value,
		})
		e.target.reset()
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor={nameId}>Name</label>
			<input type='text' name='name' id={nameId} />
			<br />
			<label htmlFor={addressId}>Address</label>
			<input type='text' name='address' id={addressId} />
			<br />
			<label htmlFor={langId}>Lang</label>
			<select name='lang' id={langId}>
				<option value='en'>EN</option>
				<option value='ua'>UA</option>
				<option value='fr'>FR</option>
			</select>
			<br />
			<button type='submit'>Submit</button>
		</form>
	)
}

export default Form
