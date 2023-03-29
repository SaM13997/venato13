'use client'

import { Input, Avatar } from '@nextui-org/react'
import { useState } from 'react'

export const getGamesFromQuery = (games) => {
	return games.map((game) => {
		return {
			id: game.id,
			slug: game.slug,
			name: game.name,
			bgImage: game.background_image,
			rating: game.rating,
			metacritic: game.metacritic,
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

export const MetacriticSquare = ({ score }) => {
	// const [bgColor, setBgColor] = useState('#66CC33')
	if (!score) {
		return null
	}
	let bgColor
	if (score > 75) {
		bgColor = '#66CC33'
	} else if (score < 75 && score > 50) {
		bgColor = '#FFCC33'
	} else if (score < 50) {
		bgColor = '#FF0000'
	}

	return (
		<div
			className="flex items-center justify-center w-16 h-16 text-xl rounded-md square"
			style={{
				backgroundColor: bgColor,
			}}
		>
			{score}
		</div>
	)
}
