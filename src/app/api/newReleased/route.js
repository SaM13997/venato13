import { NextRequest, NextResponse } from 'next/server'
export async function GET() {
	const fetchData = async () => {
		const url = 'https://api.rawg.io/api/games'
		const key = '27fdc1adf5384b60b1b4c1f20e69ecec'

		const today = new Date().toLocaleString('en-CA', {
			dateStyle: 'short',
		})

		try {
			const response = await fetch(
				`${url}?key=${key}&dates=2022-01-01,${today}&ordering=-rating`
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
