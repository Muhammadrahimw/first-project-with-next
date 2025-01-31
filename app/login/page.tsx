import {FooterComponent} from "@/components/footer";
import {LoginFormComponent} from "@/components/loginForm";
import Image from "next/image";

const Login = () => {
	return (
		<>
			<div className="w-[90%] mx-auto flex items-center justify-between gap-4 mt-5">
				<LoginFormComponent />
				<div className="w-full flex flex-col items-center">
					<h2 className="text-[2em] font-semibold text-[#01579B]">
						Lorem ipsum dolor sit
					</h2>
					<p className="text-gray-500 mt-1 text-xl">
						consectetur adipiscing elit. Suspendisse sed urna in.
					</p>
					<Image
						className="mt-[5em]"
						src="/imgs/login-base-image.png"
						width={400}
						height={400}
						alt="login-image"
					/>
				</div>
			</div>
			<FooterComponent />
		</>
	);
};

export default Login;
