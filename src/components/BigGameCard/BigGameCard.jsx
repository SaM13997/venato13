import style from './CenterStage.module.scss'
import { Button } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import StarRating from './StarRating'
import { MetacriticSquare } from '@/utilities/UtilityComponents'

const GameCardCenterStage = ({ game }) => {
	let { id, slug, name, bgImage, rating, metacritic, released } = game

	const releasedDate = new Date(released).toLocaleString('en-us', {
		month: 'long',
		year: 'numeric',
	})

	return (
		<div className={`flex h-[77.5vh] overflow-visible p-2 pt-[2px]`}>
			<div
				style={{
					backgroundImage: `url(${bgImage})`,
					borderRadius: '16px',
				}}
				className={` game-card-content flex h-full w-full text-white ${style.bgimage} overflow-hidden outline outline-2 outline-amber-500/70`}
			>
				<div className="z-10 w-full">
					<div className="left flex h-full max-w-[1000px] flex-col items-start justify-end gap-4  ">
						<div className="flex flex-col items-start gap-2 rounded-bl-2xl rounded-tr-2xl bg-black bg-opacity-50 bg-clip-padding p-4 px-6 shadow-lg backdrop-blur-md backdrop-filter">
							<p className=" text-5xl font-bold">{name}</p>
							{/* <div className=" w-[500px]  ">
								<p className=" text-base transition-all [-webkit-box-orient:vertical] [-webkit-line-clamp:3] [display:-webkit-box] [overflow:hidden]">
									{summary}
								</p>
							</div> */}
							<p className="mb-4 text-sm text-gray-100">{releasedDate}</p>
							<div className="flex items-center justify-center gap-4 pb-2">
								{/* <div className="flex flex-col justify-between h-full pb-1 review-ratings">
                  <p className="m-0">Ratings: {rating}</p>
              
                </div> */}
								<Button ghost size="lg" color="warning">
									Check it out
								</Button>
								<StarRating rating={rating} />
							</div>

							{/* <div className="mt-2 flex gap-4">
								{tagArray.map((tag) => {
									return (
										<div className="rounded-full bg-white p-1 px-4 text-slate-900">
											{tag}
										</div>
									)
								})}
							</div> */}
						</div>
					</div>
				</div>
				<div className="right z-10 flex h-full items-start justify-end">
					{/* <button className="p-2 px-4 font-bold text-black bg-yellow-500 rounded-full cursor-pointer w-max">
						Free to Play
					</button> */}
					<MetacriticSquare score={parseInt(metacritic)} />
				</div>
			</div>
		</div>
	)
}

export default GameCardCenterStage
