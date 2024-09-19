"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../_assets/lotus.png"


const links = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Services", href: "#services" },
	{ name: "Contact", href: "#contact" },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav className="bg-[#e5d6cd] shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 items-center">
					<div className="flex-shrink-0">
						<Link href="/" className="text-xl font-bold">
							<Image
								src={logo}
								width={50}
								height={50}
								alt="logo page"
							style={{
							objectFit: "cover",
						}}
							/>
						</Link>
					</div>

					<div className="hidden md:flex md:space-x-8">
						{links.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="hover:text-gray-500"
							>
								{link.name}
							</Link>
						))}
					</div>

					<div className="flex items-center md:hidden">
						<button onClick={toggleMenu} className="hover:text-gray-500">
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			<div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					{links.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-500"
						>
							{link.name}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
}
