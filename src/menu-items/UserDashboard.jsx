// assets
import {
  SearchOutlined,
  HomeOutlined,
  FileTextOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import franchiseList from "../assets/images/users/franchise-list.svg";
import Home from "../assets/images/users/home.svg";
import salesLead from "../assets/images/users/sales-lead.svg";
import searchDirectory from "../assets/images/users/search-directory.svg";

const franchiseListIcon = () => (
  <img src={franchiseList} alt="Dashboard" style={{ width: 20, height: 20 }} />
);
const HomeIcon = () => (
  <img src={Home} alt="Dashboard" style={{ width: 20, height: 20 }} />
);
const salesLeadIcon = () => (
  <img src={salesLead} alt="Dashboard" style={{ width: 20, height: 20 }} />
);

const searchDirectoryIcon = () => (
  <img
    src={searchDirectory}
    alt="Dashboard"
    style={{ width: 20, height: 20 }}
  />
);

// icons
const icons = {
  SearchOutlined,
  HomeOutlined,
  FileTextOutlined,
  FilterOutlined,
  franchiseList: franchiseListIcon,
  Home: HomeIcon,
  salesLead: salesLeadIcon,
  searchDirectory: searchDirectoryIcon,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const userdashboard = {
  id: "group-dashboard",
  title: "Navigation",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Home",
      type: "item",
      url: "/",
      icon: icons.Home,
      breadcrumbs: false,
    },
    {
      id: "search-directory",
      title: "Search Directory",
      type: "item",
      url: "#",
      icon: icons.searchDirectory,
      breadcrumbs: false,
    },
    {
      id: "franchise-listing",
      title: "Franchise Listing",
      type: "item",
      url: "#",
      icon: icons.franchiseList,
      breadcrumbs: false,
    },
    {
      id: "sales-lead",
      title: "Sales Lead",
      type: "item",
      url: "#",
      icon: icons.salesLead,
      breadcrumbs: false,
    },
  ],
};

export default userdashboard;
