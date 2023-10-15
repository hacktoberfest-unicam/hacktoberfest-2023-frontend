import  React, { useState } from 'react';
import { Box, Typography, Container, Grid, Avatar} from "@mui/material";
import TypewriterEffect from "react-typewriter-effect";
import RankingTable from '../components/UserPage/ChallengeTable';
import AdminPage from '../pages/AdminPage'
// import { users } from "../mock/users.js" 
import profil2 from "../images/profile_pic/satoru-gojo.jpg";
import cornicetta from "../images/background/cornice.svg"

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

  const [isAdmin, setIsAdmin] = useState(false);

  // Funzione per impostare isAdmin su true se l'utente è un amministratore
  /*const handlePower = () => { 
    users.map((user) => (
      user.nickname === "giorgiosld" ? 
        setIsAdmin(true)
      :
        setIsAdmin(false)
    ))
  };*/

  return (
    <div>
      {isAdmin ?
        <AdminPage user={"harlockOfficial"}/>
      :
        <>
          <Container fixed sx={{overflowY:'auto', marginBottom: 20}} >
            <Grid container spacing={2} sx={{marginTop: "50px"}}>
              <Grid item xs={6} md={4} container justify="center" alignItems="center" textAlign="center">
                <svg width="280" height="280" xmlns="http://www.w3.org/2000/svg">
      <path d="M150 20H160V10L150 10V20Z" fill="#B2E3F0"></path>
      <path d="M110 20H120V10L110 10V20Z" fill="#B2E3F0"></path>
      <path d="M140 10L150 10V0L140 0V10Z" fill="#B2E3F0"></path>
      <path d="M80 30H90V20H80V30Z" fill="#14596B"></path>
      <path d="M50 20H60V10L50 10V20Z" fill="#B2E3F0"></path>
      <path d="M60 30H70V20H60V30Z" fill="#14596B"></path>
      <path d="M140 30H150V20H140V30Z" fill="#33B6D8"></path>
      <path d="M170 20H180V10L170 10V20Z" fill="#B2E3F0"></path>
      <path d="M160 30H170V20H160V30Z" fill="#33B6D8"></path>
      <path d="M110 220L100 220L100 230L110 230L110 220Z" fill="#0C3640"></path>
      <path d="M120 220L110 220L110 230L120 230L120 220Z" fill="#0C3640"></path>
      <path d="M130 210L120 210L120 220L130 220L130 210Z" fill="#33B6D8"></path>
      <path d="M180 210L170 210L170 220L180 220L180 210Z" fill="#0C3640"></path>
      <path d="M140 220L130 220L130 230L140 230L140 220Z" fill="#0C3640"></path>
      <path d="M190 220L180 220L180 230L190 230L190 220Z" fill="#14596B"></path>
      <path d="M220 200L210 200L210 210L220 210L220 200Z" fill="#0C3640"></path>
      <path d="M230 220L220 220L220 230L230 230L230 220Z" fill="#14596B"></path>
      <path d="M150 230L140 230L140 240L150 240L150 230Z" fill="#14596B"></path>
      <path d="M60 230L50 230L50 240L60 240L60 230Z" fill="#0F0913"></path>
      <path d="M100 220L90 220L90 230L100 230L100 220Z" fill="#14596B"></path>
      <path d="M100 210L90 210L90 220L100 220L100 210Z" fill="#33B6D8"></path>
      <path d="M70 230L60 230L60 240L70 240L70 230Z" fill="#0C3640"></path>
      <path d="M80 220L70 220L70 230L80 230L80 220Z" fill="#0C3640"></path>
      <path d="M70 210L60 210L60 220L70 220L70 210Z" fill="#0C3640"></path>
      <path d="M80 230L70 230L70 240L80 240L80 230Z" fill="#0F0913"></path>
      <path d="M220 127L220 137L230 137L230 127L220 127Z" fill="#14596B"></path>
      <path d="M220 117L220 127L230 127L230 117L220 117Z" fill="#B2E3F0"></path>
      <path d="M230 97L230 107L240 107L240 97L230 97Z" fill="#B2E3F0"></path>
      <path d="M220 77L220 87L230 87L230 77L220 77Z" fill="#B2E3F0"></path>
      <path d="M220 137L220 147L230 147L230 137L220 137Z" fill="#33B6D8"></path>
      <path d="M210 147L210 157L220 157L220 147L210 147Z" fill="#0C3640"></path>
      <path d="M230 127L230 137L240 137L240 127L230 127Z" fill="#B2E3F0"></path>
      <path d="M220 157L220 167L230 167L230 157L220 157Z" fill="#0C3640"></path>
      <path d="M20 91L20 81L10 81L10 91L20 91Z" fill="#0C3640"></path>
      <path d="M10 91L10 81L0 81L-1.31134e-06 91L10 91Z" fill="#0C3640"></path>
      <path d="M20 111L20 101L10 101L10 111L20 111Z" fill="#0C3640"></path>
      <path d="M20 131L20 121L10 121L10 131L20 131Z" fill="#0C3640"></path>
      <path d="M29.9238 171L29.9238 161L19.9238 161L19.9238 171L29.9238 171Z" fill="#0C3640"></path>
      <path d="M10 191L10 181L0 181L-1.31134e-06 191L10 191Z" fill="#14596B"></path>
      <path d="M20 181L20 171L10 171L10 181L20 181Z" fill="#0C3640"></path>
      <path d="M20 221L20 211L10 211L10 221L20 221Z" fill="#14596B"></path>
      <path d="M30 61L30 51L20 51L20 61L30 61Z" fill="#33B6D8"></path>
      <path d="M30 111L30 101L20 101L20 111L30 111Z" fill="#0C3640"></path>
      <path d="M20 71L20 61L10 61L10 71L20 71Z" fill="#14596B"></path>
      <path d="M20 81L20 71L10 71L10 81L20 81Z" fill="#0C3640"></path>
      <path d="M30 81L30 71L20 71L20 81L30 81Z" fill="#14596B"></path>
                </svg>
                <Avatar alt="profile pic" variant='rounded' src={temProfiles[profilo].Image} sx={{ position:"absolute", width: 200, height: 200, rotate: "15deg", textAlign: "center", display:"inline-block" }}/>
              </Grid>
              <Grid item xs={6} md={8}>
                <Box>
                <TypewriterEffect textStyle={{
                    fontWeight: 800,
                    fontSize: 24,
                    color:"red",
                  }}
                    startDelay={0}
                    multiText = {[">> boot profile..."]}
                    multiTextDelay={800}
                    typeSpeed={60}
                    hideCursorAfterText={true}>
                  </TypewriterEffect>
                </Box>
                <Box alignContent={"center"}>
                  <TypewriterEffect
                    textStyle={{
                      fontWeight: 800,
                      fontSize: 90,
                      color: "#ad832d",
                    }}
                    startDelay={1500}
                    multiText = {["Hello "+ temProfiles[profilo].NickName]}
                    multiTextDelay={1000}
                    typeSpeed={100}
                    hideCursorAfterText={true}
                  />
                </Box>
                
                <Box sx={{ 
                marginTop: "30px",
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
                  <Typography variant="h4">{`${temProfiles[0].FirstName} ${temProfiles[0].LastName}`}</Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h6">Points Earned: {temProfiles[0].Points}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Ranking: {temProfiles[0].Position}</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>

        <div style={{ backgroundImage: `url(${cornicetta})`, height: "30px", marginTop: "30px", marginBottom: "30px" }} />

        <Container>
          <RankingTable></RankingTable>
        </Container>
        </>
      }
    </div>
    
    
  )
}
