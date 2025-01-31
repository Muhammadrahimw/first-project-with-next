import {FacebookFilled, GithubFilled, TwitterOutlined} from "@ant-design/icons";
import Image from "next/image";

export const ComingSoonComponent = () => {
	return (
		<section className="flex flex-col items-center justify-center gap-5">
			<Image
				className="mt-[5em]"
				src="/imgs/coming-image.png"
				width={700}
				height={700}
				alt="login-image"
			/>
			<div className="w-[40em] h-11 bg-[#e8e8e8] flex items-center justify-between gap-2 px-2 border-b border-blue-400">
				<input
					type="text"
					placeholder="Notify me"
					className="w-full h-full bg-transparent outline-none text-xl pl-1"
				/>
				<button
					type="button"
					className="bg-blue-400 w-[8em] h-8 rounded text-white uppercase">
					<p className="text-sm mt-[0.2em]">Notify me</p>
				</button>
			</div>
			<div className="flex items-center gap-10 mt-10 text-2xl">
				<FacebookFilled className="text-[#0D47A1] cursor-pointer" />
				<TwitterOutlined className="text-[#2196F3] cursor-pointer" />
				<GithubFilled className="text-gray-400 cursor-pointer" />
			</div>
		</section>
	);
};
