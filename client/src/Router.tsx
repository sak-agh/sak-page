import React, { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import * as routes from './routes';
import Sidebar from './components/Sidebar/Sidebar';

const LOGIN_PATH = routes.login();
const DASHBOARD_PATH = routes.dashboard();
const TEAM_PATH = routes.team();
const PROJECTS_PATH = routes.projects();
const CALENDAR_PATH = routes.calendar();
const DOCUMENTS_PATH = routes.documents();
const REPORTS_PATH = routes.reports();

const Login = lazy(() => import('./pages/admin/Login'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const Team = lazy(() => import('./pages/admin/Team'));
const Projects = lazy(() => import('./pages/admin/Projects'));
const Calendar = lazy(() => import('./pages/admin/Calendar'));
const Documents = lazy(() => import('./pages/admin/Documents'));
const Reports = lazy(() => import('./pages/admin/Reports'));

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path={ LOGIN_PATH } element={ <Login/> }/>
        <Route path="/" element={ <Sidebar/> }>
          <Route path={ DASHBOARD_PATH } element={ <Dashboard/> }/>
          <Route path={ TEAM_PATH } element={ <Team/> }/>
          <Route path={ PROJECTS_PATH } element={ <Projects/> }/>
          <Route path={ CALENDAR_PATH } element={ <Calendar/> }/>
          <Route path={ DOCUMENTS_PATH } element={ <Documents/> }/>
          <Route path={ REPORTS_PATH } element={ <Reports/> }/>
        </Route>
      </>
    )
  );

  return <RouterProvider router={ router }/>;
};

export default Router;
