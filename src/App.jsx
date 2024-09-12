import { useEffect, useState } from 'react'
import posts from '../posts.json'
import Paginator from './components/Paginator/Paginator'
import Post from './components/Post/Post'

const getDefaultPage = () => {
	const newPage = localStorage.getItem('curPost')
	if (newPage !== null) {
		return JSON.parse(newPage)
	}
	return 1
}

const App = () => {
	const [curPost, setCurPost] = useState(getDefaultPage)

	const handlePrev = () => {
		if (curPost === 1) return
		setCurPost(curPost - 1)
	}

	const handleNext = () => {
		if (curPost === posts.length) return
		setCurPost(curPost + 1)
	}

	// useEffect(() => {
	// 	const page = localStorage.getItem('curPost')
	// 	if(page!==null){
	// 		setCurPost(JSON.parse(page))
	// 	}
	// }, [])

	useEffect(() => {
		localStorage.setItem('curPost', curPost)
	}, [curPost])

	return (
		<div>
			<Paginator prev={handlePrev} next={handleNext}>
				{curPost}/{posts.length}
			</Paginator>
			<Post post={posts[curPost - 1]} />
		</div>
	)
}

export default App
// function fn(clb, arr, prevState, prevProps) {
// 	if (arr[0] === prevState[0]) {
// 		return
// 	} else clb()
// }

// fn(a, b)
// import { useEffect, useState } from 'react'
// // import Test from './components/Test/Test'

// const App = () => {
// 	const [state, setState] = useState(0)
// 	const [curDate, setCurDate] = useState(new Date().getTime())
// 	// const [isShowInterval, setIsShowInterval] = useState(false)

// 	// // console.log('Outside')

// 	// Mount + Update
// 	// useEffect(() => {
// 	// 	console.log('Mount + Update')
// 	// })

// 	// // Mount
// 	// useEffect(() => {
// 	// 	console.log('Mount')
// 	// }, [])

// 	// // Mount + Update state
// 	useEffect(() => {
// 		// if (state === 0) return
// 		console.log('Update', state)
// 	}, [state])

// 	useEffect(() => {
// 		console.log('date', curDate)
// 	}, [curDate])

// 	// // Unmount
// 	// useEffect(() => {
// 	// 	return () => {
// 	// 		console.log('Unmount')
// 	// 	}
// 	// }, [state])

// 	return (
// 		<div>
// 			<button onClick={() => setState(state + 1)}>Click {state}</button>
// 			<button onClick={() => setCurDate(new Date().getTime())}>
// 				Click {curDate}
// 			</button>
// 			{/* <button onClick={() => setIsShowInterval(!isShowInterval)}>
// 				{isShowInterval ? 'Hide' : 'Show'} interval
// 			</button>
// 			{isShowInterval && <Test />} */}
// 		</div>
// 	)
// }

// export default App
// // function fn(clb, arr, prevState, prevProps) {
// // 	if (arr[0] === prevState[0]) {
// // 		return
// // 	} else clb()
// // }

// // fn(a, b)
