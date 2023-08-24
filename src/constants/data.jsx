import { RiDashboard2Line, RiPagesLine } from "react-icons/ri";
import { TbTableShortcut } from "react-icons/tb";
import { IoIosApps } from "react-icons/io";
import { SiAuthy } from "react-icons/si";

export const menuItems = [
  {
    title: "Dashboards",
    isSubmenu: true,
    isHide: true,
    icon: <RiDashboard2Line />,
    link: "home",
    child: [
      {
        childTitle: "Analytics",
        childLink: "analytics",
      },
      {
        childTitle: "CRM",
        childLinks: "crm",
      },
      {
        childTitle: "Ecommercer",
        childLinks: "ecommerce",
      },
      {
        childTitle: "Crypto",
        childLinks: "crypto",
      },
      {
        childTitle: "Projects",
        childLinks: "projects",
      },
      {
        childTitle: "NFT",
        childLinks: "nft",
      },
      {
        childTitle: "Job",
        childLinks: "job",
      },
    ],
  },
  {
    title: "Apps",
    isSubmenu: true,
    isHide: true,
    icon: <IoIosApps />,
    link: "apps",
    child: [
      {
        childTitle: "Calendar",
        childLink: "calendar",
      },
      {
        childTitle: "Chat",
        childLinks: "chat",
      },
      {
        childTitle: "Ecommercer",
        childLinks: "ecommerce",
      },
      {
        childTitle: "Email",
        childLinks: "email",
      },
      {
        childTitle: "Projects",
        childLinks: "projects",
      },
      {
        childTitle: "Task",
        childLinks: "task",
      },
      {
        childTitle: "To Do",
        childLinks: "todo",
      },
    ],
  },
  {
    title: "Authentication",
    isSubmenu: false,
    isHide: true,
    icon: <SiAuthy />,
    link: "/authentication",
  },
  {
    title: "Pages",
    isSubmenu: true,
    isHide: true,
    icon: <RiPagesLine />,
    link: "pages",
    child: [
      {
        childTitle: "Starter",
        childLink: "starter",
      },
      {
        childTitle: "Profile",
        childLinks: "profile",
      },
    ],
  },
  {
    title: "Tables",
    isSubmenu: false,
    isHide: true,
    icon: <TbTableShortcut />,
    link: "/tables",
  },
];
