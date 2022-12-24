import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider } from 'react-router-dom';
import App from './App';

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={ <App/> }/>
        <Route path="admin" element={
          <div>
            <Link to="/">Home</Link>
          </div>
        }/>
      </>
    )
  );

  return <RouterProvider router={ router }/>;
};

export default Router;
