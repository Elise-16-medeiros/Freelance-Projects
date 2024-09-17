'use client'
import { useState } from "react";

const ToggleContent = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleContent = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="p-4">
			<button
				onClick={toggleContent}
				className="bg-blue-500 text-white px-4 py-2 rounded-md"
			>
				{isOpen ? "Hide Content" : "Show Content"}
			</button>

			{/* Conteúdo com toggle */}
			{isOpen && (
				<div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md">
					<h2 className="text-lg font-semibold">Content Title</h2>
					<p className="mt-2 text-gray-700">
						This is the toggleable content. It can be any HTML or JSX content
						you want to show or hide when the button is clicked.
					</p>
				</div>
			)}
		</div>
	);
};

export default ToggleContent;

