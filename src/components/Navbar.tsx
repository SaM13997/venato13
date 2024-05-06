import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Link from 'next/link'
import React from 'react'
import DrawerSidebar from './DrawerSidebar'
import { SearchBar } from './utilities/UtilityComponents'

async function Navbar() {
	const { getUser } = getKindeServerSession()
	const user = await getUser()
	return (
		<header className="col-span-2 row-start-1 flex items-center justify-between gap-3 p-3 px-6 shadow-md shadow-zinc-800">
			<DrawerSidebar />
			<Link
				href="/"
				className="hidden text-4xl font-bold text-yellow-500 min-[500px]:flex "
			>
				Venato
			</Link>
			<SearchBar />
		</header>
	)
}

export default Navbar
