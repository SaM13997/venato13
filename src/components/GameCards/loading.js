import React from 'react'

import { Skeleton } from '@/components/ui/skeleton'
import LazyLoadingCarousel from '../GameCards/LoadingFallback'

export default function loading() {
	return (
		<div>
			<div className="container mx-auto h-full w-full gap-4 p-3 pb-0">
				<Skeleton className="mb-3 mt-5 h-10 w-64 rounded-full" />
				<LazyLoadingCarousel />
			</div>
		</div>
	)
}
