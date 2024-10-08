import type { Metadata } from "next";
import { Libre_Baskerville, Hind } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";




const libre = Libre_Baskerville({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-libre",
});
const hind = Hind({
	subsets: ["latin"],
	variable: "--font-hind",
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Caminho das Mãos",
	description: "Generated by create next app",
	icons: {
		icon: "/favicon.ico", 
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body className={`${libre.variable} ${hind.variable} antialiased`}>
				<header><Navbar/></header>
				
				<main>{children}</main>
				<footer>footer</footer>
			</body>
		</html>
	);
}
