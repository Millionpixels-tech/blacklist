
import Logins from '../Auth/Signin';
import RegisterSimple from '../Auth/RegisterSimple';

export const authRoutes = [
  { path: `${process.env.PUBLIC_URL}/login`, Component: <Logins /> },
  { path: `${process.env.PUBLIC_URL}/pages/authentication/register-simple`, Component: <RegisterSimple /> },
];
