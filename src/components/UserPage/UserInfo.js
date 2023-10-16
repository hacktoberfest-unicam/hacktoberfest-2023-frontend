import { Box, Typography, Container, Grid, Avatar} from "@mui/material";
import RankingTable from '../components/UserPage/ChallengeTable';

export default function UserInfo( {user} ){
    return (
        <>
          <Container fixed sx={{overflowY:'auto', marginBottom: 20}} >
            <Grid container spacing={2}>
              <Grid item xs={6} md={4}>
                <Avatar alt="profile pic" src={user.avatar} sx={{ width: 300, height: 300 }}/>
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
                    multiText = {["Hello "+ user.nickname]}
                    multiTextDelay={800}
                    typeSpeed={80}
                    hideCursorAfterText={true}
                  />
                </Box>
                <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                flexDirection: 'column', // Center the content vertically
                gap: 2, 
                backgroundColor: 'white', 
                opacity: 0.8,
                padding: 2, 
                borderRadius: 8, // Rounded corners
                textAlign: 'center' // Center text horizontally
                }}>
                    <Typography variant="h6">Points Earned: {user.points}</Typography>
                    <Typography variant="h6">Ranking: {user.rank}</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
          <RankingTable></RankingTable>
        </>
    )
}