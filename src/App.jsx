import ControlForm from './components/ControlForm/ControlForm'
import FormFormik from './components/FormFormik/FormFormik'

const App = () => {
	const handleSave = (data) => {
		console.log('data', data)
	}
	const handleSaveFormik = (data) => {
		console.log('FormikData', data)
	}

	return (
		<div>
			<FormFormik save={handleSaveFormik} />
			<hr />
			<hr />
			<hr />
			<ControlForm save={handleSave} />
		</div>
	)
}
export default App
