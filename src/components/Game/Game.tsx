import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Platforms from '../utilities/Platforms'
import StarRating from '../utilities/StarRating'
import { MetacriticSquare } from '../utilities/UtilityComponents'
import GameDetailsCarousel from './GameDetailsCarousel'
import { platformsArrayCreator } from '../utilities/utilities'
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

// !Todo - Make it API agnostic but adding the fallbacks for IGDB retured data

async function Game(props: any) {
	// console.log(props.game)
	const screenshots =
		props.api === 'rawg'
			? await getScreenshotsFromRawg(props.game.data?.id)
			: []

	const platforms = platformsArrayCreator(props.game.data?.parent_platforms)
	return (
		<div className="mr-6 h-full w-full overflow-hidden rounded-2xl border-2 border-zinc-700 bg-zinc-900 p-2">
			<div className=" Game mr-6 flex h-full w-full flex-col overflow-y-auto p-4">
				<div className="flex items-center justify-between">
					<p className="text-3xl">{props.game.data.name}</p>
					<Link href={props.game.data?.metacritic_url}>
						<MetacriticSquare
							className="h-12 w-12 rounded-xl shadow-none"
							score={props.game.data?.metacritic}
						/>
					</Link>
				</div>
				<div className="wrapper mt-4 flex h-full">
					<div className="preview-container flex w-3/4 flex-col pr-2">
						<div className="screenshot">
							<GameDetailsCarousel screenshots={screenshots} />
						</div>
					</div>
					<div className="game-details-overview-panel flex w-1/4 flex-col gap-2 pl-2">
						<Image
							className="rounded-xl"
							alt="Game's cover art"
							width={240}
							height={130}
							src={props.game.data.background_image}
						/>
						<p className="pt-2 text-xl">{props.game.data?.name}</p>
						<p className=" line-clamp-5 text-ellipsis text-sm text-zinc-500 ">
							{props.game.data?.description.replace(/<[^>]+>/g, '')}
						</p>
						<hr className="mx-auto my-2 w-2/5 border-amber-500" />
						<div className="flex items-center justify-between">
							<p className="text-sm text-zinc-300">Released:</p>
							<p className="text-xs text-zinc-400">
								{props.game.data?.released}
							</p>
						</div>
						<div className="flex items-center justify-between">
							<p className="text-sm text-zinc-300">User Ratings:</p>
							<p>
								<StarRating
									className="text-xl text-zinc-400"
									rating={props.game.data?.rating}
								/>
							</p>
						</div>
						<Platforms
							className="mx-auto mt-2 justify-center"
							iconClassName="text-xl"
							platforms={platforms}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Game
