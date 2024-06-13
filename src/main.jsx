import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
