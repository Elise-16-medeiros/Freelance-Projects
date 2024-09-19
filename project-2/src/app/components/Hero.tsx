import Image from "next/image";
import imageBg from "../_assets/hero.jpg";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
export default function Hero() {
	return (
		<section className="relative h-screen w-full">
			<div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
				<div className="absolute inset-0">
					<Image
						src={imageBg}
						alt="Background Image"
						placeholder="blur"
						quality={100}
						fill
						sizes="100vw"
						style={{
							objectFit: "cover",
						}}
						className="object-cover object-center w-full h-full"
					/>
					<div className="absolute inset-0 bg-black opacity-50"></div>
				</div>

				<div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
					<h1 className="text-5xl font-bold leading-tight mb-4 font-libre">
						Encanto das Mãos
					</h1>
					<p className="text-lg text-gray-300 mb-8">
						O caminho para o ralaxamento do copo e da alma
					</p>
					<Link
						href="#sobre"
						className="bg-[#c2a089] text-gray-900 hover:bg-[#cbae9a] py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
					>
						<ArrowDown className="text-white"/>
					</Link>
				</div>
			</div>
		</section>
	);
}


/* 



	<Image
				src={imageBg}
				alt="Background Image"
				placeholder="blur"
				quality={100}
				fill
				sizes="100vw"
				style={{
					objectFit: "cover",
				}}
				className="-z-50 blur-sm"
			/>
			<div className="-z-50 h-screen w-full relative">
				<div className="flex flex-col items-center justify-center absolute inset-0">
					<h1 className="font-bold font-libre">Encanto das Mãos</h1>
					<p className="text-xl mt-4">
						O caminho para o relaxamento do corpo e da alma
					</p>
				</div>
			</div>*/