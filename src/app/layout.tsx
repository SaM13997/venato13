import './globals.css'
import Providers from './Providers'
import 'overlayscrollbars/overlayscrollbars.css'
import { Ubuntu } from 'next/font/google'
export const dynamic = 'force-static'
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
		<html lang="en">
			<body className="m-0 h-dvh overflow-hidden p-0">
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
