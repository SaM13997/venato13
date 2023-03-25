'use client'

import { use } from 'react'
import { useQuery } from 'react-query'
import GameCardCenterStage from './GameCardCenterStage'
import Carousel from 'react-material-ui-carousel'
import axios from 'axios'
import { getGamesFromQuery } from '../../utilities/utilities'

function CenterStageCarousel(props) {
	const { data, isLoading } = useQuery('posts', () =>
		fetch(
			`https://api.rawg.io/api/games?ordering=-added&page_size=20&dates=2022-01-01,${new Date().toISOString()}&key=27fdc1adf5384b60b1b4c1f20e69ecec`
		).then((res) => res.json())
	)

	if (isLoading)
		return <div className="w-screen h-screen bg-white">loading...</div>

	const games = getGamesFromQuery(data.results)

	return (
		<Carousel
			sx={{ height: '100%' }}
			interval="5000"
			// indicatorContainerProps={{ className: 'bg-white h-[10px]' }}
		>
			{games.map((game, i) => (
				<GameCardCenterStage key={i} game={game} />
			))}
		</Carousel>
	)
}

export default CenterStageCarousel
