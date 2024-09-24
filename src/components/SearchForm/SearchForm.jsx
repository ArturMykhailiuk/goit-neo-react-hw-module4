import { Field, Form, Formik } from 'formik'

const SearchForm = ({ onSearch }) => {
	const handleSubmit = (values, actions) => {
		onSearch(values.query)
		actions.reset()
	}

	return (
		<Formik
			initialValues={{
				query: '',
			}}
			onSubmit={handleSubmit}
		>
			<Form>
				<Field name='query' />
				<button>Search</button>
			</Form>
		</Formik>
	)
}

export default SearchForm
