'use client'
import axios from 'axios'

import React from 'react'
import { useQuery } from 'react-query'

export default function Slug({ params }) {
	const { data, error, isLoading } = useQuery('game', async () => {
		return axios.get(`http://localhost:3000/api/lookUpGames?searchQuery=${params.slug}`)
	})
	if (isLoading) {
		return <div className="h-full">Loading... the game bruh</div>
	}

	if (error) {
		return <p>Error: {error.message}</p>
	}

	return (
		<div className="h-full  bg-slate-700">
			{params.slug}
			{JSON.stringify(data)}
			{/* <img src={imgURL} alt="" /> */}
		</div>
	)
}
