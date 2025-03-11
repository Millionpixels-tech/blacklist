
import Logins from '../Auth/Signin';
import RegisterSimple from '../Auth/RegisterSimple';
import ForgetPwd from '../Auth/ForgetPwd';
import PwdReset from '../Auth/PwdResetSuccess';

export const authRoutes = [
  { path: `${process.env.PUBLIC_URL}/login`, Component: <Logins /> },
  { path: `${process.env.PUBLIC_URL}/pages/authentication/register-simple`, Component: <RegisterSimple /> },
  { path: `${process.env.PUBLIC_URL}/pages/authentication/forget-pwd`, Component: <ForgetPwd /> },
  { path: `${process.env.PUBLIC_URL}/pages/authentication/password-reset-success`, Component: <PwdReset /> },
];
