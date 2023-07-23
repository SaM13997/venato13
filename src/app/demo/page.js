function Main() {
	return (
		<div className="flex-col flex items-start  p-2.5 ">
			<div className=" w-full flex items-start ">
				<div className="Left bg-yellow-100 h-full flex-col w-[67%] flex justify-start items-start gap-2.5 rounded-[22px]">
					<img src="/images/Main/Frame-10.svg" alt="Frame 10" className="max-h-[60vh] w-full" />
					<div className="w-full flex-1 flex justify-center items-center gap-2.5">
						<img src="/images/Main/Frame-6.svg" alt="Frame 6" className="max-h-[164px] w-[150px]" />
						<img src="/images/Main/Frame-7.svg" alt="Frame 7" className="max-h-[164px] w-[150px]" />
						<img src="/images/Main/Frame-8.svg" alt="Frame 8" className="max-h-[164px] w-[150px]" />
						<img src="/images/Main/Frame-9.svg" alt="Frame 9" className="max-h-[164px] w-[150px]" />
					</div>
				</div>
				<div className="Right h-full [&>*]:text-slate-100 flex-1 w-[33%] flex-col flex items-center gap-6 px-5 py-3.5">
					<div className="text-[39px]  leading-[59px] text-black font-Poppins">
						Grand Theft Auto V
					</div>
					<div className="w-full flex justify-center items-start gap-2.5 py-1 text-lg leading-[36px] text-center text-black font-Poppins">
						<p className="w-[520px] text-lg text-slate-100">
							Grand Theft Auto V for PC offers players the option to explore the award-winning world
							of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the
							chance to experience the game running at 60 frames per second.
						</p>
					</div>
					<div className=" [&>*]:text-slate-100 w-full flex-col flex items-center gap-[9px] p-2.5 text-center font-Poppins">
						<div className="w-full flex justify-between items-center px-2.5 text-lg leading-[36px]">
							<p className="">Aggregated Rating:</p>
								<p>96</p>
						</div>
						<div className="w-full flex justify-between items-center px-2.5 text-lg leading-[36px]">
							<p className="">Release Date:</p>
								<p>14 April, 2015</p>
						</div>
						<div className="w-full flex justify-between items-center px-2.5 text-lg leading-[36px]">
							<div className="">Developer:</div>
								<p>Rockstar North</p>
						</div>
						<div className="w-full flex justify-between items-center px-2.5 py-10 text-base ">
							<div className="bg-yellow-100 text-yellow-700 font-semibold flex items-center gap-2.5 px-5 py-2.5 rounded-3xl">
								<div>Open World</div>
							</div>
							<div className="bg-yellow-100 text-yellow-700 font-semibold flex items-center gap-2.5 px-5 py-2.5 rounded-3xl">
								<div>Action</div>
							</div>
							<div className="bg-yellow-100 text-yellow-700 font-semibold flex items-center gap-2.5 px-5 py-2.5 rounded-3xl">
								<div>Mature</div>
							</div>
							<div className="bg-yellow-100 text-yellow-700 font-semibold flex items-center gap-2.5 px-5 py-2.5 rounded-3xl">
								<div>Crime</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center gap-8 rounded-full px-8 py-4 bg-slate-100">
						<img
							className="object-cover h-[35px] w-[35px] "
							alt="1443 1"
							src="/images/Main/1443-1.png"
						/>
						<img
							className="object-cover h-[35px] w-[35px] "
							alt="732076 1"
							src="/images/Main/732076-1.png"
						/>
						<img
							className="object-cover h-[35px] w-[35px] "
							alt="1321 1"
							src="/images/Main/1321-1.png"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Main;
