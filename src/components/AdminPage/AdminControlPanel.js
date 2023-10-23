import React, {useEffect, useState} from "react";
import axios from "axios";
import {Card, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography,} from "@mui/material";
import ChallengeController from "./ChallengeController";

export default function AdminControlPanel() {
  const [LeaderboardData, setLeaderboardData] = useState([]);
  const [problemsSolved, setProblemsSolved] = useState();
  const [usersWithProblemsSolved, setUsersWithProblemsSolved] = useState();

  useEffect(() => {
    const apiLeaderboard = `${process.env.REACT_APP_BACKEND_URL}api/leaderboard/`;
    axios
      .get(apiLeaderboard)
      .then((response) => {
        setLeaderboardData(response.data);
        //console.log(LeaderboardData);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
        .get(`${process.env.REACT_APP_BACKEND_URL}api/submission/all`)
      .then((response) => {
        //console.log(response.data.submission_list);
        setProblemsSolved(response.data.submission_list);
        const users = new Set();
        response.data.submission_list.forEach((problem) => {
          users.add(problem.user.github_username);
        });

        setUsersWithProblemsSolved(users);
        //console.log(users);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setProblemsSolved]);

  const changeBonusPoints = (event, problem) => {
    const newBonusPoints = event.target?.value
    problem.bonus_points = newBonusPoints
    axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/submission/${problem.id}`, {"bonus_points": problem.bonus_points}, { headers: { Authorization: localStorage.getItem("token") } })
    .then((response) => {
        console.log(response)
        const problemsSolvedToUpdate = [...problemsSolved]
        const problemToUpdate = problemsSolvedToUpdate.find(item => item.id === problem.id)
        problemToUpdate.bonus_points = newBonusPoints
        setProblemsSolved(problemsSolvedToUpdate)
    })
    .catch((err) => console.error(err))
  }

  return (
    <>
      <ChallengeController />
      <Typography variant="h1" color="secondary.light">
        Users
      </Typography>
      <Stack spacing={8}>
        {usersWithProblemsSolved &&
          Array.from(usersWithProblemsSolved).map((user) => (
            <Card sx={{ backgroundColor: "secondary.dark", padding: 1 }}>
              <Typography variant="h4" color="primary.light">
                {user}
              </Typography>

              <Grid container marginTop={2} spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" color="#000000">
                    Problems
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" color="#000000">
                    Bonus Points
                  </Typography>
                </Grid>
                {problemsSolved.map((problem) => {
                  if (problem.user.github_username === user) {
                    return (
                      <>
                        <Grid item xs={12} md={6}>
                          <Typography variant="h5" color="secondary.light">
                            {problem.problem.name}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <FormControl>
                            <InputLabel id="bonus-points">
                              {problem.bonus_points}
                            </InputLabel>
                            <Select value={problem.bonus_points} label="bonus points" onChange={(event) => changeBonusPoints(event, problem)}>
                              <MenuItem value={-5}>-5</MenuItem>
                              <MenuItem value={-4}>-4</MenuItem>
                              <MenuItem value={-3}>-3</MenuItem>
                              <MenuItem value={-2}>-2</MenuItem>
                              <MenuItem value={-1}>-1</MenuItem>
                              <MenuItem value={0}>0</MenuItem>
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={3}>3</MenuItem>
                              <MenuItem value={4}>4</MenuItem>
                              <MenuItem value={5}>5</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <div style={{ borderStyle: "dashed" }} />
                        </Grid>
                      </>
                    );
                  }
                })}
              </Grid>
            </Card>
          ))}
      </Stack>
    </>
  );
}
