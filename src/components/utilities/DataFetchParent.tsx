import GameCardCarousel from '../GameCards/GameCardCarousel'
import BigGameCarousel from '@/components/BigGameCard/BigGameCarousel'
import PortraitCoverGameCardCarousel from '@/components/PortraitCoverGameCard/PortraitCoverGameCardCarousel'
export const dynamic = 'force-dynamic'

type Props = {
	category: {
		componentType: string
		queryUrl: string
		headingText?: string
	}
}

async function DataFetchParent(props: Props) {
	const { componentType, queryUrl, headingText } = props.category
	let data

	try {
		const res = await fetch(`${process.env.URL}${queryUrl}`)
		data = await res.json()
	} catch (error) {
		console.error('Error parsing JSON:', error)
	}

	switch (componentType) {
		case 'GameCardCarousel':
			return <GameCardCarousel data={data} headingText={headingText} />
			break
		case 'BigGameCarousel':
			return <BigGameCarousel data={data} />
			break
		case 'PortraitCoverGameCardCarousel':
			return (
				<PortraitCoverGameCardCarousel data={data} headingText={headingText} />
			)
			break
	}
}

export default DataFetchParent
