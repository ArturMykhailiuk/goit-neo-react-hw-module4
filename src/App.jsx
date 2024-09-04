import './App.css'
import data from '../posts.json'
import Post from './components/Post/Post'

// const Post = ({ post }) => {
// 	return (
// 		<>
// 			<h2>title: {post.title}</h2>
// 			<p>body: {post.body}</p>
// 		</>
// 	)
// }

function App() {
	// const elms = data.map((el) => {
	// 	return <Post post={el} />
	// })
	return (
		<div>
			{data.map((el) => (
				<Post post={el} key={el.id} />
			))}
			{/* 
			<Post post={data[0]} />
			<Post post={data[1]} />
			<Post post={data[2]} /> */}
		</div>
	)
}

export default App

// const TestComponent = ({ name, age }) => {
// 	// return <div>{name ? <p>Name: {name}</p> : <h2>{age}</h2>}</div>
// 	return (
// 		<div>
// 			{false}
// 			{true}
// 			{null}
// 			{undefined}
// 			{name && <p>Name: {name}</p>}
// 			<h2>{age}</h2>
// 		</div>
// 	)
// }

// function App() {
// 	const name = 'Den'

// 	return (
// 		<div>
// 			<h1>{name}</h1>
// 			{/* {TestComponent({ age: '10' })} */}
// 			{/* <TestComponent age='10' /> */}
// 			<TestComponent name={0} age={30} />
// 			<TestComponent age={20} />
// 		</div>
// 	)
// }

// export default App
