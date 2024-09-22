"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../_assets/lotus.png";
import { motion } from "framer-motion";
import { GripVertical, X } from "lucide-react";

const menuVariants = {
	open: {
		x: 0,
		opacity: 1,
		transition: { stiffness: 300 },
		type: "spring",
		ease: "linear",
	},
	closed: {
		x: "-100%",
		opacity: 0,
		transition: { stiffness: 300 },
		type: "spring",
		ease: "linear",
	},
};

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
		<nav className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 flex justify-between items-center">
			<div className="relative">
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

				{/* Botão de abertura do menu */}
				<button
					onClick={toggleMenu}
					className="p-4 bg-blue-500 text-white fixed z-20 right-4 top-4"
				>
					{isOpen ? <X /> : <GripVertical />}
				</button>

				{/* Menu animado */}
				<motion.div
					initial="closed"
					animate={isOpen ? "open" : "closed"}
					variants={menuVariants}
					className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-10 p-6"
				>
					<div className="hidden md:flex md:space-x-8">
						<ul className="flex items-center justify-center gap-y-8 flex-col">
							<li>
								<h2 className="font-libre text-lg text-center">
									Encanto das Mãos
								</h2>
							</li>
							{links.map((link) => (
								<motion.li
									key={link.name}
									transition={{
										delayChildren: 1,
									}}
								>
									<Link
										href={link.href}
										className="hover:text-gray-500 transition-all"
									>
										{link.name}
									</Link>
								</motion.li>
							))}
						</ul>
					</div>
				</motion.div>

				{/* Fundo escurecido quando o menu está aberto */}
				{isOpen && (
					<div
						onClick={() => setIsOpen(false)}
						className="fixed inset-0 bg-black bg-opacity-50 z-0"
					/>
				)}
			</div>
		</nav>
	);
}

/* 

<div className="">
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
							<ul className="flex items-center justify-center gap-x-4">
								{links.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="hover:text-gray-500 transition-all"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div className="flex items-center md:hidden">
							<button onClick={toggleMenu} className="hover:text-gray-500">
								<svg
									className="h-6 w-6 transition-all"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d={
											isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
										}
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<ul>
							{links.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-500"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>











*/
