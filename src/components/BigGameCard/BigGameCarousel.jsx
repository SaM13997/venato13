'use client'

import { useQuery } from 'react-query'
import GameCardCenterStage from './BigGameCard'
import Carousel from 'react-material-ui-carousel'
import axios from 'axios'
import { getGamesFromQuery } from '@/utilities/utilities'

function CenterStageCarousel(props) {
	const today = new Date().toLocaleString('en-CA', {
		dateStyle: 'short',
	})
	const { data, error, isLoading } = useQuery('CenterCardGames', async () => {
		return axios.get(`/api/games?today=${today}`)
	})
	if (isLoading) {
		return <div className="h-full">Loading... the games bruh</div>
	}

	if (error) {
		return <p>Error: {error.message}</p>
	}

	const games = data.data
	// console.log(games.data.results)
	const filteredGames = getGamesFromQuery(games.data.results)
	return (
		<Carousel sx={{ height: '100%' }} interval="5000">
			{filteredGames.map((game, i) => (
				<GameCardCenterStage key={i} game={game} />
			))}
		</Carousel>
	)
}

export default CenterStageCarousel
