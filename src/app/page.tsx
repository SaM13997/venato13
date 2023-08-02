import dayjs from 'dayjs'
import CenterStageCarousel from '../components/BigGameCard/BigGameCarousel'
import GameCardCarousel from '../components/GameCards/GameCardCarousel'
import GameList from '../components/Games'

export default function Home() {
	const newReleasedGamesQueryKey = 'NewReleasedGames'
	const newReleasedGamesQueryUrl = `/api/newReleased?today=${dayjs().format(
		'DD-MM-YYYY'
	)}`

	return (
		<div className="mx-auto min-h-screen max-w-[1500px] px-4 ">
			<div className=" main-carousel rounded-xl ">
				<CenterStageCarousel />
			</div>

			<div className=" ">
				{/* <Suspense fallback={<LoadingFallback />}> */}
				<GameCardCarousel
					queryKey={newReleasedGamesQueryKey}
					queryUrl={newReleasedGamesQueryUrl}
					headingText="Newly Released"
				/>
				{/* </Suspense> */}
			</div>
			{/* <GameList /> */}
		</div>
	)
}
