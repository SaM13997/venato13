'use client'

import { useQuery } from 'react-query'
import React from 'react'
import GameCard from './GameCard'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { getGamesFromQuery } from '@/utilities/utilities'
import axios from 'axios'

function GameCards() {
	const { data, error, isLoading } = useQuery('NewReleasedGames', async () => {
		return axios.get('http://localhost:3000/api/newReleased')
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
		<div className="flex w-full justify-center ">
			<Carousel
				additionalTransfrom={0}
				arrows
				autoPlaySpeed={3000}
				centerMode={false}
				className=""
				containerClass="container p-3 h-full fesesf"
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
					<GameCard game={game} index={index} />
				))}
			</Carousel>
		</div>
	)
}

export default GameCards
