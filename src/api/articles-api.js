import axios from 'axios'

axios.defaults.baseURL = 'http://hn.algolia.com/api/v1'

export const fetchArticles = async (searchQuery, page) => {
	const { data } = await axios(`/search`, {
		params: {
			query: searchQuery,
			hitsPerPage: 10,
			page,
		},
	})
	return data.hits
}
