import React from 'react'
import { Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material'
import TestImage from "../../images/logoHorizontal/hf10_horz_fcl_rgb.png";

export default function RankingPage() {
    return (
        <Card sx={{ maxWidth: 555, display: 'flex', opacity: 0.5}}>
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
    )
}