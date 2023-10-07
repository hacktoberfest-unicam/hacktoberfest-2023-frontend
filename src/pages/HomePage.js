import React from "react";

import { Box, Typography } from "@mui/material";

import TypewriterEffect from "react-typewriter-effect";

import Icon from "../images/icons/05@2x.png";

export default function HomePage() {
  return (
    <Box display="flex" gap={2} paddingTop={5} minHeight={400}>
      <Box component="img" src={Icon} />
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
  );
}
