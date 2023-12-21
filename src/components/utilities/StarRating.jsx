import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'
import React from 'react'
import { cn } from '@/lib/utils'
import clsx from 'clsx'

const StarRating = ({ rating, className = '' }) => {
	const fullStars = Math.floor(rating)
	const halfStar = rating - fullStars >= 0.5 ? 1 : 0
	const emptyStars = 5 - fullStars - halfStar

	return (
		<div className={clsx(className, 'flex items-center text-2xl')}>
			{[...Array(fullStars)].map((star, i) => (
				<AiFillStar key={i} />
			))}
			{halfStar ? <BsStarHalf /> : null}
			{[...Array(emptyStars)].map((star, i) => (
				<AiOutlineStar key={i + fullStars + halfStar} />
			))}
		</div>
	)
}

export default StarRating
