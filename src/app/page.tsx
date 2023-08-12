import dayjs from 'dayjs'
import CenterStageCarousel from '../components/BigGameCard/BigGameCarousel'
import GameCardCarousel from '../components/GameCards/GameCardCarousel'
import GameList from '../components/Games'

export default function Home() {
	const newReleasedGamesQueryKey = 'NewReleasedGames'
	const newReleasedGamesQueryUrl = `/api/newReleased?today=${dayjs().format(
		'YYYY-MM-DD'
	)}`
	const upcomingGamesQueryKey = 'UpcomingGames'
	const upcomingGamesQueryUrl = `/api/upcomingGames?today=${dayjs().format(
		'YYYY-MM-DD'
	)}`
	// const newReleasedGamesQueryKey = 'NewReleasedGames'
	// const newReleasedGamesQueryUrl = `/api/newReleased?today=${dayjs().format(
	// 	'YYYY-MM-DD'
	// )}`

	return (
		<div className="mx-auto min-h-screen max-w-[1500px] px-4 ">
			<div className=" main-carousel rounded-xl ">
				<CenterStageCarousel />
			</div>

			<GameCardCarousel
				queryKey={newReleasedGamesQueryKey}
				queryUrl={newReleasedGamesQueryUrl}
				headingText="Newly Released"
			/>
			<GameCardCarousel
				queryKey={upcomingGamesQueryKey}
				queryUrl={upcomingGamesQueryUrl}
				headingText="Upcoming Games"
			/>
			{/* <GameCardCarousel
				queryKey={newReleasedGamesQueryKey}
				queryUrl={newReleasedGamesQueryUrl}
				headingText="Newly Released"	
			/> */}
		</div>
	)
}
