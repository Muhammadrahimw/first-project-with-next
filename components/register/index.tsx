import Image from "next/image";

export const RegisterComponent = () => {
	return (
		<div className="w-[90%] mx-auto mt-5 flex items-center justify-between gap-4">
			<section className="w-[40em] py-10 px-[4.5em] flex flex-col items-center border border-[#03A9F4] rounded-2xl">
				<p className="text-[#01579B] font-medium">Login to Your Account</p>
				<div className="flex items-center gap-4 mt-6">
					<button
						className="flex items-center gap-2 text-white bg-[#5856D6] rounded px-5 py-1"
						type="button">
						Facebook
					</button>
					<button
						className="flex items-center gap-2 text-white bg-[#00BCD4] rounded px-5 py-1"
						type="button">
						Twitter
					</button>
					<button
						className="flex items-center gap-2 text-white bg-[#D84226] rounded px-5 py-1"
						type="button">
						Google
					</button>
				</div>
				<div className="flex items-center gap-5 mt-10">
					<div className="w-full h-[2px] bg-gray-300 rounded"></div>
					<div className="w-[27em]">
						<p className="text-gray-400">Or login with email</p>
					</div>
					<div className="w-full h-[2px] bg-gray-300 rounded"></div>
				</div>
				<div className="w-full">
					<input
						type="text"
						placeholder="Name"
						className="w-full h-10 bg-[#e8e8e8] pl-3 mt-8 outline-none border-b border-blue-400"
					/>
					<input
						type="email"
						placeholder="Email"
						className="w-full h-10 bg-[#e8e8e8] pl-3 mt-8 outline-none border-b border-blue-400"
					/>
					<div className="flex items-center justify-between gap-4">
						<input
							type="password"
							placeholder="Password"
							className="w-full h-10 bg-[#e8e8e8] pl-3 mt-8 outline-none border-b border-blue-400"
						/>
						<input
							type="password"
							placeholder="Repeat Password*"
							className="w-full h-10 bg-[#e8e8e8] pl-3 mt-8 outline-none border-b border-blue-400"
						/>
					</div>
				</div>
				<div className="flex items-center justify-between w-full gap-7 mt-[4em]">
					<div className="flex items-start gap-2">
						<input
							type="checkbox"
							id="remember"
							className="cursor-pointer mt-[5px]"
						/>
						<label htmlFor="remember" className="cursor-pointer">
							I have read and accept the Terms of
							<span className="text-blue-400"> Service & Privacy Policy *</span>
						</label>
					</div>
					<button
						type="button"
						className="w-[10em] h-10 rounded bg-[#03A9F4] text-white">
						Continue
					</button>
				</div>
			</section>
			<section className="w-full flex flex-col items-center">
				<h2 className="text-[2em] font-semibold text-[#01579B]">
					Lorem ipsum dolor sit
				</h2>
				<p className="text-gray-500 mt-1 text-xl">
					consectetur adipiscing elit. Suspendisse sed urna in.
				</p>
				<Image
					className="mt-[5em]"
					src="/imgs/login-image.png"
					width={400}
					height={400}
					alt="login-image"
				/>
			</section>
		</div>
	);
};
