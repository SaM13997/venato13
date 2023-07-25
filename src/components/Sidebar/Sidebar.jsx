'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'antd'
import ProfileCard from './ProfileCard'
import { Drawer, IconButton } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faHamburger } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar(props) {
	const navLinks = [
		{
			label: 'Library',
			key: '1',
		},
		{
			label: 'Owned Games',
			key: '2',
		},
		{
			label: 'Want To Play',
			key: '3',
		},
		{
			label: 'Dropped',
			key: '4',
		},
	]
	// const [drawerState, setDrawerState] = useState(true)
	return <div></div>
}

{
	/* <Drawer
			variant="permanent"
			open={drawerState}
			className=""
			PaperProps={{
				className:
					'flex flex-col justify-between bg-black w-[15%] p-2 border border-gray-900',
			}}
		>
			<div className="flex flex-col items-start gap-4 mt-1 ">
				<header className="flex justify-start w-full">
					{drawerState ? (
						<IconButton onClick={() => setDrawerState(false)}>
							<FontAwesomeIcon icon={faClose} color="white" />
						</IconButton>
					) : (
						<IconButton onClick={() => setDrawerState(true)}>
							<FontAwesomeIcon icon={faHamburger} color="white" />
						</IconButton>
					)}
				</header>
				<Link href="/">
					<button className="bg-[#080808] border-none">
						<a className="text-4xl font-bold text-yellow-500">Venato</a>
					</button>
				</Link>
				<SearchBar />
				<Menu items={navLinks} className="w-[100%] rounded" />
			</div>
			<ProfileCard />
		</Drawer> */
}
