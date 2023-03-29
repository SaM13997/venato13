import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { faStar as hollowStar } from '@fortawesome/free-regular-svg-icons'
// import { regular } from "@fortawesome/react-fontawesome"
import React from 'react'

export default function StarRating(props) {
	const { rating } = props
	// console.log({ rating })
	const fullStars = Math.round(rating)
	const halfStars = Math.round((rating - fullStars) * 2)
	const emptyStars = 5 - fullStars - halfStars

	let starList = []
	for (let i = 0; i < fullStars; i++) {
		starList.push(<FontAwesomeIcon icon={faStar} color="white" />)
	}
	for (let i = 0; i < halfStars; i++) {
		starList.push(<FontAwesomeIcon icon={faStarHalfStroke} color="white" />)
	}
	for (let i = 0; i < emptyStars; i++) {
		starList.push(<FontAwesomeIcon icon={hollowStar} />)
	}
	return <div className="flex ratings ">{starList}</div>
}
