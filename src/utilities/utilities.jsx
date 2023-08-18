// import { Input, Avatar } from '@nextui-org/react'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const platformsArrayCreator = (platformParentArray) => {
	if (platformParentArray) {
		return platformParentArray.map((entry) => {
			return entry?.platform?.name
		})
	}
}

export const getGamesFromQuery = (games) => {
	return games.map((game) => {
		// console.log('platform Array', platformsArrayCreator(game.parent_platforms))
		return {
			id: game.id,
			slug: game.slug,
			name: game.name,
			bgImage: game.background_image || '',
			rating: game.rating || 'TBA',
			metacritic: game.metacritic || 'TBA',
			released: game.released || 'TBA',
			platforms: platformsArrayCreator(game?.parent_platforms) || 'TBA',
			genres: game.genres || 'TBA',
			screenshots: game.short_screenshorts || 'TBA',
		}
	})
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
