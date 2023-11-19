import React from 'react'

type GameProps = {
	game: Record<string, unknown>
}

function Game(props: GameProps) {
	return (
		<div className="mr-6 h-full w-full rounded-2xl bg-zinc-200">
			<div className="wrapper flex">
				<div className="preview-container flex flex-col">
					<div className="screenshot"></div>
					<div className="screenshot-track"></div>
				</div>
				<div className="game-details-overview-panel">
					<p className="text-3xl">game title</p>
					<p>developers.name</p>
					<p>released on</p>
					<p>rating</p>
				</div>
			</div>
			{JSON.stringify(props.game)}
		</div>
	)
}

export default Game
