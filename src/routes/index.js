import { useRoutes } from "react-router-dom"
import Layout from "../components/Layout"
import { AdminPage, Homepage, LoginPage, UserPage } from "./element"

export default function Router() {
  return useRoutes([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Homepage />
            },
            {
                path: 'profile',
                element: <UserPage />
            },
            {
                path: 'admin',
                element: <AdminPage />
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    }
  ])
}
