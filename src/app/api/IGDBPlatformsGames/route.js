import { IGDBWhereQueryBuilder } from '@/utilities/utilities'
import { NextResponse, NextRequest } from 'next/server'
export const dynamic = 'force-dynamic'

export async function GET(req, res) {
	const fetchGames = async () => {
		console.log('fetching')
		const client_id = 'zm1q09qmyhsfoi25k3h3tfoi2g1t3o'
		const auth_token = 'Bearer 9d8zcztfona0dh78qk9wwzy0kwtfg6'
		const url = 'https://api.igdb.com/v4/games'
		const { searchParams } = new URL(NextRequest.url)
		const platformsFromQuery = searchParams.get('platforms').split(' ')
		console.log(platformsFromQuery)

		const headers = {
			'Client-ID': client_id,
			Authorization: auth_token,
		}
		const whereQueryPart = IGDBWhereQueryBuilder(platformsFromQuery)
		// console.log(whereQueryPart)

		const data = `
    fields name,category,platforms,aggregated_rating, rating, cover.image_id, summary, genres.name;
    sort aggregated_rating desc;
    where ${whereQueryPart}; 
    limit 20;
    `

		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: headers,
				body: data,
			})

			if (!response.ok) {
				throw new Error('Request failed with status ' + response.status)
			}

			// console.log('fetched')
			const games = await response.json()
			return games
		} catch (error) {
			// console.error('Error:', error.message)
			throw error
		}
	}
	try {
		const games = await fetchGames()
		// console.log({ games })
		return NextResponse.json(games)
	} catch (error) {
		console.log(error)
		return NextResponse.status(500).json({ error: 'Internal Server Error' })
	}
}
