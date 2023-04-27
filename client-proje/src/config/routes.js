import { GeneralLayout } from "../Layouts/GeneralLayout";

import { SignIn } from "../pages/admin/SignIn";
import { AdminHome } from "../pages/admin/AdminHome";

import { Contact } from "../pages/general/Contact";
import { NotFound } from "../pages/general/NotFound/NotFound";
import { Home } from "../pages/general/Home";

const AdminRoutes = [
  { path: "/admin", component: AdminHome, layout: GeneralLayout },
  { path: "/admin/sign-in", component: SignIn, layout: GeneralLayout },
];

const GeneralRoutes = [
  { path: "/", component: Home, layout: GeneralLayout },
  { path: "/contact", component: Contact, layout: GeneralLayout },
  { path: "*", component: NotFound, layout: GeneralLayout },
];

const AllRoutesProject = [...AdminRoutes, ...GeneralRoutes];
export default AllRoutesProject;
