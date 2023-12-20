import Link from 'next/link'
import React from 'react'
import { MetacriticSquare } from '../utilities/UtilityComponents'

type GameProps = {
	game: Record<string, unknown>
}

async function Game(props: any) {
	// console.log(props.game)
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
					<div className="preview-container flex w-3/4 flex-col border border-red-500">
						<div className="screenshot">
							<img
								className="rounded-xl"
								src={props.game.data.background_image}
								alt="game cover"
							/>
						</div>
						<div className="screenshot-track bg-red-100"></div>
					</div>
					<div className="game-details-overview-panel w-1/4">
						<p className=" line-clamp-5 text-ellipsis text-sm text-zinc-600 ">
							{props.game.data.description}
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
