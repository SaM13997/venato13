import GameCardCarousel from '../GameCards/GameCardCarousel'
import BigGameCarousel from '@/components/BigGameCard/BigGameCarousel'
import PortraitCoverGameCardCarousel from '@/components/PortraitCoverGameCard/PortraitCoverGameCardCarousel'
import { NextRequest } from 'next/server'

type Props = {
	category: {
		componentType: string
		queryUrl: string
		headingText?: string
	}
}
// Rather than getting the data via fetch, we just imported our api so we save on a network request here as well
async function getData(queryUrl: string): Promise<any> {
	const apiRouteString = queryUrl.split('?')[0]
	const res = await import(`../../app${apiRouteString}/route`)
	// ^^The hostname is set to local.com but it doesn't matter what it is because we have already imported the api route and are using this to just pass the query string to the api route

	return await (
		await res.GET(new NextRequest(`http://local.com/${queryUrl}`))
	).json()
}

async function DataFetchParent(props: Props) {
	const { componentType, queryUrl, headingText } = props.category
	let data

	try {
		data = await getData(queryUrl)
	} catch (error) {
		console.error('Error parsing JSON:', error)
	}

	switch (componentType) {
		case 'GameCardCarousel':
			return <GameCardCarousel data={data} headingText={headingText} />
		case 'BigGameCarousel':
			return <BigGameCarousel data={data.data} />
		case 'PortraitCoverGameCardCarousel':
			return (
				<PortraitCoverGameCardCarousel data={data} headingText={headingText} />
			)
	}
}

export default DataFetchParent
