"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

const Nav = ({ items }: { items: { value: string; label: string }[] }) => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex flex-col md:flex-row">
        {items.map(({ value, label }) => (
          <li key={value} className="p-1">
            <Link
              href={value}
              className={`hover:text-gray-300 ${
                pathname === value ? "text-gray-200 font-bold" : ""
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
