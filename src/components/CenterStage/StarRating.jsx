import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function StarRating(props) {
	let starList = []
	for (let i = 0; i < props.stars; i++) {
		starList.push(<FontAwesomeIcon icon={faStar} color="white" />)
	}
	return <div className="flex ratings ">{starList}</div>
}
