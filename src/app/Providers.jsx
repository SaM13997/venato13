'use client'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

function Providers({ children }) {
	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			{/* <Hydrate state={pageProps.dehydratedState}> */}
			{children}
			{/* </Hydrate> */}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default Providers
