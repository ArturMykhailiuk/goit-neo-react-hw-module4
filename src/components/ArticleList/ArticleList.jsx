const ArticleList = ({ items }) => {
	return (
		<ul>
			{items.map((item) => (
				<li key={item.story_id}>
					<a href={item.url}>{item.title}</a>
				</li>
			))}
		</ul>
	)
}

export default ArticleList
