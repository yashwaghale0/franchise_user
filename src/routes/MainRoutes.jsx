// src/routes/MainRoutes.js
import { lazy } from "react";
import Loadable from "components/Loadable";
import RoleBasedLayout from "layout/Auth/RoleBasedLayout";

// Layouts
// You can remove UserLayout if it's no longer needed in other routes.

// Pages
const DashboardDefault = Loadable(
  lazy(() => import("pages/dashboard/default"))
);

const DashboardUser = Loadable(
  lazy(() => import("pages/dashboard/userdashboard"))
);
// You can now remove the import for DashboardUser since it's not being used.

const Opportunities = Loadable(
  lazy(() => import("pages/component-overview/FranchiseOpportunities"))
);
const Typography = Loadable(
  lazy(() => import("pages/component-overview/typography"))
);
const Color = Loadable(lazy(() => import("pages/component-overview/color")));
const Shadow = Loadable(lazy(() => import("pages/component-overview/shadows")));
const SamplePage = Loadable(
  lazy(() => import("pages/extra-pages/sample-page"))
);

// Define route children
const MainRoutes = {
  path: "/",
  element: <RoleBasedLayout />, // This will now render a static layout for all users
  children: [
    {
      path: "/",
      element: <DashboardUser />, // All users land on the same dashboard
    },
    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: <DashboardUser />,
        },
      ],
    },
    {
      path: "FranchiseOpportunities",
      element: <Opportunities />,
    },
    {
      path: "typography",
      element: <Typography />,
    },
    {
      path: "color",
      element: <Color />,
    },
    {
      path: "shadow",
      element: <Shadow />,
    },
    {
      path: "sample-page",
      element: <SamplePage />,
    },
  ],
};

export default MainRoutes;
