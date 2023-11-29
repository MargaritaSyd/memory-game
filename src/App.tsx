import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Memory from './components/Memory';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/memory",
    element: <Memory/>,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
