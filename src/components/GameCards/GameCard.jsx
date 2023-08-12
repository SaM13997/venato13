import Link from 'next/link'
import React from 'react'
import Platforms from '../Platforms'
import { FiArrowUpRight } from 'react-icons/fi'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const GameCard = (props) => {
	const { game } = props

	const FallbackImageURL =
		'https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7868.jpg?w=1380&t=st=1691804430~exp=1691805030~hmac=636b4dfee274a441ceaa42ce9d3f1c0494200b937bd6bab02a7d3ae7065aefda'

	return (
		<Link href="/demo">
			<div className="overflow-hidden rounded-2xl border border-slate-950 shadow-md">
				<img
					width="1450"
					height="720"
					src={game.bgImage.length ? game.bgImage : FallbackImageURL}
					className="aspect-video h-[220px] object-cover"
					alt=""
				/>
				<div className="bg-zinc-900 p-3 text-xl">
					<p className="truncate">{game.name}</p>
					<div className=" mt-4 flex w-full items-center justify-between">
						<Platforms platforms={game?.platforms} />
						<Link href={`/game/${game.id}`}>
							<Button
								variant="ghost"
								className="rounded-full border border-amber-500 text-amber-500"
							>
								<FiArrowUpRight />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default GameCard
