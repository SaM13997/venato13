'use client'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { ClerkProvider } from '@clerk/nextjs'

function Providers({ children }) {
	const queryClient = new QueryClient()

	return (
		<ClerkProvider>
			<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
				<QueryClientProvider client={queryClient}>
					{children}
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</ThemeProvider>
		</ClerkProvider>
	)
}

export default Providers
