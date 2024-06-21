import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Button } from './components/ui/button';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import EmployeesHome from './pages/EmployeesHome.jsx';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFoundPage from './pages/NotFoundPage';
import EmployeeDetail from './pages/EmployeeDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <EmployeesHome />,
    errorElement: <NotFoundPage />,
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/empleado/:employeeId', element: <EmployeeDetail /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
