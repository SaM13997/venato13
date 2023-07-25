import Link from 'next/link'
import React from 'react'
import Platforms from '../Platforms'
import { FiArrowUpRight } from 'react-icons/fi'
import { Button } from '@/components/ui/button'

const GameCard = (props) => {
	const { game } = props

	return (
		<Link href="/demo">
			<div className="overflow-hidden rounded-2xl border border-slate-950 shadow-md">
				<img
					src={game.bgImage}
					className="aspect-video h-[220px] object-cover"
					alt=""
				/>
				<div className="  bg-zinc-900 p-3 text-xl">
					<p className="truncate">{game.name}</p>
					<div className=" mt-4 flex w-full items-center justify-between">
						<Platforms platforms={game.platforms} />
						<Link href={`/game/${game.id}`}>
							<Button
								variant="ghost"
								className="rounded-full border border-amber-500 text-amber-500 hover:bg-amber-500"
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
