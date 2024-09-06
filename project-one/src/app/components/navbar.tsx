"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiAppsFill, RiCloseLine } from "react-icons/ri";

type Link = {
  name: string;
  url: string;
};

const links: Link[] = [
  { name: "sobre", url: "#sobre" },
  { name: "serviços", url: "#servicos" },
  { name: "detox", url: "#detox" },
  { name: "contato", url: "#contato" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-5">
      <Link href={"/"} className="font-title capitalize">
        encanto das mãos
      </Link>

      <ul className="hidden gap-4 md:flex md:items-center">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.url} className="link">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <MobileNavbar />
    </nav>
  );
}

export function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);
     const menuVariants = {
    open: { x: 0, opacity: 1, transition: { stiffness: 1000 } },
    closed: { x: '-100%', opacity: 0, transition: { stiffness: 1000 } },
    };
    
 
    return (
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-200 flex items-center text-black"
        >
          {isOpen ? <RiCloseLine size={25} /> : <RiAppsFill size={25} />}
        </button>

        <motion.nav
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 z-10 h-full w-64 bg-[var(--brown-color)] p-6 text-white"
        >
          <ul className="space-y-4">
            <h4 className="font-title text-xm pb-3 text-center capitalize">
              encanto das mãos
            </h4>
            {links.map((link, index) => (
              <li
                key={index}
              >
                <Link href={link.url} className="linkMobile">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-0 bg-black bg-opacity-50"
          />
        )}
      </div>
    );
}
