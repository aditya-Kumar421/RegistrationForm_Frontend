import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Form from './components/Form';
import SuccessPage from './components/SuccessPage';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


const App = () => {
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,
  },
  {
    path: "/success",
    element: <SuccessPage />,
  },
  ]);
  return (
    <RouterProvider router={router} />
  );
};

export default App;
