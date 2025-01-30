import Image from "next/image";

const Home = () => {
	return (
		<section className="flex flex-col items-center gap-4">
			<h1 className="text-5xl font-semibold mt-12">Sed Imperdiet Enim</h1>
			<p className="text-2xl mt-2">
				Nam sollicitud cursus eros vulputate. Lorem ipsum dolor sit amet
			</p>
			<div className="mt-6">
				<button
					type="button"
					className="text-blue-400 px-6 py-2 rounded font-medium">
					LEARN MORE
				</button>
				<button
					type="button"
					className="text-white px-6 py-2 rounded bg-[#03a9f4] font-medium">
					LEARN MORE
				</button>
			</div>
			<Image
				className=""
				src="/imgs/data.jpg"
				width={300}
				height={200}
				alt="banner"
			/>
			<div className="flex items-center gap-4 justify-center mt-10">
				<div className="border-r border-gray-300 pr-12">
					<p className="text-3xl font-semibold">Business Solution</p>
					<p className="mt-1">Interdum et malesuada ac ante...</p>
				</div>
				<div className="border-r border-gray-300 pr-12 pl-4">
					<p className="text-3xl font-semibold">Free project quote</p>
					<p className="mt-1">Interdum et malesuada ac ante...</p>
				</div>
				<div className="pl-4">
					<p className="text-3xl font-semibold">Nulla lobortis nunc</p>
					<p className="mt-1">Interdum et malesuada ac ante...</p>
				</div>
			</div>
		</section>
	);
};

export default Home;
