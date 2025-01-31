export const ContactComponent = () => {
	return (
		<section className="w-[50em] mx-auto mt-5">
			<h1 className="text-[2.5em] font-semibold text-center text-[#01579B]">
				Say hello to Us
			</h1>
			<p className="text-gray-500 text-xl font-medium text-center mt-2">
				Aenean sit amet magna vel magna fringilla fermentum. Donec sit amet
				nulla sed arcu pulvinar ultricies commodo id ligula.
			</p>
			<div className="flex items-center justify-between gap-5 mt-[3.5em]">
				<input
					className="pl-3 w-full h-10 border-b border-blue-400 bg-[#e8e8e8] outline-none"
					type="text"
					placeholder="What is your name?"
				/>
				<input
					className="pl-3 w-full h-10 border-b border-blue-400 bg-[#e8e8e8] outline-none"
					type="email"
					placeholder="What it your email?"
				/>
			</div>
			<div className="flex items-center justify-between gap-5 mt-10">
				<input
					className="pl-3 w-full h-10 border-b border-blue-400 bg-[#e8e8e8] outline-none"
					type="text"
					placeholder="What is your phone number?"
				/>
				<input
					className="pl-3 w-full h-10 border-b border-blue-400 bg-[#e8e8e8] outline-none"
					type="email"
					placeholder="What is your company?"
				/>
			</div>
			<textarea
				className="w-full h-[6em] mt-10 bg-[#e8e8e8] outline-none p-3 border-b border-blue-400"
				placeholder="Write your message here"></textarea>
			<div className="flex items-center justify-between gap-4 mt-10">
				<div className="flex items-start gap-2">
					<input
						type="checkbox"
						id="remember"
						className="cursor-pointer mt-[5px]"
					/>
					<label htmlFor="remember" className="cursor-pointer">
						I have read and accept the Terms of <br />
						<span className="text-blue-400"> Service & Privacy Policy *</span>
					</label>
				</div>
				<button
					type="button"
					className="rounded bg-blue-500 text-white px-4 py-1">
					send message
				</button>
			</div>
		</section>
	);
};
