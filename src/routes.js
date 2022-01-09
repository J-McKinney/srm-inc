import Home from "views/Home.js";
import Information from "views/Information.js";
import Maps from "views/Maps.js";
import UserPage from "views/UserPage.js";

var dashRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "ui-1_bell-53",
    component: Home,
    layout: "/srm-inc",
  },
  {
    path: "/information",
    name: "information",
    icon: "design_app",
    component: Information,
    layout: "/srm-inc",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "location_map-big",
    component: Maps,
    layout: "/srm-inc",
  },
  {
    path: "/travel-form",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/srm-inc",
  },
];
export default dashRoutes;
