'use client'
import React from 'react'
import PortraitCoverGameCard from './PortraitCoverGameCard'
import 'glider-js/glider.min.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

function PortraitCoverGameCardCarousel({ data, headingText }) {
	if (!data) {
		return <p>Error, cant load games</p>
	}
	return (
		<div className="px-1">
			<p className="mb-1 mt-4 text-3xl">{headingText}</p>
			<hr className="mb-1 h-2 w-1/5" />
			<Swiper
				autoHeight={true}
				modules={[Navigation]}
				spaceBetween={20}
				navigation
				breakpoints={{
					1348: {
						slidesPerView: 2,
					},
				}}
			>
				{data?.map((game, index) => (
					<SwiperSlide key={index}>
						<PortraitCoverGameCard game={game} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default PortraitCoverGameCardCarousel
