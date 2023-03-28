'use client'

import { Input, Avatar } from '@nextui-org/react'

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
	return (
		<Input clearable className="border-white " labelPlaceholder="Search..." />
	)
}

export const UserAvatar = ({ text }) => {
	return <Avatar text={text} color="gradient" />
}
