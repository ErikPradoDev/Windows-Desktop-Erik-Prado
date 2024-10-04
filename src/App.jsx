import './styles/components/app.sass'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";

import Home from './pages/Home'
import WindowsScreen from './pages/WindowsScreen'
import ErrorPage from './pages/ErrorPage'



const Dashboard = () =>{
    return(
    <div>
      <Outlet />
    </div>
    )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
    {
      path:"/",
      element: <Home />,
    },
  ]
  },
  {
    path: "/windows",
    element: <Dashboard />,
    children: [
    {
      path: "/windows",
      element: <WindowsScreen />,
    },
  ]
  },
  {
    path: "*",
    element: <Dashboard />,
    children: [
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]
  },
])

function App() {

  return (
      <div>
        <RouterProvider router={router} />

      </div>
  )
}

export default App
