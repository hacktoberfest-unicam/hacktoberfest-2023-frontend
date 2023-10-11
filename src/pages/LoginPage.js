import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

import TypewriterEffect from "react-typewriter-effect";

import Icon from "../images/icons/08@2x.png";

import FeatherIcon from "feather-icons-react";

export default function LoginPage() {
  return (
    <Box display="flex" gap={2} justifyContent="center" alignItems="center">
      <Box component="img" width="auto" height={300} src={Icon} />
      <Stack justifyContent="center">
        <Box height={92}>
          <TypewriterEffect
            textStyle={{
              fontWeight: 500,
              fontSize: 70,
              color: "#ad832d",
            }}
            startDelay={100}
            text="Let's Hack!"
            multiTextDelay={500}
            typeSpeed={50}
            hideCursorAfterText={true}
          />
        </Box>
        <Button bgcolor="primary.dark" sx={{ width: 231, marginX: "auto" }}>
          <Box display="flex" alignItems="center" gap={2} padding={1}>
            <FeatherIcon icon="github" width={40} height={40} />
            <Typography fontSize={20}>Sign in</Typography>
          </Box>
        </Button>
      </Stack>
    </Box>
  );
}
