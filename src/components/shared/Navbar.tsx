import React from 'react'
import {
	RegisterLink,
	LoginLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
import DrawerSidebar from '@/components/DrawerSidebar'
import { SearchBar } from '@/components/utilities/UtilityComponents'
import Link from 'next/link'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

async function Navbar() {
	const { getUser } = getKindeServerSession()
	const user = await getUser()
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

			{user ? (
				user.given_name
			) : (
				<div className="flex gap-4">
					<LoginLink>Sign in</LoginLink>
					<RegisterLink>Sign up</RegisterLink>
				</div>
			)}
		</header>
	)
}

export default Navbar
