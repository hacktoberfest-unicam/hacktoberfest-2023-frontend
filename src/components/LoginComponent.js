import { Box, Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import TypewriterEffect from "react-typewriter-effect";

export default function LoginComponent() {
  const [githubState, setGithubState] = useState();

  useEffect(() => {
    const apiLeaderboard = `${process.env.REACT_APP_BACKEND_URL}api/login/state`;
    axios
      .get(apiLeaderboard)
      .then((response) => {
        setGithubState(response.data.state);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Stack justifyContent="center">
      <Box minHeight={92}>
        <TypewriterEffect
          textStyle={{
            fontWeight: 500,
            fontSize: 70,
            color: "#ad832d",
            textAlign: "center",
          }}
          startDelay={100}
          text="Let's Hack!"
          typeSpeed={50}
          hideCursorAfterText={true}
        />
      </Box>
      {githubState ? (
        <Button
          href={`https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_BACKEND_URL}api/login&state=${githubState}`}
          bgcolor="primary.dark"
          sx={{ width: 231, marginX: "auto" }}
        >
          <Box display="flex" alignItems="center" gap={2} padding={1}>
            <FeatherIcon icon="github" width={40} height={40} />
            <Typography fontSize={20}>Sign in</Typography>
          </Box>
        </Button>
      ) : (
        <TypewriterEffect
          textStyle={{
            fontWeight: 800,
            fontSize: 24,
            color: "red",
          }}
          startDelay={0}
          multiText={[">> loading..."]}
          multiTextDelay={800}
          typeSpeed={60}
        ></TypewriterEffect>
      )}
    </Stack>
  );
}
