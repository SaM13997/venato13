'use client'

import { useQuery } from 'react-query'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import GameCard from './GameCard'
import Carousel from 'react-multi-carousel'
import LazyLoadingCarousel from '../../utilities/Carousel'
import 'react-multi-carousel/lib/styles.css'
import { getGamesFromQuery } from '@/utilities/utilities'
import axios from 'axios'

function GameCards(props) {
	const { queryKey, queryUrl, headingText } = props
	const queryFn = async () => {
		return axios.get(queryUrl)
	}
	const { data, isLoading, error } = useQuery({ queryKey, queryFn })

	if (isLoading) {
		return (
			<div>
				<div className="container mx-auto h-full w-full gap-4 p-3 pb-0">
					<Skeleton className="mb-3 ml-12 mt-5 h-10 w-64 rounded-full" />
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
		<div className="flex w-full flex-col justify-center ">
			<p className="my-3 pl-12 text-4xl">{headingText}</p>
			<Carousel
				additionalTransfrom={0}
				arrows
				autoPlaySpeed={3000}
				centerMode={false}
				className=""
				containerClass="container p-3 pb-0 h-full"
				customLeftArrow={false}
				customRightArrow={false}
				dotListClass=""
				draggable
				focusOnSelect={false}
				infinite={false}
				partialVisible={false}
				keyBoardControl
				minimumTouchDrag={80}
				pauseOnHover
				renderArrowsWhenDisabled={false}
				renderButtonGroupOutside={true}
				renderDotsOutside={false}
				responsive={{
					desktop: {
						breakpoint: {
							max: 3000,
							min: 1024,
						},
						items: 4,
						partialVisibilityGutter: 80,
					},
					mobile: {
						breakpoint: {
							max: 464,
							min: 0,
						},
						items: 1,
						partialVisibilityGutter: 50,
					},
					tablet: {
						breakpoint: {
							max: 1024,
							min: 464,
						},
						items: 2,
						partialVisibilityGutter: 30,
					},
				}}
				rewindWithAnimation={false}
				rtl={false}
				shouldResetAutoplay
				showDots={false}
				sliderClass="h-full"
				itemClass="pr-5"
				slidesToSlide={1}
				swipeable={false}
			>
				{filteredGames.map((game, index) => (
					<GameCard game={game} key={index} />
				))}
			</Carousel>
		</div>
	)
}

export default GameCards
