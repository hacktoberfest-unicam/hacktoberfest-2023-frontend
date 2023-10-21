import React, { useEffect, useState } from "react";
import AdminPage from "../pages/AdminPage";
import UserInfo from "../components/UserPage/UserInfo";
import axios from "axios";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

import TypewriterEffect from "react-typewriter-effect";


export default function UserPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();

  const [loaded, setLoaded] = useState();

  // Funzione per impostare isAdmin su true se l'utente è un amministratore
  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoaded(false);
    if (!token) {
      const authorization = Cookies.get("authorization");
      if (authorization) {
        localStorage.setItem("token", authorization);
        Cookies.remove("authorization");
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}api/user/0`, {
            headers: { Authorization: `${authorization}` },
          })
          .then((response) => {
            setIsAdmin(response.data.is_staff);
            setIsAuthenticated(true);
            setUser(response.data);
          })
          .catch((err) => {
            console.error(err);
            setIsAuthenticated(false);
          });
      }
    } else {
      setIsAuthenticated(true);
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}api/user/0`, {
          headers: { Authorization: `${token}` },
        })
        .then((response) => {
          setIsAdmin(response.data.is_staff);
          setIsAuthenticated(true);
          setUser(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.error(err);
          setIsAuthenticated(false);
        });
    }
    setLoaded(true);
  }, []);

  return (
    <div>
      {!loaded && (
        <TypewriterEffect
          textStyle={{
            fontSize: 16,
            fontWeight: 400,
            color: "rgb(239, 237, 239)",
          }}
          startDelay={0}
          text={"Loading /usr/lib/profile..."}
          typeSpeed={60}
          hideCursorAfterText={false}
        />
      )}
      {loaded && isAuthenticated && isAdmin && user && (
        <AdminPage user={user} />
      )}
      {loaded && isAuthenticated && user && !isAdmin && <UserInfo user={user} />}
      {loaded && !isAuthenticated && <Navigate to="/" />}
    </div>
  );
}
