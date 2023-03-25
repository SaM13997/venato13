import style from './CenterStage.module.scss'
import { Button, IconButton } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import StarRating from './StarRating'

const GameCardCenterStage = ({ game }) => {
	const { name, rating, bgImage } = game
	console.log(bgImage)

	return (
		<div className={`flex h-[77.5vh] `}>
			<div
				style={{
					backgroundImage: `url(${bgImage})`,
				}}
				className={` flex h-full w-full text-white game-card-content ${style.bgimage}`}
			>
				<div className="z-10 w-full">
					<div className="left flex flex-col justify-end items-start p-8 gap-4     bg-light-800 max-w-[1000px] h-full ">
						<p className="text-5xl font-bold">{name}</p>
						{/* <p className="text-xl">
							"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
							laborum doloremque iure cum vitae dicta labore iusto tempore alias
							aliquam!"
						</p> */}
						<div className="flex items-center justify-center gap-4">
							<div className="flex flex-col justify-between h-full pb-1 review-ratings">
								<p className="m-0">Ratings: {rating}</p>
								<StarRating stars={4} />
							</div>
							<Button className="p-3 px-4 font-bold text-black bg-yellow-500 rounded-md">
								Add to Library
							</Button>
							<IconButton className="p-3 px-4 font-bold text-yellow-500">
								<FontAwesomeIcon icon={faCartShopping} />
							</IconButton>
						</div>
					</div>
				</div>
				<div className="z-10 flex items-start justify-end h-full p-8 right">
					<button className="p-2 px-4 font-bold text-black bg-yellow-500 rounded-full cursor-pointer w-max">
						Free to Play
					</button>
				</div>
			</div>
		</div>
	)
}

export default GameCardCenterStage
