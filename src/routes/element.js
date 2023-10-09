import { Suspense, lazy } from "react";
import LoadingPage from "../pages/LoadingPage";

const Loadable = (Component) => (props) => (
    <Suspense fallback={<LoadingPage />}>
        <Component {...props} />
    </Suspense>
)

export const Homepage = Loadable(lazy(() => import("../pages/HomePage")))
export const LoginPage = Loadable(lazy(() => import("../pages/LoginPage")))
export const UserPage = Loadable(lazy(() => import("../pages/UserPage")))
export const AdminPage = Loadable(lazy(() => import("../pages/AdminPage")))
export const RankingPage = Loadable(lazy(() => import("../pages/RankingPage")))