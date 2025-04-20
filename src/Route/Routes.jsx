import AddUserPage from "../pages/AddUserPage";
import AgencyEdit from "../Components/AgencyEdit";
import SearchPage from "../pages/SearchPage";
import AgencyProfile from "../pages/AgencyProfilePage";
import UsersEditContain from "../pages/UsersEdit";

export const routes = [
  { path: `${process.env.PUBLIC_URL}/search-user`, Component: <SearchPage /> },
  { path: `${process.env.PUBLIC_URL}/agency-profile`, Component: <AgencyProfile /> },
  { path: `${process.env.PUBLIC_URL}/add-person-to-blacklist`, Component: <AddUserPage /> },
  { path: `${process.env.PUBLIC_URL}/agency/edit`, Component: <AgencyEdit /> },
  { path: `${process.env.PUBLIC_URL}/blacklist-Person/edit/:id`, Component: <UsersEditContain /> }
];
