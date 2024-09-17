const SearchField = ({ labelText, searchValue, handleSearch }) => {
	const handleChange = ({ target: { value } }) => {
		handleSearch(value)
	}

	return (
		<label>
			{labelText}:
			<br />
			<input type='text' value={searchValue} onChange={handleChange} />
		</label>
	)
}

export default SearchField

// const input = document.querySelector('input')

// input.addEventListener('input', ({ target: { value } }) => {
// 	console.log('value', value)
// })
// ale
// 'Alex'
// users.filter((el) => el.name.includes(searchValue))
