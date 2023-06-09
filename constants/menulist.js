import Box from "@assets/Icons/Box";
import CirclePlus from "@assets/Icons/CirclePlus";
import ShoppingCart from "@assets/Icons/ShoppingCart";
import SmartHome from "@assets/Icons/SmartHome";
import Star from "@assets/Icons/Star";

export const mainmenu = [
  {
    name: "dashboard",
    icon: <SmartHome />,
    route: "/admin/dashboard",
  },
  {
    name: "order management",
    icon: <ShoppingCart />,
    route: "/admin/order-management",
  },
  {
    name: "brand",
    icon: <Star />,
    route: "/admin/brand",
  },
];

export const productsmenu = [
  {
    name: "add products",
    icon: <CirclePlus />,
    route: "/admin/add-products",
  },
  {
    name: "product list",
    icon: <Box />,
    route: "/admin/product-list",
  },
];
