// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import TransactionsPage from "./pages/TransactionsPage";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },

      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/Transactions",
        element: <TransactionsPage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
