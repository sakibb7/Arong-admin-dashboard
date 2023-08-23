import { AiOutlineDashboard } from "react-icons/ai";

export const menuItems = [
  {
    title: "Dashboards",
    isSubmenu: true,
    isHide: true,
    icon: <AiOutlineDashboard />,
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
];
