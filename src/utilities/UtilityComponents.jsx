import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

export const GenreChips = ({ genres, className, chipsClassName }) => {
	console.log({ genres })

	if (genres) {
		return (
			<div className={cn('flex max-h-[140px] flex-wrap gap-2', className)}>
				{genres?.map((genre, index) => {
					return (
						<p
							className={cn(
								'rounded-full bg-slate-200 p-1 px-3 text-sm text-slate-800',
								chipsClassName
							)}
							key={index}
						>
							{genre?.name}
						</p>
					)
				})}
			</div>
		)
	}
	return null
}
export const SearchBar = () => {
	return (
		<Input
			type="text"
			placeholder="Search"
			className="border-gray-900 bg-[#e7e7e7] text-slate-100 "
		/>
	)
}

export const UserAvatar = ({ text }) => (
	<Avatar>
		<AvatarFallback>{text}</AvatarFallback>
	</Avatar>
)

export const MetacriticSquare = ({ score }) => {
	// const [bgColor, setBgColor] = useState('#66CC33')
	if (!score) {
		return null
	}

	let bgColor
	if (score >= 75) {
		bgColor = '#66CC33'
	} else if (score < 75 && score >= 50) {
		bgColor = '#FFCC33'
	} else if (score < 50) {
		bgColor = '#FF0000'
	}

	return (
		<div
			className="square flex h-16 w-16 items-center justify-center rounded-bl-md text-xl shadow-md shadow-slate-800"
			style={{
				backgroundColor: bgColor,
			}}
		>
			{score}
		</div>
	)
}
