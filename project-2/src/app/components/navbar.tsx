"use client";

import { GripVertical, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const navLinks = [
		{ name: "Home", href: "#home" },
		{ name: "About", href: "#about" },
		{ name: "Services", href: "#services" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<nav className="bg-emerald-300 px-4 py-3 flex items-center justify-between">
			<div className="flex">
				<h2 className="text-xl font-bold text-gray-800 font-libre shrink-0">
					LOGO
				</h2>
			</div>

			<div className="flex justify-center items-center">
				<div className="hidden md:flex md:space-x-4">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className="text-gray-800 hover:text-gray-600"
						>
							{link.name}
						</Link>
					))}
				</div>
				<div className="md:hidden">
					<button onClick={toggleMenu}>
						{isOpen ? <X /> : <GripVertical />}
					</button>
				</div>
				{isOpen && (
					<div className="bg-slate-500">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="text-gray-800 hover:text-gray-600"
							>
								{link.name}
							</Link>
						))}
					</div>
				)}
			</div>
		</nav>
	);
}
