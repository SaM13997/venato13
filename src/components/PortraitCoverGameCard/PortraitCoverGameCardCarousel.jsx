/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import PortraitCoverGameCard from './PortraitCoverGameCard'
import Carousel from 'react-multi-carousel'
import { useQuery } from 'react-query'
import axios from 'axios'

function PortraitCoverGameCardCarousel(props) {
	const { queryKey, queryUrl, headingText } = props
	// console.log(headingText, queryKey, queryUrl)
	const queryFn = async () => {
		return axios.get(queryUrl)
	}
	const { data, isLoading, error } = useQuery({ queryKey, queryFn })
	if (isLoading) {
		return <div>waiting</div>
	}

	if (error) {
		return (
			<div className="flex h-[350px] items-center justify-center rounded-xl bg-zinc-700 text-2xl text-slate-200">
				<p>
					I'm gonna be honest my gamer, this code is pretty spagetti and I'm
					surprised it worked in the first place...
				</p>
				{error.message}
			</div>
		)
	}
	const games = data.data
	return (
		<div className="flex w-full flex-col justify-center ">
			<p className="my-3 pl-12 text-4xl">{headingText}</p>
			<Carousel
				additionalTransfrom={0}
				arrows
				autoPlaySpeed={3000}
				centerMode={false}
				className=""
				containerClass="container h-full"
				customLeftArrow={false}
				customRightArrow={false}
				dotListClass=""
				draggable
				focusOnSelect={false}
				infinite={true}
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
						items: 2,
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
				itemClass="h-full pr-4"
				slidesToSlide={1}
				swipeable={false}
			>
				{games.map((game, index) => (
					<PortraitCoverGameCard game={game} key={index} />
				))}
			</Carousel>
		</div>
	)
}

export default PortraitCoverGameCardCarousel
