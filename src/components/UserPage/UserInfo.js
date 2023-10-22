import { Box, Typography, Container, Grid, Avatar } from "@mui/material";
import TypewriterEffect from "react-typewriter-effect";
import ChallengeTable from "./ChallengeTable";
import cornicetta from "../../images/background/cornice.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { theme } from "../../theme/customTheme";
import SVG from "./SVG";

export default function UserInfo({ user }) {
  const [leaderboard, setLeaderboard] = useState();
  //const [ranking, setRanking] = useState();
  //const [points, setPoints] = useState();
  const [problemsSolved, setProblemsSolved] = useState();

  const [isLoaded, setIsLoaded] = useState();

  useEffect(() => {
    setIsLoaded(false);
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}api/leaderboard/`)
      .then((response) => {
        setLeaderboard(response.data.leaderboard);
        /*const userFound = leaderboard?.find(
          (item) => item["user"]["github_username"] === user.github_username
        );
        setPoints(userFound?.score);
        setRanking(userFound?.position);*/
      })
      .catch((err) => console.error(err));

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}api/submission/all`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setProblemsSolved(response.data.submission_list);
      })
      .catch((err) => {
        console.error(err);
      });
    setIsLoaded(true);
  }, []);

  let points, ranking
  if(leaderboard){
    const userFound = leaderboard?.find((item) => item.user.id === user.id)
    points = userFound.score
    ranking = leaderboard.indexOf(userFound) + 1;
  }

  let userProblemSolved
  if(problemsSolved){
    userProblemSolved = problemsSolved?.filter((item) => item.user.id === user.id)
  }


  return (
    <>
      {!isLoaded && (
        <TypewriterEffect
          textStyle={{
            fontSize: 16,
            fontWeight: 400,
            color: "rgb(239, 237, 239)",
          }}
          startDelay={0}
          multiText={["Loading /usr/lib/profile..."]}
          typeSpeed={60}
          hideCursorAfterText={false}
        />
      )}
      {isLoaded && (
        <div>
          <Container fixed sx={{ overflowY: "auto", marginBottom: 20 }}>
            <Grid container spacing={2} sx={{ marginTop: "50px" }}>
              <Grid
                item
                xs={6}
                md={4}
                container
                justify="center"
                alignItems="center"
                textAlign="center"
              >
                <SVG />
                <Avatar
                  alt="profile pic"
                  variant="rounded"
                  src={user?.github_profile_picture}
                  sx={{
                    position: "absolute",
                    width: 200,
                    height: 200,
                    rotate: "15deg",
                    textAlign: "center",
                    display: "inline-block",
                  }}
                />
              </Grid>
              <Grid item xs={6} md={8}>
                <Box height={32}>
                  <TypewriterEffect
                    textStyle={{
                      fontWeight: 800,
                      fontSize: 24,
                      color: "red",
                    }}
                    startDelay={0}
                    multiText={[">> boot profile..."]}
                    multiTextDelay={800}
                    typeSpeed={60}
                    hideCursorAfterText={true}
                  ></TypewriterEffect>
                </Box>
                <Box alignContent={"center"} height={180} paddingTop={4}>
                  <TypewriterEffect
                    textStyle={{
                      fontWeight: 500,
                      fontSize: 45,
                      color: "#efedef",
                    }}
                    startDelay={1500}
                    text={"hello"}
                    // multiTextDelay={1000}
                    typeSpeed={100}
                    hideCursorAfterText={true}
                  />
                  <TypewriterEffect
                    textStyle={{
                      fontWeight: 800,
                      fontSize: 90,
                      color: "#d2b863",
                    }}
                    startDelay={2000}
                    text={user?.github_username}
                    // multiTextDelay={1000}
                    typeSpeed={100}
                    hideCursorAfterText={true}
                  />
                </Box>

                <Box
                  sx={{
                    marginTop: "30px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column", // Center the content vertically
                    gap: 2,
                    backgroundColor: "white",
                    opacity: 0.8,
                    padding: 2,
                    borderRadius: 8, // Rounded corners
                    textAlign: "center", // Center text horizontally
                  }}
                >
                  {/* <Typography variant="h4">{`${user?.github_username}`}</Typography> */}
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Points Earned:{" "}
                        <span style={{ color: theme.palette.primary.dark }}>
                          {points}
                        </span>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Ranking:{" "}
                        <span style={{ color: theme.palette.primary.dark }}>
                          {ranking}
                        </span>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>

          <div
            style={{
              backgroundImage: `url(${cornicetta})`,
              height: "30px",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          />

          <Container>
            {userProblemSolved && <ChallengeTable problems={userProblemSolved} />}
          </Container>
        </div>
      )}
    </>
  );
}
