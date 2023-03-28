'use client'

import { QueryClient, QueryClientProvider } from 'react-query'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ReactQueryDevtools } from 'react-query/devtools'

const theme = createTheme({
	type: 'dark', // it could be "light" or "dark"
	theme: {
		colors: {
			primary: '#4ADE7B',
			secondary: '#F9CB80',
			error: '#FCC5D8',
		},
	},
})

function Providers({ children }) {
	const queryClient = new QueryClient()

	return (
		<NextUIProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				{/* <Hydrate state={pageProps.dehydratedState}> */}
				{children}
				{/* </Hydrate> */}
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</NextUIProvider>
	)
}

export default Providers
