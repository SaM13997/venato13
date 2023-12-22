import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Platforms from '../utilities/Platforms'
import StarRating from '../utilities/StarRating'
import { MetacriticSquare } from '../utilities/UtilityComponents'
import GameDetailsCarousel from './GameDetailsCarousel'
import { platformsArrayCreator } from '../utilities/utilities'
import { get } from 'http'
import dayjs from 'dayjs'
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
function getScreenshotsFromIGDB(screenshots: Array<Record<string, unknown>>) {
	return screenshots.map((screenshot) => {
		return `https://images.igdb.com/igdb/image/upload/t_1080p/${screenshot.image_id}.jpg`
	})
}

async function Game(props: any) {
	const game = {
		name: props.api === 'rawg' ? props.game.data?.name : props.game[0].name,
		description:
			props.api === 'rawg'
				? props.game.data?.description.replace(/<[^>]+>/g, '')
				: props.game[0].summary,
		released:
			props.api === 'rawg'
				? dayjs(props.game.data?.released).format('DD MMMM, YYYY')
				: dayjs.unix(props.game[0].first_release_date).format('D MMMM, YYYY'),
		rating:
			props.api === 'rawg'
				? props.game.data?.rating
				: props.game[0]?.total_rating / 20,
		background_image:
			props.api === 'rawg'
				? props.game.data?.background_image
				: `https://images.igdb.com/igdb/image/upload/t_720p/${props.game[0].cover?.image_id}.jpg`,
		metacritic:
			props.api === 'rawg'
				? props.game.data?.metacritic
				: props.game[0]?.aggregated_rating,
		metacritic_url:
			props.api === 'rawg'
				? props.game.data?.metacritic_url
				: `https://www.metacritic.com/search/${props.game[0]?.name}`,
		screenshots:
			props.api === 'rawg'
				? await getScreenshotsFromRawg(props.game.data?.id)
				: getScreenshotsFromIGDB(props.game[0]?.screenshots),
		platforms:
			props.api === 'rawg'
				? platformsArrayCreator(props.game.data?.parent_platforms)
				: props.game[0]?.platforms,
	}

	return (
		<div className="mr-6 h-full w-full overflow-hidden rounded-2xl border-2 border-zinc-700 bg-zinc-900 p-2">
			<div className=" Game mr-6 flex h-full w-full flex-col overflow-y-auto p-4">
				<div className="flex items-center justify-between">
					<p className="text-3xl">{game?.name}</p>
					<Link href={game.metacritic_url}>
						<MetacriticSquare
							className="h-12 w-12 rounded-xl shadow-none"
							score={game?.metacritic}
						/>
					</Link>
				</div>
				<div className="wrapper mt-4 flex h-full">
					<div className="preview-container flex w-3/4 flex-col pr-2">
						<div className="screenshot">
							<GameDetailsCarousel screenshots={game?.screenshots} />
						</div>
					</div>
					<div className="game-details-overview-panel flex w-1/4 flex-col gap-2 pl-2">
						<Image
							className="rounded-xl"
							alt="Game's cover art"
							width={240}
							height={130}
							src={game?.background_image}
						/>
						<p className="line-clamp-1 text-ellipsis pt-2 text-xl">
							{game?.name}
						</p>
						<p className=" line-clamp-5 text-ellipsis text-sm text-zinc-500 ">
							{game?.description}
						</p>
						<hr className="mx-auto my-2 w-2/5 border-amber-500" />
						<div className="flex items-center justify-between">
							<p className="text-sm text-zinc-300">Released:</p>
							<p className="text-xs text-zinc-400">{game?.released}</p>
						</div>
						<div className="flex items-center justify-between">
							<p className="text-sm text-zinc-300">User Ratings:</p>

							<StarRating
								className="text-xl text-zinc-400"
								rating={game.rating}
							/>
						</div>
						<Platforms
							className="mx-auto mt-2 justify-center"
							iconClassName="text-xl"
							platforms={game.platforms}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Game
