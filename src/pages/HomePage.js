import React, { useEffect } from "react";

import { Box, Grid, Stack, Typography } from "@mui/material";

import TypewriterEffect from "react-typewriter-effect";

import PcIcon from "../images/icons/05@2x.png";
import BranchIcon from "../images/icons/08@2x.png";
import cornicetta from "../images/background/cornice.svg";
import { theme } from "../theme/customTheme";

export default function HomePage() {
  const schedule = [
    "8:00 - 9:00 -> Welcome & Greetings",
    "9:00 - 13:00 -> Start with the Hackathon",
    "13:00 - 14:30 -> Lunchtime",
    "14:30 - 18:00 -> End of the Hackathon",
    "18:00 - ... -> Enjoy",
  ];

  return (
    <Stack paddingTop={5} minHeight={500} spacing={10}>
      <Box display="flex" gap={2} minHeight={400}>
        <Box component="img" width="auto" height="100%" src={PcIcon} />
        <Box>
          <TypewriterEffect
            textStyle={{
              fontWeight: 800,
              fontSize: 90,
              color: "#ad832d",
            }}
            startDelay={100}
            multiText={["HELLO WORLD!", "Sorry... HELLO EVERYONE!"]}
            multiTextDelay={800}
            typeSpeed={80}
            hideCursorAfterText={true}
          />
        </Box>
      </Box>
      <div
        style={{
          backgroundImage: `url(${cornicetta})`,
          height: "30px",
        }}
      />
      <Grid container>
        <Grid item xs={12} md={7}>
          <Box height={100}>
            <TypewriterEffect
              textStyle={{
                fontWeight: 500,
                fontSize: 70,
                color: "#655f67",
              }}
              startDelay={100}
              text="TODO List:"
              typeSpeed={80}
              hideCursorAfterText={true}
            />
          </Box>
          <Stack marginTop={3} spacing={3}>
            {schedule.map((item) => (
              <Box display="flex" alignItems="center" gap={3}>
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
        <Grid item xs={12} md={5}>
          <Box component="img" src={BranchIcon} />
        </Grid>
      </Grid>
    </Stack>
  );
}
