import {SettingOutlined} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

export const HeaderComponent = () => {
	return (
		<header className="flex items-center justify-between gap-4 w-[90%] mx-auto py-4">
			<nav className="flex items-center gap-10 font-medium text-xl">
				<Link href={`/`}>
					<Image
						className="cursor-pointer"
						src="/imgs/Landsacpe.svg"
						width={150}
						height={100}
						alt="logo"
					/>
				</Link>
				<Link href={`/contact`}>
					<p className="cursor-pointer">Contact</p>
				</Link>
				<Link href={`/menu`}>
					<p className="cursor-pointer">menu 2</p>
				</Link>
				<Link href={`/menu`}>
					<p className="cursor-pointer">menu 3</p>
				</Link>
				<Link href={`/menu`}>
					<p className="cursor-pointer">menu 4</p>
				</Link>
				<Link href={`/menu`}>
					<p className="cursor-pointer">menu 5</p>
				</Link>
			</nav>
			<nav className="flex items-center gap-7">
				<Link href={`/login`}>
					<button type="button" className="px-3 py-1 font-medium">
						LOGIN
					</button>
				</Link>
				<Link href={`/register`}>
					<button
						type="button"
						className="px-4 py-1 rounded bg-orange-400 text-white font-medium">
						REGISTER
					</button>
				</Link>
				<div className="h-7 border-l border-gray-400"></div>
				<SettingOutlined className="text-2xl cursor-pointer ml-[-0.4em]" />
			</nav>
		</header>
	);
};
