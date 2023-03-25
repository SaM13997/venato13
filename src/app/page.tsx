import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import CenterStageCarousel from '../components/CenterStage/CenterStageCarousel'
import GameCardCarousel from '../components/GameCards/GameCardCarousel'

export default function Home() {
	return (
		<div className="flex flex-col h-screen bg-[#111313]">
			<CenterStageCarousel />
			<GameCardCarousel />
		</div>
	)
}
