import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
	return (
		<section className="flex justify-center gap-[5em] mt-12 leading-none">
			<Image
				className="cursor-pointer"
				src="/imgs/notFound.png"
				width={400}
				height={400}
				alt="logo"
			/>
			<div>
				<h1 className="text-[6em] font-semibold text-[#01579B]">404</h1>
				<p className="mt-1 text-[1.5em] font-medium">
					This page could not be found
				</p>
				<p className="mt-5 text-xl font-medium text-gray-500">
					You can either stay and chill here, or <br /> go back to the
					beginning.
				</p>
				<Link href={`/`}>
					<button
						type="button"
						className="px-4 py-2 rounded text-white bg-blue-400 mt-8">
						Back to home
					</button>
				</Link>
			</div>
		</section>
	);
};

export default NotFound;
