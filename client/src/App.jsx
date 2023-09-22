import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout,
  SignUpPage,
  SignInPage,
  DashboardLayout,
  Landing,
  Error,
} from './routes';

// IMPORTED ACTION
import { action as signUpAction } from './routes/SignUpPage';
import { action as signInAction } from './routes/SignInPage';

// IMPORTED LOADER
import { loader as landingLoader } from './routes/Landing';
import { loader as dashboardLoader } from './routes/DashboardLayout';

// DARK THEME CHECK
export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
      },
      {
        path: 'sign-up',
        element: <SignUpPage />,
        action: signUpAction,
      },
      {
        path: 'sign-in',
        element: <SignInPage />,
        action: signInAction,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: dashboardLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
