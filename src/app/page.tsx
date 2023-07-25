import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import CenterStageCarousel from '../components/BigGameCard/BigGameCarousel'
import GameCardCarousel from '../components/GameCards/GameCardCarousel'
import GameList from '../components/Games'

export default function Home() {
	return (
		<div className="mx-auto  min-h-screen max-w-[1500px] px-4  ">
			<div className=" main-carousel rounded-xl py-5">
				<CenterStageCarousel />
			</div>
			<p className="my-3 pl-12 text-4xl">Newly Released</p>

			<div className=" ">
				<GameCardCarousel />
			</div>
			{/* <GameList /> */}
		</div>
	)
}
