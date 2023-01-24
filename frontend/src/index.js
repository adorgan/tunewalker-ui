import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BlogpostList from './components/BlogpostList';
import NewBlogpost from './components/NewBlogpost';
import Blogpost from './components/Blogpost';
import ViewBlog from './components/ViewBlog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/blogposts",
        element: <BlogpostList />,
      },
      {
        path: "/new-blogpost",
        element: <NewBlogpost />,
      },
      {
        path: "/blog/:id",
        element: <ViewBlog />,
      }
    ],
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
