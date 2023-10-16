import { Box, Button, Stack, Typography } from "@mui/material";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";

import TypewriterEffect from "react-typewriter-effect";


export default function LoginComponent() {
  return (
    <Stack justifyContent="center">
      <Box minHeight={92} >
        <TypewriterEffect
          textStyle={{
            fontWeight: 500,
            fontSize: 70,
            color: "#ad832d",
            textAlign: "center"
          }}
          startDelay={100}
          text="Let's Hack!"
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
  );
}
