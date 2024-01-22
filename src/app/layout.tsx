import './globals.css'
import Providers from './Providers'

import { Ubuntu } from 'next/font/google'

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
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
