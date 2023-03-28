'use client'

import { Input } from '@nextui-org/react'

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

export const SearchBar = () => {
	return <Input bordered labelPlaceholder="Search..." />
}
