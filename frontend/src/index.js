import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BlogpostList from './components/pages/home/BlogpostList';
import NewBlogpost from './components/admin/NewBlogpost';
import BlogDetail from './components/pages/blogDetail/BlogDetail';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ProtectedRoute from './components/auth/ProtectedRoute';
import './index.css'
import EditBlogpost from './components/admin/EditBlogpost';


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><App /></ProtectedRoute>,
    children: [
      {
        path: "/",
        element: <ProtectedRoute><BlogpostList /></ProtectedRoute>,
      },
      {
        path: "/blogposts",
        element: <ProtectedRoute><BlogpostList /></ProtectedRoute>,
      },
      {
        path: "/new-blogpost",
        element: <ProtectedRoute><NewBlogpost /></ProtectedRoute>,
      },
      {
        path: "/blogpost/edit",
        element: <ProtectedRoute><EditBlogpost /></ProtectedRoute>,
      },
      {
        path: "/blogpost/:id",
        element: <ProtectedRoute><BlogDetail /></ProtectedRoute>,
      }
    ],
  },
  {
    path: '/admin',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
