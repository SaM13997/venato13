import { NextResponse } from 'next/server'
import React from 'react'
import SwiperComponent from './SwiperComponent'

type Props = {
	category: {
		queryKey: string
		queryUrl: string
		headingText: string
	}
}

async function SwiperCarousel(props: Props) {
	const { queryKey, queryUrl, headingText } = props.category
	const res = await fetch(
		process.env.NODE_ENV === 'development'
			? `http://localhost:3000${queryUrl}`
			: `https://venato13.vercel.app${queryUrl}`
	)

	const data = res.json()

	return <SwiperComponent data={data} headingText={headingText} />
}

export default SwiperCarousel
