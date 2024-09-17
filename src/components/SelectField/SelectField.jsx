const SelectField = ({ labelText, selectValue, change, selectName }) => {
	const handleChange = ({ target: { value, name } }) => {
		change(value, name)
	}

	return (
		<label>
			{labelText}
			<br />
			<select value={selectValue} onChange={handleChange} name={selectName}>
				<option value='en'>En</option>
				<option value='ua'>UA</option>
				<option value='fr'>FR</option>
			</select>
		</label>
	)
}

export default SelectField
