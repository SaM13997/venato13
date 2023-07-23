import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import CenterStageCarousel from '../components/BigGameCard/BigGameCarousel'
import GameCardCarousel from '../components/GameCards/GameCardCarousel'
import GameList from '../components/Games'

export default function Home() {
	return (
		<div className="flex h-screen flex-col bg-[#111313]">
			<CenterStageCarousel />
			<GameCardCarousel />
			{/* <GameList /> */}
		</div>
	)
}
