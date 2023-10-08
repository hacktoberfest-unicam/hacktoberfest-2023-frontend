import React from 'react'
import { Container, Box, Grid } from '@mui/material'
import RankingCard from '../components/RankingPage/RankingCard'
import RankingTable from '../components/RankingPage/RankingTable'
import '../index.css'

//sistemare grafica per podio di cards 
//restanti mostrati sottoforma di tabella con solo posizione e nome profilo
//aggiungere animazione durante fetching dei dati
export default function RankingPage() {
  return (
    <Container maxWidth={'sm'}>
        <Box paddingBottom={"5px"} left={"50%"}>
            <RankingCard />
        </Box>
        <Box sx={{ display: 'flex', paddingTop: '25px' }}>
            <Grid container spacing={6} sx={{ display: 'flex' }}>
                <Grid item xs={ 6 } maxWidth="sm">
                    <RankingCard />
                </Grid>
                <Grid item xs={ 6 }>
                    <RankingCard />
                </Grid>
            </Grid>
        </Box>
        <Box paddingTop={"50px"}>
            <RankingTable />
        </Box>
    </Container>
  )
}
