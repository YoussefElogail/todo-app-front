import { links } from "@/routes/links";
import Link from "next/link";
import React from "react";

const Header = () => {
  const navLinks = [
    {
      name: "home",
      path: links.home,
    },
    {
      name: "todos",
      path: links.todos,
    },
    {
      name: "profile",
      path: links.profile,
    },
    {
      name: "login",
      path: links.login,
    },
    {
      name: "register",
      path: links.register,
    },
  ];
  const renderLinks = navLinks.map((link) => (
    <Link
      href={link.path}
      key={link.path}
      className="capitalize hover:text-green-500"
    >
      {link.name}
    </Link>
  ));
  return (
    <header className="bg-white py-6">
      <nav className="container mx-auto">
        <ul className="flex gap-4">{renderLinks}</ul>
      </nav>
    </header>
  );
};

export default Header;
