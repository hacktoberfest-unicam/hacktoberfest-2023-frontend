import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Cookies from "js-cookie";

export default function ChallengeController() {

  const [userData, setUserData] = useState()
  const [problemsData, setProblemsData] = useState()

  useEffect(() => {
      const apiUsers = `${process.env.REACT_APP_BACKEND_URL}api/user/all`;
      axios.get(apiUsers
            ).then((response) => {
              setUserData(response.data)
          })
          .catch((error) => {
              console.error("Zio pera")
          });
  }, []);  

  useEffect(() => {
    const apiProblems = `${process.env.REACT_APP_BACKEND_URL}api/problem/all`;
    axios.get(apiProblems
        ).then((response) => {
            setProblemsData(response.data)
        })
        .catch((error) => {
            console.error("Zio pera")
        });
  }, []);  

  let users_nickname, problems_name
  if(userData && problemsData){
    users_nickname = userData.user_list.map((item) => item.github_username)
    problems_name = problemsData.problem_list.map((item) => item.name)
  }

  const [selectedUser, setSelectedUser] = React.useState('');
  const [selectedProblem, setSelectedProblem] = React.useState('');

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleProblemChange = (event) => {
    setSelectedProblem(event.target.value);
  };

  const handleChange = (event) => {
    const problemFound = problemsData.problem_list.find(problem => problem.name === selectedProblem)
    console.log(problemFound)
    const userFound = userData.user_list.find(user => user.github_username === selectedUser)
    console.log(userFound)
    const token = localStorage.getItem("token");
    const apiSubmitProblem = `${process.env.REACT_APP_BACKEND_URL}api/submission/add`;
    Cookies.remove("authorization");
    axios.post(apiSubmitProblem, {
        user: userFound,
        problem: problemFound, 
        bonus_points: 0,
        },{
            headers: { Authorization: `${token}` },
        }).then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.error(error)
        }); 
  };

  return (
    <>
        <FormControl sx={{ m: 4, minWidth: 350, backgroundColor: "initial", border: "2px solid rgb(210, 184, 99)" }}>
            <InputLabel sx={{color: "#FFF" }} id="demo-simple-select-label">Username</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedUser}
                label="Users"
                sx={{color: "#FFF" }}
                onChange={handleUserChange}
            >
                {users_nickname?.map((name, index) => (
                    <MenuItem key={index} value={name}>
                    {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        <FormControl sx={{ m: 4, minWidth: 350, backgroundColor: "initial", border: "2px solid rgb(210, 184, 99)" }} >
            <InputLabel sx={{color: "#FFF" }} id="demo-simple-select-label">Problems</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedProblem}
                label="Problems"
                sx={{color: "#FFF" }}
                onChange={handleProblemChange}
            >
                {problems_name?.map((name, index) => (
                    <MenuItem key={index} value={name}>
                    {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        <Button 
            variant="outlined" 
            size="large" 
            sx={{ m: 4, minWidth: 350, backgroundColor: "initial", border: "2px solid rgb(210, 184, 99)", minHeight: "1.4375em" }} 
            onClick={handleChange}
        >
            Apply
        </Button>
    </>
  )
}
