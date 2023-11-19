import React from 'react'
import dayjs from 'dayjs'
import DataFetchParent from '@/components/utilities/DataFetchParent'

function Main() {
	const today = dayjs().format('YYYY-MM-DD')
	const mainPageCategoriesArray = [
		{
			componentType: 'GameCardCarousel',
			queryUrl: `/api/newReleased?today=${today}`,
			headingText: 'Newly Released',
		},
		{
			componentType: 'GameCardCarousel',
			queryUrl: `/api/upcomingGames?today=${today}`,
			headingText: 'Upcoming Games',
		},
	]
	const mainPageIGDBPlatformsArray = [
		{
			componentType: 'PortraitCoverGameCardCarousel',
			queryUrl: `/api/IGDBPlatformsGames?platforms=6 48 167`,
			headingText: 'Playstation Exclusives',
		},
		{
			componentType: 'PortraitCoverGameCardCarousel',
			queryUrl: `/api/IGDBPlatformsGames?platforms=6 11 12 49 169`,
			headingText: 'Microsoft Exclusives',
		},
		{
			componentType: 'PortraitCoverGameCardCarousel',
			queryUrl: `/api/IGDBPlatformsGames?platforms=6 130`,
			headingText: 'Nintendo Exclusives',
		},
	]

	return (
		<div className=" min-h-screen max-w-[1600px] pl-6">
			<div className=" main-carousel rounded-xl ">
				<DataFetchParent
					category={{
						componentType: 'BigGameCarousel',
						queryUrl: `/api/games?today=${today}`,
					}}
				/>
			</div>

			<div className="">
				{mainPageCategoriesArray?.map((category, index) => {
					return <DataFetchParent category={category} key={index} />
				})}
			</div>
			<div className="IGDB mt-4 max-h-fit">
				{mainPageIGDBPlatformsArray?.map((category, index) => {
					return <DataFetchParent key={index} category={category} />
				})}
			</div>
		</div>
	)
}

export default Main
