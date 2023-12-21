import Link from 'next/link'
import React from 'react'
import { MetacriticSquare } from '../utilities/UtilityComponents'
import GameDetailsCarousel from './GameDetailsCarousel'
type GameProps = {
	game: Record<string, unknown>
}

async function getScreenshotsFromRawg(gameID: string) {
	const key = process.env.RawgAPIKey
	const response = await fetch(
		`https://api.rawg.io/api/games/${gameID}/screenshots?key=${key}`
	)
	const game = await response.json()
	return game.results.map((screenshot: any) => {
		return screenshot.image
	})
}

async function Game(props: any) {
	// console.log(props.game)
	const screenshots = await getScreenshotsFromRawg(props.game.data.id)
	return (
		<div className="mr-6 h-full w-full overflow-hidden rounded-2xl border-2 border-zinc-700 bg-zinc-900 p-2">
			<div className=" Game mr-6 flex h-full w-full flex-col overflow-y-auto p-4">
				<div className="flex items-center justify-between">
					<p className="text-3xl">{props.game.data.name}</p>
					<Link href={props.game.data.metacritic_platforms[0].url}>
						<MetacriticSquare
							className="h-12 w-12 rounded-xl shadow-none"
							score={props.game.data.metacritic}
						/>
					</Link>
				</div>
				<div className="wrapper mt-4 flex h-full">
					<div className="preview-container flex w-3/4 flex-col pr-2">
						<div className="screenshot">
							<GameDetailsCarousel screenshots={screenshots} />
						</div>
						<div className="screenshot-track bg-red-100"></div>
					</div>
					<div className="game-details-overview-panel w-1/4 pl-2">
						<p className=" line-clamp-5 text-ellipsis text-sm text-zinc-500 ">
							{props.game.data.description.replace(/<[^>]+>/g, '')}
						</p>
						<p>released on</p>
						<p>rating</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Game
