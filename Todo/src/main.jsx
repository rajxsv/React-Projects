import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import CardApp from './Card.jsx'
import Hooks from './Hooks.jsx'


import './index.css'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "ExampleRoute",
    element : <h1>This is Example Route </h1>
  },
  {
    path: "cardApp",
    element: <CardApp />
  },
  {
    path:"hooks",
    element: <Hooks />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
