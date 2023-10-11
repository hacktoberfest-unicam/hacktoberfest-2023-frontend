import React from 'react'
import { Container, Box, Grid } from '@mui/material'
import RankingCard from '../components/RankingPage/RankingCard'
import RankingTable from '../components/RankingPage/RankingTable'
import cornicetta from '../images/background/cornice.svg'

//add timer (time left to the end of challenge)
//sistemare grafica per podio di cards 
//restanti mostrati sottoforma di tabella con solo posizione e nome profilo
//aggiungere animazione durante fetching dei dati
export default function RankingPage() {
  return (
    <Container maxWidth={1100} left={"50%"}>
        <Box paddingBottom={"5px"} display={"flex"} justifyContent={"center"}>
            <RankingCard rank={1}/>
        </Box>
        <Box sx={{ display: 'flex', paddingTop: '25px' }}>
            <Grid container spacing={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={ 5 } maxWidth="sm">
                    <RankingCard rank={2}/>
                </Grid>
                <Grid item xs={ 5 }>
                    <RankingCard rank={3}/>
                </Grid>
            </Grid>
        </Box>
        <div style={{ backgroundImage: `url(${cornicetta})`, height: "30px", marginTop: "30px" }} />
        <Box display={"flex"} justifyContent={"center"}>
            <RankingTable />
        </Box>
    </Container>
  )
}

