import React from 'react'
import dayjs from 'dayjs'
import CenterStageCarousel from '../BigGameCard/BigGameCarousel'
import GameCardCarousel from '../GameCards/GameCardCarousel'
import GameList from '../Games'

function Main() {
	const today = dayjs().format('YYYY-MM-DD')
	const mainPageCategoriesArray = [
		{
			queryKey: 'NewReleasedGames',
			queryUrl: `/api/newReleased?today=${today}`,
			headingText: 'Newly Released',
		},
		{
			queryKey: 'UpcomingGames',
			queryUrl: `/api/upcomingGames?today=${today}`,
			headingText: 'Upcoming Games',
		},
		{
			queryKey: 'PSNGames',
			queryUrl: `/api/platformGames?platforms=18`,
			headingText: 'PlayStation',
		},
		{
			queryKey: 'XboxGames',
			queryUrl: `/api/platformGames?platforms=1`,
			headingText: 'Xbox',
		},
		{
			queryKey: 'NintendoGames',
			queryUrl: `/api/platformGames?platforms=7`,
			headingText: 'Nintendo',
		},
	]

	return (
		<div className="mx-auto min-h-screen max-w-[1500px] px-4 ">
			<div className=" main-carousel rounded-xl ">
				<CenterStageCarousel />
			</div>

			<div className="flex flex-col gap-10">
				{mainPageCategoriesArray.map((category, index) => {
					return (
						<GameCardCarousel
							key={index}
							queryKey={category.queryKey}
							queryUrl={category.queryUrl}
							headingText={category.headingText}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Main
