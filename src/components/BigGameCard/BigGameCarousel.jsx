'use client'

import GameCardCenterStage from './BigGameCard'
import Carousel from 'react-material-ui-carousel'
import { getGamesFromQuery } from '@/components/utilities/utilities'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { Navigation, EffectFade } from 'swiper/modules'

function BigGameCarousel({ data }) {
	// console.log(data)
	// const games = JSON?.parse(data)?.data?.results
	// console.log(JSON.parse(data.value).data)
	const filteredGames = getGamesFromQuery(data.data.results)
	return (
		<Swiper
			navigation={true}
			effect={'fade'}
			modules={[Navigation, EffectFade]}
			className="h-[40vh] sm:h-[77.5vh]"
		>
			{filteredGames.map((game, i) => (
				<SwiperSlide key={i}>
					<GameCardCenterStage game={game} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default BigGameCarousel
{
	/* <Carousel
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
		</Carousel> */
}
