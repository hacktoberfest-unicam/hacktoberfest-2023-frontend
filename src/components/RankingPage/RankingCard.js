import React from 'react'
import { Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material'
import TestImage from "../../images/logoHorizontal/hf10_horz_fcl_rgb.png";

export default function RankingPage() {
    return (
        <Card sx={{ 
            maxWidth: 555, 
            color: "#FFF",
            background: "linear-gradient(156deg, rgba(239, 237, 239, 0.04) 0%, rgba(0, 0, 0, 0.04) 92.3%)",
            position: "relative",
            backdropFilter: "blur(5px)",
            borderRadius: "16px",
            padding: "24px 48px",
            textAlign: "center",
            '&::after': {
                content: "''",
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                webkitMask: "linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)",
                webkitMaskComposite: "destination-out",
                background: "linear-gradient(77.9deg, rgb(236, 66, 55) 0%, rgb(51, 182, 216) 100%)",
                padding: "1px",
                borderRadius: "inherit",
                pointerEvents: "none",
                zIndex: -1,
              },
        }}>
            <CardActionArea sx={{display: 'flex'}}>
                <CardMedia 
                    component="img"
                    height="140"
                    image={TestImage}
                    alt="profile img github"
                    sx={{maxWidth: "50%"}}
                />
            
                <CardContent>
                    <Typography>
                        giorgiosld
                    </Typography>
                </CardContent>    
            </CardActionArea>  
        </Card>
    )
}