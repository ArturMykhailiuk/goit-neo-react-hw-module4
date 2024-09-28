import { useEffect, useState } from 'react'
import ArticleList from './components/ArticleList/ArticleList'
import { fetchArticles } from './api/articles-api'
import SearchForm from './components/SearchForm/SearchForm'

const App = () => {
	const [articles, setArticles] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)
	const [page, setPage] = useState(1)
	const [searchQuery, setSearchQuery] = useState('')

	useEffect(() => {
		if (!searchQuery) return

		const getArticles = async () => {
			try {
				setIsLoading(true)
				setError(false)
				const res = await fetchArticles(searchQuery, page)
				setArticles((prevState) => {
					return [...prevState, ...res]
				})
			} catch (error) {
				console.error(error)
				setError(true)
			} finally {
				setIsLoading(false)
			}
		}
		getArticles()
	}, [page, searchQuery])

	const handleSearch = (query) => {
		setSearchQuery(query)
		setArticles([])
		setPage(1)
	}

	const handlePage = () => {
		setPage(page + 1)
	}

  return (
      <div>
			<SearchForm onSearch={handleSearch} />
			{error && <h3>Oops error... pls reload!</h3>}
			<hr />
			{articles.length > 0 && <ArticleList items={articles} />}

			{isLoading && <h2>Loading...</h2>}

			{articles.length > 0 && (
				<button onClick={handlePage}>Load more...</button>
			)}
      </div>

  )
}

export default App
