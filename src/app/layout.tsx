import './globals.css'
import ProfileCard from '../components/Sidebar/ProfileCard'
import Link from 'next/link'
import Providers from './Providers'
import { SearchBar, UserAvatar } from '@/components/utilities/UtilityComponents'
import Sidebar from '@/components/Sidebar/Sidebar'

import { Ubuntu } from 'next/font/google'
import DrawerSidebar from '@/components/DrawerSidebar'

export const metadata = {
	title: 'Venato',
	description: 'Your game manager',
}

const ubuntu = Ubuntu({
	weight: '400',
	style: 'normal',
	subsets: ['latin'],
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={ubuntu.className}>
			<body className=" flex h-screen flex-col ">
				<Providers>
					<div className="parent-wrapper">
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

							<UserAvatar text="SM" />
						</header>
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
				</Providers>
			</body>
		</html>
	)
}
