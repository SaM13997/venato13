'use client'

import GameCardCenterStage from './BigGameCard'
import Carousel from 'react-material-ui-carousel'
import { getGamesFromQuery } from '@/components/utilities/utilities'

function BigGameCarousel({ data }) {
	console.log(data)
	// const games = JSON?.parse(data)?.data?.results
	// console.log(JSON.parse(data.value).data)
	const filteredGames = getGamesFromQuery(data.data.results)
	return (
		<Carousel
			className="h-[40vh] sm:h-[77.5vh]"
			indicatorContainerProps={{
				style: {
					display: 'none',
				},
			}}
			interval="5000"
		>
			{filteredGames.map((game, i) => (
				<GameCardCenterStage key={i} game={game} />
			))}
		</Carousel>
	)
}

export default BigGameCarousel
