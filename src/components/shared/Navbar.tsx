import React from 'react'
import {
	SignedIn,
	SignedOut,
	SignIn,
	SignInButton,
	UserButton,
} from '@clerk/nextjs'
import DrawerSidebar from '@/components/DrawerSidebar'
import { SearchBar } from '@/components/utilities/UtilityComponents'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'

async function Navbar() {
	const user = await currentUser()
	if (!user) return null
	return (
		<header className="col-span-2 row-start-1 flex items-center justify-between gap-3 p-3 px-6 shadow-md shadow-zinc-800">
			<div className="flex items-center gap-4">
				<DrawerSidebar />
				<Link
					href="/"
					className="hidden text-4xl font-bold text-yellow-500 min-[500px]:flex "
				>
					Venato
				</Link>
			</div>
			<SearchBar />

			<UserButton />
		</header>
	)
}

export default Navbar
