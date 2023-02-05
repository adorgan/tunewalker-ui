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
import Admin from './components/admin/Admin';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BlogpostList />,
      },
      {
        path: "/blogposts",
        element: <BlogpostList />,
      },
      {
        path: "/blogpost/:id",
        element: <BlogDetail />,
      },

    ]
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: "/admin",
        element: <ProtectedRoute><BlogpostList /></ProtectedRoute>,
      },
      {
        path: '/admin/login',
        element: <Login />
      },
      {
        path: '/admin/signup',
        element: <Signup />,
      },
      {
        path: "/admin/new-blogpost",
        element: <ProtectedRoute><NewBlogpost /></ProtectedRoute>,
      },
      {
        path: "/admin/blogpost/edit",
        element: <ProtectedRoute><EditBlogpost /></ProtectedRoute>,
      },
    ]

  },


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
