import { Box, Grid, Avatar } from '@mui/material'
import TypewriterEffect from "react-typewriter-effect";
import { users } from "../../mock/users.js" 

export default function AdminInfo({user}) {

  let usr = users.find(usermap => user === usermap.nickname);
  
  return (
    <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
            <Avatar alt="profile pic" src={usr.avatar} sx={{ width: 300, height: 300 }}/>
        </Grid>
        <Grid item xs={6} md={8}>
            <Box alignContent={"center"}>
            <TypewriterEffect
                textStyle={{
                fontWeight: 800,
                fontSize: 90,
                color: "#ad832d",
                }}
                startDelay={100}
                multiText = {["Hello God " + usr.nickname]}
                multiTextDelay={800}
                typeSpeed={80}
                hideCursorAfterText={true}
            />
            </Box>
        </Grid>
    </Grid>
  )
}
