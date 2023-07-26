import './globals.css'
import ProfileCard from '../components/Sidebar/ProfileCard'
import Link from 'next/link'
import Providers from './Providers'
import { SearchBar, UserAvatar } from '@/utilities/utilities'
import { BsController, BsBox2HeartFill } from 'react-icons/bs'
import { MdDoneAll } from 'react-icons/md'

export const metadata = {
	title: 'Venato',
	description: 'Your game manager',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="flex h-screen flex-col overflow-hidden">
				<Providers>
					<div className="flex h-full flex-col">
						<header className="flex items-center justify-between gap-3 p-3 px-6 shadow-md shadow-gray-800">
							<div className="flex items-center gap-4">
								<Link
									href="/"
									className="mt-[-10px] text-4xl font-bold text-yellow-500 "
								>
									Venato
								</Link>
								<SearchBar />
							</div>

							<UserAvatar text="SM" />
						</header>
						<div className="flex h-[calc(100vh-110px)] pl-4">
							<nav className="my-6 flex h-full w-60 min-w-[300px] flex-col justify-between rounded-2xl border-2 border-zinc-700 bg-zinc-900 p-4">
								<div className=" flex flex-col ">
									<div className=" flex flex-col gap-5 pl-2 pt-4 text-xl text-slate-100">
										<button className=" w-max text-xl hover:text-amber-400">
											<span className="flex">
												<BsController className="mb-[2px] mr-4 inline text-3xl" />{' '}
												Want to Play
											</span>
										</button>
										<button className=" w-max text-xl hover:text-amber-400">
											<span className="flex">
												<BsBox2HeartFill className="ml-[6px] mr-5 mt-[4px] inline" />{' '}
												Owned Games
											</span>
										</button>
										<button className=" w-max text-xl hover:text-amber-400">
											<span className="flex">
												<MdDoneAll className="ml-[6px] mr-5 mt-[4px] inline" />
												Completed
											</span>
										</button>
									</div>
								</div>
							</nav>
							<main className="my-6 h-full w-full overflow-y-auto text-white">
								<div className=" h-full">{children}</div>
							</main>
						</div>
					</div>
				</Providers>
			</body>
		</html>
	)
}
