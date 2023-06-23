'use client'

import { use } from 'react'
import { useQuery } from 'react-query'
import GameCardCenterStage from './BigGameCard'
import Carousel from 'react-material-ui-carousel'
import axios from 'axios'
import { getGamesFromQuery } from '../../utilities/utilities'

function CenterStageCarousel(props) {
	const { data, isLoading } = useQuery({
		queryKey: ['posts'],
		queryFn: () =>
			fetch(
				`https://api.rawg.io/api/games?ordering=-added&page_size=20&dates=2022-01-01,${new Date().toISOString()}&key=${
					process.env.NEXT_PUBLIC_RawgAPIKey
				}`
			).then((res) => res.json()),
	})

	//write me a function that gets the games from IGDB using the client ID zm1q09qmyhsfoi25k3h3tfoi2g1t3o and the authorization token: Bearer 97ix6j43i70u071ejxf7pqrlwxriqd

	const getGamesFromIGDB = () => {
		const igdb_url = `https://api.igdb.com/v4/games?fields=name,cover.url,first_release_date,rating,total_rating,total_rating_count,popularity,summary,url&order=popularity:desc&limit=20&offset=0&search=${GTAv}&key=${zm1q09qmyhsfoi25k3h3tfoi2g1t3o}`
		return axios.get(igdb_url)
	}

	console.log(getGamesFromIGDB())
	if (isLoading) return <div className="w-screen bg-white">loading...</div>

	const games = getGamesFromQuery(data.results)

	return (
		<Carousel sx={{ height: '100%' }} interval="5000">
			{games.map((game, i) => (
				<GameCardCenterStage key={i} game={game} />
			))}
		</Carousel>
	)
}

export default CenterStageCarousel
