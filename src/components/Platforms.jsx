import { FaPlaystation, FaApple, FaXbox, FaLinux } from 'react-icons/fa'
import { AiFillWindows } from 'react-icons/ai'
import { GrAppleAppStore } from 'react-icons/gr'
import { BsAndroid2, BsNintendoSwitch } from 'react-icons/bs'
import { SiAtari } from 'react-icons/si'
import { TbWorldWww } from 'react-icons/tb'

export function ButtonGhost() {
	return <Button variant="ghost">Ghost</Button>
}

const platformToIconMap = {
	PC: () => <AiFillWindows />,
	PlayStation: () => <FaPlaystation />,
	'Apple Macintosh': () => <FaApple />,
	Xbox: () => <FaXbox />,
	iOS: () => <GrAppleAppStore />,
	Android: () => <BsAndroid2 />,
	Linux: () => <FaLinux />,
	Nintendo: () => <BsNintendoSwitch />,
	Atari: () => <SiAtari />,
	Web: () => <TbWorldWww />,
}

function Platforms({ platforms }) {
	return (
		<div className="flex w-full items-center justify-between">
			<div className="  flex max-w-fit items-center gap-2 rounded-full bg-slate-200 p-2 px-6 text-slate-800">
				{platforms.map((platform, index) => {
					const IconComponent = platformToIconMap[platform]
					return <li key={index}>{IconComponent && <IconComponent />}</li>
				})}
			</div>
		</div>
	)
}

export default Platforms
