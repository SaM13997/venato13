'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

export default function GameDetailsCarousel({ screenshots }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	return (
		<main>
			<Swiper
				className="mb-4"
				modules={[Thumbs, Navigation]}
				thumbs={{ swiper: thumbsSwiper }}
			>
				{screenshots?.map((ss, index) => (
					<SwiperSlide key={index}>
						<img
							className="rounded-xl"
							src={ss}
							alt={`game's screenshot #${index + 1}`}
						/>
					</SwiperSlide>
				))}
			</Swiper>

			<Swiper
				slidesPerView={screenshots.length > 5 ? 5 : screenshots.length}
				spaceBetween={5}
				modules={[Thumbs]}
				watchSlidesProgress
				onSwiper={setThumbsSwiper}
			>
				{screenshots?.map((ss, index) => (
					<SwiperSlide key={index}>
						<img
							className="w-36 rounded-lg"
							src={ss}
							alt={`game's screenshot #${index + 1}`}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</main>
	)
}
