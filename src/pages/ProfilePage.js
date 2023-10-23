import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import UserInfo from "../components/UserPage/UserInfo";

export default function ProfilePage() {
  const [userData, setUserData] = useState();

  //const httpiegoUser = backendData.user_list.find(user => user.github_username === "HTTPiego");
  useEffect(() => {
    const apiLeaderboard = `${process.env.REACT_APP_BACKEND_URL}api/user/all`;
    /*const headers = {
            'Access-Control-Allow-Origin': '*',
        }*/
    axios
      .get(
        apiLeaderboard //, {
        //headers: headers,
        /*}*/
      )
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Zio pera");
      });
  }, []);

  const { nickname } = useParams();
  let user;
  if (userData) {
    const users = Object.values(userData);
    user = users[0].find((user) => user.github_username === nickname);
  }

  return <>{user && <UserInfo user={user} />}</>;
}
