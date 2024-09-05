import Button from './components/Button/Button'
import Card from './components/Card/Card'
import Title from './components/Title/Title'
import ReactIcon from './assets/react.svg'

function App() {
	return (
		<div>
			<Title isPrimary>qwerty</Title>
			{/*  */}
			<Title isPrimary={false}>!!!!!</Title>
			<br />
			<br />
			<br />
			<Button>
				{/* <img src='../src/assets/react.svg' alt='' width={30} height={30} /> */}
				<img src={ReactIcon} alt='' width={30} height={30} />
			</Button>
			<Button primary>Click me</Button>
			<Button secondary>Click me again</Button>
			<br />
			<br />
			<br />
			<br />
			<Card title='TEST'>
				<ul>
					<li>qwe</li>
					<li>rty</li>
					<li>123</li>
				</ul>
			</Card>
			<Card secondary title='TEST 2'>
				<Button>Test</Button>
			</Card>
			<Card title='TEST 3' footerTitle='TEST' primary>
				<Button>Test</Button>
				<Button>Test</Button>
				<Button>Test</Button>
			</Card>
		</div>
	)
}

export default App
// import './App.css'
// import defCss from './App.module.css'

// console.log('defCss', defCss)

// function App() {
// 	return (
// 		<div>
// 			{/* <h1 className='title'>Hello</h1> */}
// 			<h1 className={defCss.title}>Hello</h1>
// 		</div>
// 	)
// }

// export default App
// import './App.css'
// import data from '../posts.json'
// import Post from './components/Post/Post'

// function App() {
// 	return (
// 		<div>
// 			{data.map((el) => (
// 				<Post post={el} key={el.id} />
// 			))}
// 		</div>
// 	)
// }

// export default App
