import React from 'react'
import { Card, CardContent, CardMedia, CardActionArea, Typography, Container, Box } from '@mui/material'
import TestImage from "../images/logoHorizontal/hf10_horz_fcl_rgb.png";


//primi 3 in classifica mostrati a forma di podio con rispettiva immagine e nome
//restanti mostrati sottoforma di tabella con solo posizione e nome profilo
export default function RankingPage() {
  return (
    <Container maxWidth="sm">
        <Box paddingBottom={"5px"}>
            <Card sx={{ maxWidth: 555, display: 'flex'}}>
                <CardActionArea sx={{ maxWidth: 260 }}>
                    <CardMedia 
                        component="img"
                        height="140"
                        image={TestImage}
                        alt="profile img github"
                    />
                </CardActionArea>
                <CardContent>
                    <Typography>
                        giorgiosld
                    </Typography>
                </CardContent>
            </Card>
        </Box>
        <Box sx={{ display: 'flex', paddingTop: '25px' }}>
            <Card sx={{ maxWidth: 545, display: 'flex', marginRight: '15px'}}>
                <CardActionArea>
                    <CardMedia 
                        component="img"
                        height="140"
                        image={TestImage}
                        alt="profile img github"
                    />
                </CardActionArea>
                <CardContent>
                    <Typography>
                        giorgiosld
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 545, display: 'flex', marginLeft: '15px'}}>
                <CardActionArea>
                    <CardMedia 
                        component="img"
                        height="140"
                        image={TestImage}
                        alt="profile img github"
                    />
                </CardActionArea>
                <CardContent>
                    <Typography>
                        giorgiosld
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    </Container>
  )
}
