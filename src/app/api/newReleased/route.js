import { NextRequest, NextResponse } from 'next/server'
export async function GET() {
	const fetchData = async () => {
		const url = 'https://api.rawg.io/api/games'
		const key = process.env.RawgAPIKey

		const today = new Date().toLocaleString('en-CA', {
			dateStyle: 'short',
		})

		try {
			const response = await fetch(
				`${url}?key=${key}&ordering=-rating
        `
			)
			//  &dates=2022-01-01,${today}&ordering=-rating
			if (!response.ok) {
				throw new Error('Request failed with status ' + response.status)
			}

			const data = await response.json()
			console.log({ data })
			return data
		} catch (error) {
			console.error('Error:', error.message)
			throw error
		}
	}

	const data = await fetchData()
	return NextResponse.json({ data })
}
