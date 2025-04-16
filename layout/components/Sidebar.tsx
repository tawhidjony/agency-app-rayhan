"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineArrowLeft } from "react-icons/md";
import { MenuList } from "../navItem";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: FC<SidebarProps> = ({ sidebarOpen }) => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const pathname = usePathname();

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div
      className={`${
        sidebarOpen ? "block" : "hidden"
      } sm:block sm:w-64 w-1/2 py-4`}
    >
      {/* Sidebar Header */}

      {/* Sidebar Links */}
      <ul>
        {MenuList.map((menu) => (
          <li key={menu.title} className="mb-2">
            {menu.children ? (
              <div>
                <button
                  className="flex items-center w-full py-2 px-4 hover:bg-gray-300 rounded"
                  onClick={() => toggleMenu(menu.title)}
                >
                  {menu.icon && <menu.icon size={20} />}
                  <span
                    className={`${
                      sidebarOpen ? "text-gray-700 ml-3" : "hidden"
                    } `}
                  >
                    {menu.title}
                  </span>
                </button>

                {/* Sub-menu */}
                {openMenus[menu.title] && (
                  <ul className="bg-gray-300">
                    {menu.children.map((sub) => (
                      <li key={sub.title} className="mb-1">
                        <Link
                          href={sub.path}
                          className={`flex items-center p-2 text-sm hover:bg-gray-300 rounded relative ${
                            pathname === menu.path
                              ? "bg-gray-300 text-gray-700 font-bold"
                              : "hover:bg-gray-300"
                          }`}
                        >
                          {/* Left Side Active Indicator for Sub-menu */}
                          {pathname === sub.path && (
                            <div className="absolute left-0 top-0 h-full w-1 bg-gray-500 rounded-r-md"></div>
                          )}
                          <span className="pl-6">{sub.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                href={menu.path}
                className={`flex items-center px-4 py-2 hover:bg-gray-300 rounded relative ${
                  pathname === menu.path
                    ? "bg-gray-300 text-gray-700 font-bold"
                    : "hover:bg-gray-300"
                }`}
              >
                {menu.icon && <menu.icon size={20} />}
                <span
                  className={`${sidebarOpen ? "text-gray-700 ml-3" : "hidden"}`}
                >
                  {menu.title}
                </span>
                {pathname === menu.path && (
                  <div className="absolute right-4 top-0 h-full w-2 rounded-l-md">
                    <MdOutlineArrowLeft size={40} style={{ color: "white" }} />
                  </div>
                )}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
