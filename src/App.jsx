import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import EmployeesHome from './pages/EmployeesHome.jsx';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFoundPage from './pages/NotFoundPage';
import EmployeeDetail from './pages/EmployeeDetail';
import { UserProvider } from './containers/UserContext';
import ProtectedRoute from './containers/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <EmployeesHome />
      </ProtectedRoute>
    ),
    errorElement: <NotFoundPage />,
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/empleado/:employeeId', element: <EmployeeDetail /> },
]);

function App() {
  return (
    <>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </>
  );
}

export default App;
