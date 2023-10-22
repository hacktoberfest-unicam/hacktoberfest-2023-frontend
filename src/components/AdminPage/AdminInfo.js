import { Box, Grid, Avatar } from "@mui/material";
import TypewriterEffect from "react-typewriter-effect";

export default function AdminInfo({ user }) {

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={4}>
        <Avatar
          alt="profile pic"
          src={user.github_profile_picture}
          sx={{ width: 300, height: 300 }}
        />
      </Grid>
      <Grid item xs={6} md={8}>
        <Box alignContent={"center"}>
          <TypewriterEffect
            textStyle={{
              fontWeight: 500,
              fontSize: 45,
              color: "#efedef",
            }}
            startDelay={100}
            text={"Hello God "}
            typeSpeed={80}
            hideCursorAfterText={true}
          />
          <TypewriterEffect
            textStyle={{
              fontWeight: 800,
              fontSize: 90,
              color: "#d2b863",
            }}
            startDelay={600}
            text={user.github_username}
            typeSpeed={80}
            hideCursorAfterText={true}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
