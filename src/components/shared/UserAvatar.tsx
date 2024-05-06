'use client'

import React from 'react'
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '../../components/ui/avatar.jsx'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { FiLogOut } from 'react-icons/fi'

function AvatarComponent(props) {
	// const { user: kindeUser } = useKindeBrowserClient()
	const kindeUser = props.user
	console.log({ kindeUser })
	let userInitials

	if (kindeUser && kindeUser?.given_name && kindeUser?.family_name) {
		userInitials = kindeUser?.given_name[0] + kindeUser?.family_name[0]
	}
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar>
					<AvatarImage src={kindeUser?.picture || 'na'} />
					<AvatarFallback>{userInitials}</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					<LogoutLink>Logout</LogoutLink>
					<DropdownMenuShortcut>
						<FiLogOut />
					</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default AvatarComponent
