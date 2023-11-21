'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { Navigation, EffectFade } from 'swiper/modules'

import GameCard from './GameCard'
import { getGamesFromQuery } from '@/components/utilities/utilities'

const GameCardCarousel = ({ data, headingText }) => {
	// const games = JSON.parse(data.value)?.data?.results
	const filteredGames = getGamesFromQuery(data.data.results)
	return (
		<div>
			<p className="mb-1 mt-4 text-3xl">{headingText}</p>
			<hr className="mb-1 h-2 w-1/5" />
			<div className="hidden sm:block">
				<Swiper
					navigation={true}
					modules={[Navigation]}
					spaceBetween={5}
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
						1280: {
							slidesPerView: 3,
						},
						1600: {
							slidesPerView: 4,
						},
					}}
				>
					{filteredGames?.map((game, index) => (
						<SwiperSlide key={index}>
							<GameCard game={game} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="sm:hidden">
				<Swiper
					navigation={true}
					effect={'fade'}
					modules={[Navigation, EffectFade]}
				>
					{filteredGames?.map((game, index) => (
						<SwiperSlide key={index}>
							<GameCard game={game} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default GameCardCarousel
