import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftRight } from "@fortawesome/free-solid-svg-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import SearchContext from "@/context/SearchContext";
import { Link } from "react-router-dom";

const Navbar = ({ setShowSidebar }) => {
  const { dark, setDark } = useContext(SearchContext);
  return (
    <div
      className={`${
        dark ? "bg-slate-800 text-white" : "bg-white text-gray-600"
      } h-20 flex items-center px-4`}
    >
      <div className="sm:max-w-md sm:flex sm:gap-6">
        <div className="sm:hidden">
          <Menubar>
            <MenubarMenu>
              <Link to="/">
                <MenubarTrigger>Home</MenubarTrigger>
              </Link>
            </MenubarMenu>
            <MenubarMenu>
              <Link to="/research">
                <MenubarTrigger>Research</MenubarTrigger>
              </Link>
            </MenubarMenu>
            <MenubarMenu>
              <Link to="/planning">
                <MenubarTrigger>Planning</MenubarTrigger>
              </Link>
            </MenubarMenu>
            <MenubarMenu>
              <Link to="/designing">
                <MenubarTrigger>Designing</MenubarTrigger>
              </Link>
            </MenubarMenu>
            <MenubarMenu>
              <Link to="/manufacturing">
                <MenubarTrigger>Manufacturing</MenubarTrigger>
              </Link>
            </MenubarMenu>
            <MenubarMenu>
              <Link to="/sales">
                <MenubarTrigger>Sales</MenubarTrigger>
              </Link>
            </MenubarMenu>
          </Menubar>
        </div>
        <div className="hidden sm:block">
          <FontAwesomeIcon
            className="text-indigo-600 hover:bg-gray-200 cursor-pointer p-2"
            icon={faLeftRight}
            onClick={() => setShowSidebar((prev) => !prev)}
          />
        </div>
        <button
          className={`p-1 px-2 rounded hidden sm:block ${
            dark ? "bg-slate-600 text-white" : "bg-white text-black"
          }`}
          onClick={() => setDark((prev) => !prev)}
        >
          {dark ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
      <div className="sm:flex gap-4 ml-auto hidden ">
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
