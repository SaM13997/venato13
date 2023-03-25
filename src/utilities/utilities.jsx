export const getGamesFromQuery = (games) => {
	return games.map((game) => {
		return {
			id: game.id,
			slug: game.slug,
			name: game.name,
			bgImage: game.background_image,
			rating: game.rating,
		}
	})
}
