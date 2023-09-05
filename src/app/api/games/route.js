import { NextRequest, NextResponse } from 'next/server'
export async function GET(req, res) {
	const fetchData = async () => {
		const url = 'https://api.rawg.io/api/games'
		const key = process.env.RawgAPIKey
		const { searchParams } = new URL(req.url)
		const dateFromQuery = searchParams.get('today')
		try {
			const response = await fetch(
				`${url}?key=${key}&dates=2023-01-01,${dateFromQuery}&ordering=-added`
			)

			if (!response.ok) {
				throw new Error('Request failed with status ' + response.status)
			}

			const data = await response.json()
			return data
		} catch (error) {
			console.error('Error:', error.message)
			throw error
		}
	}

	const data = await fetchData()
	return NextResponse.json({ data })
}
