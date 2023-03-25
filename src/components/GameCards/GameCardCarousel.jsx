'use client'

import React from 'react'
import GameCard from './GameCard'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

function GameCards() {
	const dummyGames = [
		{
			title: 'Vampire: The Masquerade - Bloodlines 2',
			image:
				'https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg',
		},
		{
			title: 'Ghostwire: Tokyo',
			image:
				'https://media.rawg.io/media/crop/600/400/games/e85/e851f527ab0658519436342ee73da191.jpg',
		},
		{
			title: 'S.T.A.L.K.E.R. 2: Heart of Chernobyl',
			image:
				'https://media.rawg.io/media/crop/600/400/games/3e8/3e81585ecda204d4f4b80a041b069adb.jpg',
		},
		{
			title: "Senua's Saga: Hellblade II",
			image:
				'https://media.rawg.io/media/crop/600/400/games/85d/85dc9149fe3d2c9fed5d0d73cd9940f7.jpg',
		},
		{
			title: 'V Rising',
			image:
				'https://media.rawg.io/media/crop/600/400/games/bde/bdef96f7782fba0ff62dabc37ff4b1f0.jpg',
		},
		{
			title: 'Trek to Yomi',
			image:
				'https://media.rawg.io/media/crop/600/400/games/bc5/bc53067cffecb71129fcb0b4fbf0e922.jpg',
		},
	]
	return (
		<div className="w-full h-[30vh] bg-black flex justify-center">
			<Carousel
				additionalTransfrom={0}
				arrows
				autoPlaySpeed={3000}
				centerMode={false}
				className=""
				containerClass="container p-3"
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
				{dummyGames.map((game, index) => (
					<GameCard game={game} index={index} />
				))}
			</Carousel>
		</div>
	)
}

export default GameCards
