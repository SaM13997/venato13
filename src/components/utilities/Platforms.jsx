import { FaPlaystation, FaApple, FaXbox, FaLinux } from 'react-icons/fa'
import { AiFillWindows } from 'react-icons/ai'
import { GrAppleAppStore } from 'react-icons/gr'
import { BsAndroid2, BsNintendoSwitch } from 'react-icons/bs'
import { SiAtari } from 'react-icons/si'
import { TbWorldWww } from 'react-icons/tb'
import clsx from 'clsx'
// Todo: <MdGames /> for consoles category in navbar; for future ref

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
	6: () => <AiFillWindows />,
	11: () => <FaXbox />,
	12: () => <FaXbox />,
	49: () => <FaXbox />,
	169: () => <p className="font-bold">X|S</p>,
	130: () => <BsNintendoSwitch />,
	14: () => <FaApple />,
	48: () => <FaPlaystation />,
	167: () => <FaPlaystation />,
}

function Platforms({ platforms, iconClassName = '', className = '' }) {
	return (
		<div className={clsx(className, 'flex w-full items-center')}>
			<div
				className={clsx(
					iconClassName,
					'flex max-w-fit items-center gap-2 rounded-full bg-slate-200 p-2 px-6  text-slate-800'
				)}
			>
				{Array.isArray(platforms) ? (
					platforms.map((platform, index) => {
						const IconComponent = platformToIconMap[platform]
						return (
							<li className="list-none" key={index}>
								{IconComponent && <IconComponent />}
							</li>
						)
					})
				) : (
					<p>TBA</p>
				)}
			</div>
		</div>
	)
}

export default Platforms
