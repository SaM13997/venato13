'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useQuery } from 'react-query'
import { Skeleton } from '@/components/ui/skeleton'
import GameCard from './GameCard'
import Carousel from 'react-multi-carousel'
import LazyLoadingCarousel from '../GameCards/LoadingFallback'
import 'react-multi-carousel/lib/styles.css'
import { getGamesFromQuery } from '@/utilities/utilities'
import axios from 'axios'

const SwiperComponent = (props) => {
	const { queryKey, queryUrl, headingText } = props.category
	// console.log(headingText, queryKey, queryUrl)
	const queryFn = async () => {
		return axios.get(queryUrl)
	}
	const { data, isLoading, error } = useQuery({ queryKey, queryFn })

	// console.log(data)
	if (isLoading) {
		return (
			<div>
				<div className="container mx-auto h-full w-full gap-4 p-3 pb-0">
					<Skeleton className="mb-3 mt-5 h-10 w-64 rounded-full" />
					<LazyLoadingCarousel />
				</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className="flex h-[350px] items-center justify-center rounded-xl bg-zinc-700 text-2xl text-slate-200">
				{error.message}
			</div>
		)
	}

	const games = data.data
	const filteredGames = getGamesFromQuery(games.data.results)
	return (
		<div>
			<p>{headingText}</p>
			<Swiper
				slidesPerView={1}
				navigation={true}
				modules={[Navigation]}
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
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{filteredGames.map((game, index) => (
					<SwiperSlide key={index}>
						<GameCard game={game} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default SwiperComponent
