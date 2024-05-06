'use client'
import React from 'react'
import {
	RegisterLink,
	LoginLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
import DrawerSidebar from '@/components/DrawerSidebar'
import { SearchBar } from '@/components/utilities/UtilityComponents'
import UserAvatar from '@/components/shared/UserAvatar'
import Link from 'next/link'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'

function Navbar() {
	const { user, isLoading } = useKindeBrowserClient()
	console.log({ user })
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

			{isLoading ? (
				<p>Loading...</p>
			) : user ? (
				<UserAvatar user={user} />
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
