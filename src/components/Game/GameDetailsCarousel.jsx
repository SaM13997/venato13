'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

export default function GameDetailsCarousel({ screenshots }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	return (
		<main>
			<Swiper
				className="mb-4"
				spaceBetween={1}
				modules={[Thumbs, Navigation]}
				thumbs={{ swiper: thumbsSwiper }}
				navigation={true}
			>
				{screenshots?.map((ss, index) => (
					<SwiperSlide className="w-full" key={index}>
						<img
							className="GameDetailCarouselScreenshot w-full rounded-xl"
							src={ss}
							alt={`game's screenshot #${index + 1}`}
						/>
					</SwiperSlide>
				))}
			</Swiper>

			<Swiper
				// slidesPerView={screenshots.length > 5 ? 5 : screenshots.length}
				slidesPerView="auto"
				spaceBetween={5}
				modules={[Thumbs, FreeMode]}
				watchSlidesProgress
				onSwiper={setThumbsSwiper}
			>
				{screenshots?.map((ss, index) => (
					<SwiperSlide className="max-w-fit" key={index}>
						<img
							className="GameDetailCarouselScreenshot w-36 rounded-lg"
							src={ss}
							alt={`game's screenshot #${index + 1}`}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</main>
	)
}
