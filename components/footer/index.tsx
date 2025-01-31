import Image from "next/image";
import Link from "next/link";

export const FooterComponent = () => {
	return (
		<footer className="bg-[#f0fafe] mt-[4em] py-[4em]">
			<div className="w-[90%] mx-auto gap-4 grid grid-cols-5">
				<div>
					<Link href={`/`}>
						<Image
							className="cursor-pointer"
							src="/imgs/Landsacpe.svg"
							width={150}
							height={100}
							alt="logo"
						/>
					</Link>
					<p className="mt-3 text-gray-400 text-sm">
						Nam posuere accumsan porta. Integer id orci sed ante tincidunt
						tincidunt sit amet sed libero.
					</p>
					<p className="text-sm mt-3">© Skyrev Theme 3021</p>
				</div>
				<div className="flex flex-col gap-3">
					<p className="text-[1.15em] font-semibold text-[#03A9F4] uppercase">
						Company
					</p>
					<p>Donec dignissim</p>
					<p>Curabitur egestas</p>
					<p>Nam posuere</p>
					<p>Aenean facilisis</p>
				</div>
				<div className="flex flex-col gap-3">
					<p className="text-[1.15em] font-semibold text-[#03A9F4] uppercase">
						Services
					</p>
					<p>Cras convallis</p>
					<p>Vestibulum faucibus</p>
					<p>Quisque lacinia purus</p>
					<p>Aliquam nec ex</p>
				</div>
				<div className="flex flex-col gap-3">
					<p className="text-[1.15em] font-semibold text-[#03A9F4] uppercase">
						resources
					</p>
					<p>Suspendisse porttitor</p>
					<p>Nam posuere</p>
					<p>Curabitur egestas </p>
				</div>
				<div>
					<div className="flex items-center gap-3">
						<Image
							className="cursor-pointer"
							src="/imgs/1.svg"
							width={30}
							height={30}
							alt="logo"
						/>
						<Image
							className="cursor-pointer"
							src="/imgs/2.svg"
							width={30}
							height={30}
							alt="logo"
						/>
						<Image
							className="cursor-pointer"
							src="/imgs/3.svg"
							width={30}
							height={30}
							alt="logo"
						/>
						<Image
							className="cursor-pointer"
							src="/imgs/4.svg"
							width={30}
							height={30}
							alt="logo"
						/>
					</div>
					<div className="w-[9em] h-9 rounded border-2 border-blue-400 mt-5 cursor-pointer flex items-center justify-center">
						English - En
					</div>
				</div>
			</div>
		</footer>
	);
};
