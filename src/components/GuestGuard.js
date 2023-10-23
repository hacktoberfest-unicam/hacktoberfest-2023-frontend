import { PATH_PAGES } from "../routes/path";
import PropTypes from "prop-types"

import { Navigate } from "react-router-dom";

GuestGuard.prototypes = {
    children: PropTypes.node
}

export default function GuestGuard({ children }) {

    const token = localStorage.getItem('token')
    console.log(token)

    if (token) {
        return <Navigate to={PATH_PAGES.profile} />
    }

    return <>{children}</>
}