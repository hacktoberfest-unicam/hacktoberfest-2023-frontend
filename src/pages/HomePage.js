import React, { useState } from "react";

import { Box, Button, Grid, Stack, Typography } from "@mui/material";

import TypewriterEffect from "react-typewriter-effect";

import PcIcon from "../images/icons/05@2x.png";
import BranchIcon from "../images/icons/03@2x.png";
import cornicetta from "../images/background/cornice.svg";
import { theme } from "../theme/customTheme";
import LoginComponent from "../components/LoginComponent";

export default function HomePage() {
  const [isLogged, setIsLogged] = useState(false);

  const schedule = [
    "9:00 - 10:00 -> Welcome & Greetings",
    "10:00 - 12:00 -> Introduction",
    "12:00 - 14:00 -> Lunchtime",
    "14:00 - 18:30 -> Start Hackathon",
    "18:30 - 19:00 -> Closing Hackathon",
    "19:00 - 19:30 -> Award ceremony",
    "19:30 - ... -> Enjoy",
  ];

  return (
    <Stack paddingTop={5} minHeight={500} spacing={10}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Box component="img" width="auto" height="100%" src={PcIcon} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box>
            <TypewriterEffect
              textStyle={{
                fontWeight: 800,
                fontSize: 90,
                color: "#ad832d",
              }}
              startDelay={100}
              multiText={["HELLO WORLD!", "Sorry...", "HELLO EVERYONE!"]}
              multiTextDelay={500}
              typeSpeed={50}
              hideCursorAfterText={true}
            />
          </Box>
        </Grid>
      </Grid>
      <div
        style={{
          backgroundImage: `url(${cornicetta})`,
          height: "30px",
        }}
      />
      <Grid container alignItems="center">
        <Grid item xs={12} lg={7}>
          <Box minHeight={100}>
            <TypewriterEffect
              textStyle={{
                fontWeight: 500,
                fontSize: 70,
                color: "#efedef",
              }}
              startDelay={100}
              text="TODO List:"
              typeSpeed={80}
              hideCursorAfterText={true}
            />
          </Box>
          <Stack marginTop={3} spacing={3}>
            {schedule.map((item) => (
              <Box key={item} display="flex" alignItems="center" gap={3}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 5,
                    backgroundColor: theme.palette.primary.contrastText,
                  }}
                />
                <Typography variant="h5" color="primary.main">
                  {item}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Box component="img" src={BranchIcon} />
        </Grid>
      </Grid>
      <div
        style={{
          backgroundImage: `url(${cornicetta})`,
          height: "30px",
        }}
      />
      <Box display="flex" justifyContent="center" paddingY={5}>
        {isLogged ? (
          <Button
            href="https://github.com/hacktoberfest-unicam/awesome-hacktoberfest-beryllium-bear"
            target="blank"
            sx={{ minHeight: 123 }}
          >
            <TypewriterEffect
              textStyle={{
                fontWeight: 500,
                fontSize: 70,
                color: "#ad832d",
                textAlign: "center",
              }}
              startDelay={100}
              text="Click here to start..."
              typeSpeed={80}
              hideCursorAfterText={true}
            />
          </Button>
        ) : (
          <LoginComponent />
        )}
      </Box>
    </Stack>
  );
}
