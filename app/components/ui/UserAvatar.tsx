import * as Avatar from "@radix-ui/react-avatar";
import React from "react";
export const UserAvatar = ({
  profile = "",
  email = "",
  dropdown = false,
  name,
}: {
  profile?: string;
  email?: string;
  dropdown?: boolean;
  name: string;
}) => {
  return (
    <div className="flex justify-center items-center">
      <Avatar.Root
        className={`inline-flex items-center justify-center overflow-hidden w-10 h-10 rounded-full bg-gray-200 ${
          dropdown && "sm:hidden"
        }`}
      >
        <Avatar.Image
          className="w-full h-full object-cover"
          src={profile}
          alt={name}
        />
        <Avatar.Fallback
          className="w-full h-full flex items-center justify-center text-sm font-medium text-gray-600"
          delayMs={600}
        >
          {name.charAt(0)?.toUpperCase() || "A"}
        </Avatar.Fallback>
      </Avatar.Root>
      <div className="flex flex-col">
        <p
          className={`text-sm ms-1 font-bold ${dropdown || "hidden  md:block"}`}
        >
          {name}
        </p>
        {email && <p className="text-sm ms-1">{email}</p>}
      </div>
    </div>
  );
};
