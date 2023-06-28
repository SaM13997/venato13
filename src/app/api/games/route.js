import { NextResponse } from 'next/server'

export async function GET(req, res) {
	const fetchGames = async () => {
		console.log('fetching')
		const client_id = 'zm1q09qmyhsfoi25k3h3tfoi2g1t3o'
		const auth_token = 'Bearer 97ix6j43i70u071ejxf7pqrlwxriqd'
		const url = 'https://api.igdb.com/v4/games'

		const headers = {
			'Client-ID': client_id,
			Authorization: auth_token,
		}

		const data = `fields *,screenshots;sort rating desc;
    where first_release_date > 1641016861; limit 20;`
		//slug,name,summary,cover,aggregated_rating,artworks,platforms.*
		// , platform.generation = 9

		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: headers,
				body: data,
			})

			if (!response.ok) {
				throw new Error('Request failed with status ' + response.status)
			}

			console.log('fetched')
			const games = await response.json()
			return games
		} catch (error) {
			console.error('Error:', error.message)
			throw error
		}
	}
	try {
		const games = await fetchGames()
		console.log({ games })
		return NextResponse.json(games)
	} catch (error) {
		return NextResponse.status(500).json({ error: 'Internal Server Error' })
	}
}
