import style from './CenterStage.module.scss'
import { Button } from '@/components/ui/button'
import StarRating from '@/components/utilities/StarRating'
import { MetacriticSquare } from '@/components/utilities/UtilityComponents'
import Link from 'next/link'
import Image from 'next/image'

const GameCardCenterStage = ({ game }) => {
	let { id, slug, name, bgImage, rating, metacritic, released } = game
	let parcel = {
		id,
		api: 'rawg',
	}

	const releasedDate = new Date(released).toLocaleString('en-us', {
		month: 'long',
		year: 'numeric',
	})

	return (
		<Link href={`/${id}?api=rawg`}>
			<div
				className={` flex h-[40vh] w-full overflow-visible p-[2px] pt-[2px] sm:h-[77.5vh] sm:pt-[2px]`}
			>
				<div
					className={` game-card-content relative flex h-full w-full overflow-hidden rounded-xl text-white outline outline-2 outline-amber-500/70`}
				>
					<Image
						width={1080}
						height={1920}
						quality={100}
						priority={true}
						className="absolute inset-0 h-full w-full rounded-xl object-cover"
						alt={`${name}'s cover image`}
						src={bgImage}
					/>
					<div className="z-10 w-full">
						<div className="left flex h-full max-w-[1000px] flex-col items-start justify-end gap-4  ">
							<div className="flex flex-col items-start gap-2 rounded-bl-2xl rounded-tr-2xl bg-black bg-opacity-50 bg-clip-padding p-2 pb-0 pl-3 pr-4 shadow-lg backdrop-blur-md backdrop-filter sm:p-4 sm:px-6">
								<p className="text-lg font-bold sm:text-5xl">{name}</p>
								<p className="ml-[2px] text-xs text-gray-300 sm:mb-4 sm:text-sm">
									{releasedDate}
								</p>
								<div className="flex items-center justify-between gap-4 sm:pb-2">
									<Button
										className="hidden rounded-full border border-amber-500 text-amber-500 hover:bg-amber-500 sm:block"
										variant="ghost"
									>
										Check it out
									</Button>
									<StarRating className="hidden sm:flex" rating={rating} />
								</div>
							</div>
						</div>
					</div>
					<div className="right z-10 flex h-full items-start justify-end">
						<MetacriticSquare
							className="p-3 text-sm sm:p-4 sm:text-xl"
							score={parseInt(metacritic)}
						/>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default GameCardCenterStage
