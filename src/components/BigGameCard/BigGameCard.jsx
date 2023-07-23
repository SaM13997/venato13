import style from './CenterStage.module.scss'
import { Button } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import StarRating from './StarRating'
import { MetacriticSquare } from '../../utilities/utilities'

const GameCardCenterStage = ({ game }) => {
	let { id, slug, name, screenshots, aggregated_rating, genres, summary } = game

	const imgURL = `"//images.igdb.com/igdb/image/upload/t_1080p/${screenshots[0].image_id}.jpg"`

	const tagArray = genres.map((genre) => {
		return genre.name
	})
	return (
		<div className={`flex h-[77.5vh] `}>
			<div
				style={{
					backgroundImage: `url(${imgURL})`,
				}}
				className={` game-card-content flex h-full w-full text-white ${style.bgimage}`}
			>
				<div className="z-10 w-full">
					<div className="left flex h-full max-w-[1000px] flex-col items-start justify-end gap-4 p-8 ">
						{/* <StarRating rating={rating} /> */}

						<div className="bg-white-700 flex flex-col items-start gap-4 rounded-3xl bg-opacity-0 bg-clip-padding p-4 shadow-lg backdrop-blur-md backdrop-filter">
							<p className="text-5xl font-bold">{name}</p>
							<div className=" w-[500px]  ">
								<p className=" text-base transition-all [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] [overflow:hidden]">
									{summary}
								</p>
							</div>
							<div className="flex items-center justify-center gap-4">
								{/* <div className="flex flex-col justify-between h-full pb-1 review-ratings">
                  <p className="m-0">Ratings: {rating}</p>
              
                </div> */}
								<Button ghost size="lg" color="warning">
									Add to Library
								</Button>
							</div>
							<div className="mt-2 flex gap-4">
								{tagArray.map((tag) => {
									return (
										<div className="rounded-full bg-white p-1 px-4 text-slate-900">
											{tag}
										</div>
									)
								})}
							</div>
						</div>
					</div>
				</div>
				<div className="right z-10 flex h-full items-start justify-end p-8">
					{/* <button className="p-2 px-4 font-bold text-black bg-yellow-500 rounded-full cursor-pointer w-max">
						Free to Play
					</button> */}
					<MetacriticSquare score={parseInt(aggregated_rating)} />
				</div>
			</div>
		</div>
	)
}

export default GameCardCenterStage
