// !todo make the game card for igdb fetched stuff
import React from 'react'
import Platforms from '@/utilities/Platforms'
import { FiArrowUpRight } from 'react-icons/fi'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { GenreChips } from '@/utilities/UtilityComponents'

function PortraitCoverGameCard({ game }) {
	return (
		<div className="grid h-full grid-cols-5 rounded-xl bg-zinc-800">
			<img
				src={`https://images.igdb.com/igdb/image/upload/t_720p/${game?.cover?.image_id}.jpg`}
				alt={`${game.name}'s game cover`}
				className="col-span-3 rounded-l-xl object-cover"
			/>
			<div className="col-span-2 flex flex-col justify-between px-4 py-2">
				<div className="flex flex-col gap-2">
					<p className="name line-clamp-2 text-2xl font-semibold">
						{game.name}
					</p>

					<div className="line-clamp-6 text-gray-300">{game?.summary}</div>
					<div className="mt-1 flex items-center gap-1">
						<span className="rating">Rating:</span>
						<div className="rating-icon">
							{/* Replace this with your preferred rating representation */}
							{Array.from({
								length: Math.floor(game?.aggregated_rating / 20),
							}).map((_, index) => (
								<span key={index} className="text-amber-500">
									★
								</span>
							))}
						</div>
					</div>
					<GenreChips genres={game?.genres} className="mt-2" />
				</div>
				<div className=" mt-4 flex w-full items-center justify-between py-1">
					<Platforms platforms={game?.platforms} />
					<Link href={`/game/${game.id}`}>
						<Button
							variant="ghost"
							className="w-[150px] rounded-full border border-amber-500 text-amber-500"
						>
							<p className="mr-2">Check Out</p>
							<FiArrowUpRight />
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default PortraitCoverGameCard
