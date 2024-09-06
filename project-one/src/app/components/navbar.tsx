import Link from "next/link";
import styles from "@/app/_styles/navbar.module.css";


type Link = {
	name: string;
	url: string;
};
const links: Link[] = [
	{ name: "Home", url: "#home" },
	{ name: "Sobre", url: "#sobre" },
	{ name: "Massagens", url: "#massagens" },
	{ name: "Detox", url: "#detox" },
	{ name: "contato", url: "#contato" },
];

export default function Navbar() {
	return (
		<nav className={styles.menuContainer}>
			<h3>encanto das mãos</h3>

			<ul className={styles.listUl}>
				{links.map((link, index) => (
					<li key={index}>
						<Link href={link.url}>{link.name}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
