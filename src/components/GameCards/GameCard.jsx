import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const GameCard = (props) => {
	const { game } = props
	return (
		<Card className="relative flex flex-col items-start justify-end h-full bg-black">
			<div className="absolute h-full">
				<CardMedia
					component="img"
					image={game.image}
					sx={{}}
					alt="picture of the game"
				/>
			</div>
			<CardContent
				className="flex items-center justify-start w-full p-3 text-white truncate "
				sx={{
					background: 'rgba( 0, 0, 0, 0.45 )',
					boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
					backdropFilter: 'blur( 4px )',
				}}
			>
				<Typography
					gutterBottom
					variant="p"
					component="div"
					className="m-0 truncate "
				>
					{game.title}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default GameCard
