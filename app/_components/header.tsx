"use client";
import { links } from "@/routes/links";
import Link from "next/link";
import React from "react";
import { useUser } from "../_contexts/UserContext";
import { Button } from "../components/ui/button";

const Header = () => {
  const { user, logout } = useUser();

  // اللنكات الأساسية دايمًا متاحة
  const commonLinks = [{ name: "home", path: links.home }];

  // اللنكات اللي بتظهر لما المستخدم داخل
  const authLinks = [
    { name: "todos", path: links.todos },
    { name: "profile", path: links.profile },
  ];

  // اللنكات اللي بتظهر لما المستخدم مش داخل
  const guestLinks = [
    { name: "login", path: links.login },
    { name: "register", path: links.register },
  ];

  const navLinks = user
    ? [...commonLinks, ...authLinks]
    : [...commonLinks, ...guestLinks];

  return (
    <header className="bg-white py-6 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-4">
        <ul className="flex gap-6 text-gray-700">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className="capitalize hover:text-green-600 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {user && (
          <Button className="cursor-pointer" onClick={logout}>
            Logout
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
