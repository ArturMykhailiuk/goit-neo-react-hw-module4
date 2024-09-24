import { Field, Form, Formik, ErrorMessage } from 'formik'
import css from './FormFormik.module.css'
import * as Yup from 'yup'

const testSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, 'Error length')
		.max(5)
		.required('Error required'),
	address: Yup.string().min(2).max(5).required('Error'),
	phone: Yup.string().min(2).max(5).required('Error'),
	lang: Yup.string().equals(['ua', 'en']).required('Error'),
})

const FormFormik = ({ save }) => {
	const handleSubmit = (values, actions) => {
		save(values)
		actions.resetForm()
	}

	return (
		<Formik
			initialValues={{
				firstName: '',
				address: '',
				phone: '',
				lang: 'en',
			}}
			onSubmit={handleSubmit}
			validationSchema={testSchema}
		>
			<Form>
				<Field type='text' name='firstName' className={css.field} />
				<ErrorMessage name='firstName' component='span' className={css.error} />
				<br />
				<Field type='text' name='address' />
				<ErrorMessage name='address' />
				<br />
				<Field type='text' name='phone' />
				<ErrorMessage name='phone' />
				<br />
				<br />
				<Field name='lang' as='select'>
					<option value='ua'>UA</option>
					<option value='en'>EN</option>
				</Field>
				<ErrorMessage name='lang' />
				<br />
				<button type='submit'>Sub</button>
			</Form>
		</Formik>
	)
}
// <Formik
// 	initialValues={{
// 		firstName: '',
// 		address: '',
// 		phone: '',
// 		phone2: '',
// 		lang: 'en',
// 	}}
// 	onSubmit={handleSubmit}
// >
// 	{/* {(formikProps) => { */}
// 	{() => {
// 		// console.log('formikProps', formikProps)
// 		return (
// 			<Form>
// 				<TextField
// 					labelText='First Name'
// 					textValue={formikProps.values.firstName}
// 					change={formikProps.handleChange}
// 					inputName='firstName'
// 				/>
// 				<input
// 					type='text'
// 					name='firstName'
// 					value={formikProps.values.firstName}
// 					onChange={formikProps.handleChange}
// 				/>
// 				<br />
// 				<Field type='text' name='address' />
// 				<br />
// 				<Field type='text' name='phone' />
// 				<br />
// 				<Field type='text' name='phone2' />
// 				<br />
// 				<br />
// 				<Field name='lang' as='select'>
// 					<option value='ua'>UA</option>
// 					<option value='en'>EN</option>
// 				</Field>
// 				<br />
// 				<button type='submit'>Sub</button>
// 			</Form>
// 		)
// 	}}
// 	{/* <Form>
// 		<Field type='text' name='firstName' className={css.field} />
// 		<br />
// 		<Field type='text' name='address' />
// 		<br />
// 		<Field type='text' name='phone' />
// 		<br />
// 		<Field type='text' name='phone2' />
// 		<br />
// 		<br />
// 		<Field name='lang' as='select'>
// 			<option value='ua'>UA</option>
// 			<option value='en'>EN</option>
// 		</Field>
// 		<br />
// 		<button type='submit'>Sub</button>
// 	</Form> */}
// </Formik>

export default FormFormik
// import { Field, Form, Formik } from 'formik'
// import css from './FormFormik.module.css'

// const FormFormik = ({ save }) => {
// 	const handleSubmit = (values, actions) => {
// 		save(values)
// 		actions.resetForm()
// 	}

// 	return (
// 		<Formik
// 			initialValues={{
// 				firstName: '',
// 				address: '',
// 				phone: '',
// 				phone2: '',
// 				lang: 'en',
// 			}}
// 			onSubmit={handleSubmit}
// 		>
// 			<Form>
// 				<Field type='text' name='firstName' className={css.field} />
// 				<br />
// 				<Field type='text' name='address' />
// 				<br />
// 				<Field type='text' name='phone' />
// 				<br />
// 				<Field type='text' name='phone2' />
// 				<br />
// 				<br />
// 				<Field name='lang' as='select'>
// 					<option value='ua'>UA</option>
// 					<option value='en'>EN</option>
// 				</Field>
// 				<br />
// 				<button type='submit'>Sub</button>
// 			</Form>
// 		</Formik>
// 	)
// }

// export default FormFormik
