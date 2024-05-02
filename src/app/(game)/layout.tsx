import React from 'react'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar/Sidebar'
import Navbar from '@/components/shared/Navbar'
import { auth, clerkClient } from '@clerk/nextjs/server'

async function GameLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="parent-wrapper">
			{/* @ts-expect-error} */}
			<Navbar />
			<div
				className="wrapper [grid-area: sidebar] col-span-1
            hidden p-6 lg:grid lg:place-items-center"
			>
				<nav className=" h-full w-full flex-col justify-between rounded-2xl border-2 border-zinc-700 bg-zinc-900 p-4 ">
					<Sidebar className="" />
				</nav>
			</div>
			<div className="wrapper main-container [grid-area: main] my-6 overflow-y-scroll pr-6 ">
				<main className="h-full text-white">{children}</main>
			</div>
		</div>
	)
}

export default GameLayout
