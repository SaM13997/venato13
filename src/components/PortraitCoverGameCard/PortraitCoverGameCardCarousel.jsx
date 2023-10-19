'use client'
import React from 'react'
import PortraitCoverGameCard from './PortraitCoverGameCard'
import Glider from 'react-glider'
import 'glider-js/glider.min.css'

function PortraitCoverGameCardCarousel({ data, headingText }) {
	const games = JSON.parse(data.value)
	return (
		<div className="mt-2 flex max-h-fit w-full flex-col justify-center">
			<p className="my-4 pl-1 text-2xl sm:text-4xl">{headingText}</p>
			<div className="max-h-fit">
				<Glider
					style={{
						height: 'fit-content',
					}}
					hasArrows
					slidesToShow={1}
					slidesToScroll={1}
					scrollLock
					responsive={[
						{
							breakpoint: 1348,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2,
							},
						},
					]}
				>
					{games.map((game, index) => (
						<PortraitCoverGameCard game={game} key={index} />
					))}
				</Glider>
			</div>
		</div>
	)
}

export default PortraitCoverGameCardCarousel
