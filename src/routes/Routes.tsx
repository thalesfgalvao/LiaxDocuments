import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PublicRoute from './PubliceRoute'

const Dashboard = React.lazy(() => import('../pages/Dashboard'))
const Admin = React.lazy(() => import('../pages/Admin'))
const Documents = React.lazy(() => import('../pages/Documents'))
const Valida = React.lazy(() => import('../pages/Valida'))

//attribute -  path : string - exact: boolean - route : component (wich router component will render the att component)
//at end, put the route in array "routes"

//root
const LoginRedirect = () => <Redirect to="/dashboard" />

const root = {
  path: '/',
  component: LoginRedirect,
  exact: true,
  route: Route
}

//dashboard
const dashboard = {
  path: '/dashboard',
  component: Dashboard,
  exact: false,
  route: PublicRoute
}

//Validação

const admin = {
  path: '/admin',
  component: Admin,
  exact: false,
  route: PublicRoute
}

//Interface Administrativa

const documents = {
  path: '/documents',
  component: Documents,
  exact: false,
  route: PublicRoute
}

const valida = {
  path: '/valida',
  component: Valida,
  exact: false,
  route: PublicRoute
}

const routes = [root, dashboard, admin, documents, valida]

export default routes
