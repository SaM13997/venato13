// !todo make the game card for igdb fetched stuff
import React from 'react'
import Platforms from '@/utilities/Platforms'
import { FiArrowUpRight } from 'react-icons/fi'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

function PortraitCoverGameCard({ game }) {
	return (
		<div className="flex rounded-xl bg-zinc-900">
			<img
				src={`https://images.igdb.com/igdb/image/upload/t_720p/${game?.cover?.image_id}.jpg`}
				alt={`${game.name}'s game cover`}
				className="w-[400px] rounded-l-xl"
			/>
			<div className="p-8">
				<p className="name">{game.name}</p>
				<p className="rating">{game?.aggregated_rating}</p>
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
	)
}

export default PortraitCoverGameCard
