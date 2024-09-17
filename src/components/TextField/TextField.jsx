const TextField = ({ labelText, textValue, change, inputName }) => {
	const handleChange = ({ target: { value, name } }) => {
		change(value, name)
	}

	return (
		<label>
			{labelText}
			<br />
			<input
				type='text'
				name={inputName}
				value={textValue}
				onChange={handleChange}
			/>
		</label>
	)
}

export default TextField
