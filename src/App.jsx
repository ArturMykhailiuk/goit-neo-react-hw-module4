import { useState } from 'react'
import SearchField from './components/SearchField/SearchField'
import ControlForm from './components/ControlForm/ControlForm'

const App = () => {
	// const [searchValue, setSearchValue] = useState('')

	// const handleSearch = (value) => {
	// 	setSearchValue(value)
	// }

	const handleSave = (data) => {
		console.log('data', data)
	}

	return (
		<div>
			<ControlForm save={handleSave} />
			{/* <Form onSave={handleSave} /> */}
			{/* <SearchField
				labelText='Search'
				handleSearch={handleSearch}
				searchValue={searchValue}
			/> */}
			<hr />
			<hr />
			{/* <p>Search value: {searchValue}</p> */}

			<hr />
			{/* Your name:{name}
			<br />
			Your address:{address}
			<br />
			Your Lang:{lang} */}
		</div>
	)
}
// const App = () => {
// 	const [name, setName] = useState('')
// 	const [address, setAddress] = useState('')
// 	const [lang, setLang] = useState('')

// 	const handleSave = (data) => {
// 		setAddress(data.address)
// 		setName(data.name)
// 		setLang(data.lang)
// 	}

// 	return (
// 		<div>
// 			{/* <Form onSave={handleSave} /> */}
// 			<label>
// 				Search:
// 				<br />
// 				<input type='text' />
// 			</label>
// 			<hr />
// 			<hr />

// 			<hr />
// 			{/* Your name:{name}
// 			<br />
// 			Your address:{address}
// 			<br />
// 			Your Lang:{lang} */}
// 		</div>
// 	)
// }

export default App
