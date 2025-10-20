"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropddownMenu";
import { UserAvatar } from "./UserAvatar";

const DropdownOption = ({
  items,
  user,
}: {
  items: { value: string; label: string }[];
  user: { name: string; profile: string; email: string };
}) => {
  const pathname = usePathname();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="px-3 py-2">
          <UserAvatar name={user.name} profile={user.profile} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <UserAvatar
          name={user.name}
          profile={user.profile}
          email={user.email}
          dropdown={true}
        />
        <DropdownMenuSeparator className="md:hidden mt-2" />
        {items.map(({ value, label }) => (
          <DropdownMenuItem key={value} className="md:hidden">
            <Link href={value}>{label}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator className="md:hidden" />
        <DropdownMenuItem
          onSelect={() => alert("Logging out...")}
          className="text-red-600 hover:bg-red-100"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownOption;
