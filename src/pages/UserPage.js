import React from 'react';
import { Box, Typography, Container, Grid, Avatar, TextField, LinearProgress } from "@mui/material";
import TypewriterEffect from "react-typewriter-effect";
import RankingTable from '../components/UserPage/ChallengeTable';

import profil2 from "../images/profile_pic/satoru-gojo.jpg";
function userInfo(
  FirstName,
  LastName,
  NickName,
  Image,
  Points,
  Position
){
  return {FirstName,LastName,NickName,Image, Points, Position}
}

const temProfiles = [
userInfo("Gojo","Satoru","Six Eyes", profil2, 4508, 1)
];
var profilo = 0;

export default function UserPage() {
  return (
    <div>
      <Container fixed sx={{overflowY:'auto', marginBottom: 20}} >
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Avatar alt="profile pic" src={temProfiles[profilo].Image} sx={{ width: 300, height: 300 }}/>
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
                multiText = {["Hello "+ temProfiles[profilo].NickName]}
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
            <Typography variant="h3">{`${temProfiles[0].FirstName} ${temProfiles[0].LastName}`}</Typography>
            <Typography variant="h6">Points Earned: {temProfiles[0].Points}</Typography>
            <Typography variant="h6">Ranking: {temProfiles[0].Position}</Typography>
          </Box>
          </Grid>
        </Grid>
      </Container>

      <RankingTable></RankingTable>
    </div>
    
    
  )
}
