import { FaUserShield } from "react-icons/fa";
import { MenuTypeProps } from "./types/menu.type";

export const applicants:MenuTypeProps =   {
    title: "Applicants",
    path: "#",
    icon: FaUserShield,
    children: [
      {
        title: "Applicants list",
        path: "/applicants",
        onClick: () => {},
      },
      {
        title: "Agents",
        path: "/applicants/agents",
        onClick: () => {},
      },
      {
        title: "Counselor",
        path: "/applicants/counselor",
        onClick: () => {},
      },
      {
        title: "Reports",
        path: "/applicants/reports",
        onClick: () => {},
      },
    ],
  }