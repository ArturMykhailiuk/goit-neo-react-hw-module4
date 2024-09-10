import { useState } from 'react'
import Test from './components/Test/Test'
import Test2 from './components/Test2/Test2'

const App = () => {
	const [state, setState] = useState(0)

	const handleState = (value) => {
		setState(value)
	}

	return (
		<div>
			<Test value={state} />
			<br />
			<Test2 someFn={handleState} />
		</div>
	)
}

export default App

// import { useState } from 'react'

// const App = () => {
// 	const [clicks, setClicks] = useState({
// 		click1: 0,
// 		click2: 0,
// 		user: '',
// 	})
// 	const handleClick = (name) => {
// 		setClicks({
// 			...clicks,
// 			[name]: clicks[name] + 1,
// 		})
// 	}

// 	return (
// 		<div>
// 			<button onClick={() => handleClick('click1')}>
// 				click 1 {clicks.click1}
// 			</button>
// 			<br />
// 			<p>Sum: {clicks.click1 + clicks.click2}</p>
// 			<br />
// 			<button onClick={() => handleClick('click2')}>
// 				click 2 {clicks.click2}
// 			</button>
// 		</div>
// 	)
// }

// export default App

// const handleClick = (id) => {

//  }
// document.addEventListener('submit', handleClick)
// document.addEventListener('click',()=>{handleClick('qweqwyeut')})
// import { useState } from 'react'

// const Clicker = ({ value, clickFn }) => {
// 	// const [counter, setCounter] = useState(0)

// 	// const handleClick = () => {
// 	// 	setCounter(counter + 1)
// 	// 	console.log('counter', counter)
// 	// }
// 	return <button onClick={clickFn}>Click 1 {value}</button>
// }

// const App = () => {
// 	// let counter = 0

// 	const [counter, setCounter] = useState(0)
// 	const [counter2, setCounter2] = useState(0)

// 	const handleClick = () => {
// 		setCounter(counter + 1)
// 	}

// 	const handleClick2 = () => {
// 		setCounter2(counter2 + 1)
// 	}

// 	return (
// 		<div>
// 			<Clicker value={counter} clickFn={handleClick} />
// 			<br />
// 			<p>Sum: {counter + counter2}</p>
// 			<br />
// 			<Clicker value={counter2} clickFn={handleClick2} />

// 			{/* <button onClick={() => handleClick(5)}>Click</button> */}
// 			{/* <button onClick={handleClick}>Click 1 {counter}</button> */}
// 		</div>
// 	)
// }

// export default App

// // const handleClick = (id) => {

// //  }
// // document.addEventListener('submit', handleClick)
// // document.addEventListener('click',()=>{handleClick('qweqwyeut')})

// const user = {
// 	name:'Alex',
// 	age:42
// }

// // user.name = 'Bob'
// user = {
// 	...user,
// 	name:'Bob'
// }
// user === user
