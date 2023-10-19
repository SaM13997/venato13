'use client'

import GameCardCenterStage from './BigGameCard'
import Carousel from 'react-material-ui-carousel'
import { getGamesFromQuery } from '@/components/utilities/utilities'

function BigGameCarousel({ data }) {
	const games = JSON.parse(data.value)?.data?.results
	const filteredGames = getGamesFromQuery(games)
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
