import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { auth, clerkClient } from '@clerk/nextjs/server'
import Sidebar from '@/components/Sidebar/Sidebar'

async function GameLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-dvh flex-col">
			<div className="header h-16">
				<Navbar />
			</div>
			<main className="flex h-full w-full gap-4 overflow-y-hidden rounded-xl p-4">
				<Sidebar className="hidden sm:block" />
				<div className="overflow-hidden">{children}</div>
			</main>
		</div>
	)
}

export default GameLayout
