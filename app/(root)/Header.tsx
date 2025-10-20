import Nav from "@/components/ui/Nav";
import DropdownOption from "../components/ui/DropdownOption";

const Header = () => {
  const items = [
    { value: "/", label: "Dashboard" },
    { value: "/search", label: "Search" },
    { value: "/watchlist", label: "Watchlist" },
  ];
  const user = {
    name: "User Name",
    profile: "https://i.pravatar.cc/100",
    email: "user@stockify.com",
  };
  return (
    <header className="sticky top-0 flex w-full p-2 border-b border-gray-800">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-1/3 p-4">
            <h1 className="text-2xl font-semibold sm:text-3xl">Stockify</h1>
          </div>
          <div className="w-1/3 p-4 hidden justify-center items-center md:flex">
            <Nav items={items} />
          </div>
          <div className="w-1/3 p-4 flex justify-end items-center">
            <DropdownOption items={items} user={user} />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
