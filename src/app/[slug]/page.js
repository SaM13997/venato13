import React from 'react'
import { NextRequest } from 'next/server'

async function getIGDBData(gameID) {
	const res = await import('@/app/api/igdbGameSearch/route')
	return await (
		await res.GET(new NextRequest(`http://local.com/api?gameID=${gameID}`))
	).json()
}
async function getRawgData(gameID) {
	const res = await import('@/app/api/rawgGameSearch/route')
	return await (
		await res.GET(new NextRequest(`http://local.com/api?gameID=${gameID}`))
	).json()
}

export default async function Slug({ params, searchParams }) {
	const { slug: gameID } = params
	const { api } = searchParams
	let data
	if (api === 'rawg') {
		data = await getRawgData(gameID)
	} else {
		data = await getIGDBData(gameID)
	}
	return (
		<div className="h-full  bg-slate-700">
			{gameID}
			{api === 'rawg' ? JSON.stringify(data.data) : JSON.stringify(data)}
			{/* //! Implement the <GameDetails /> component */}
			{/* {api === 'rawg' ? (
				<GameDetails game={data.data} />
			) : (
				<GameDetails game={data} />
			)} */}
		</div>
	)
}
