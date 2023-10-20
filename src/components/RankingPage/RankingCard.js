import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material'
import {users} from "../../mock/users.js" 
import axios from 'axios';


users.sort((a, b) => a.rank - b.rank);

export default function RankingCard({rank}) {

    const [LeaderboardData, setLeaderboardData] = useState([])

    useEffect(() => {
        const apiLeaderboard = 'http://127.0.0.1:8000/api/leaderboard/';
        /*const headers = {
            'Access-Control-Allow-Origin': '*',
        }*/
        axios.get(apiLeaderboard//, {
                //headers: headers,
            /*}*/).then((response) => {
                setLeaderboardData(response.data)
            })
            .catch((error) => {
                console.error("Zio pera")
            });
    }, []);
    let githubUsername1, points1, avatar1;
    let githubUsername2, points2, avatar2;
    let githubUsername3, points3, avatar3;
    if (LeaderboardData.length > 0 && LeaderboardData[0].user && LeaderboardData[0].user.github_username) {
        githubUsername1 = LeaderboardData[0].user.github_username;
        avatar1 = LeaderboardData[0].user.github_profile_picture
        points1 = LeaderboardData[0].score
    }
    if (LeaderboardData.length > 0 && LeaderboardData[1].user && LeaderboardData[1].user.github_username) {
        githubUsername2 = LeaderboardData[1].user.github_username;
        avatar2 = LeaderboardData[1].user.github_profile_picture
        points2 = LeaderboardData[1].score
    }
    if (LeaderboardData.length > 0 && LeaderboardData[2].user && LeaderboardData[2].user.github_username) {
        githubUsername3 = LeaderboardData[2].user.github_username;
        avatar3 = LeaderboardData[2].user.github_profile_picture
        points3 = LeaderboardData[2].score
    }


    return (
        <Card sx={{ 
            maxWidth: "400px" , 
            color: "#FFF",
            ...(rank===1 && {background: "linear-gradient(156deg, rgba(239, 237, 239, 0.04) 0%, rgba(0, 0, 0, 69) 92.3%)"}),
            ...(rank===2 && {background: "linear-gradient(156deg, rgba(239, 237, 239, 0.04) 0%, rgba(0, 0, 0, 69) 92.3%)"}),
            ...(rank===3 && {background: "linear-gradient(156deg, rgba(239, 237, 239, 0.04) 0%, rgba(0, 0, 0, 69) 92.3%)"}),
            position: "relative",
            backdropFilter: "blur(5px)",
            borderRadius: "16px",
            padding: "24px 48px",
            textAlign: "center",
            overflow: "inherit",
            '&::after': {
                content: "''",
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                mask: "linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)",
                maskComposite: "destination-out",
                ...(rank===1 && {background: "linear-gradient(156deg, #d2b863 0%, rgba(0, 0, 0, 0.04) 92.3%)"}),
                ...(rank===2 && {background: "linear-gradient(156deg, #c1c9c2 0%, rgba(0, 0, 0, 0.04) 92.3%)"}),
                ...(rank===3 && {background: "linear-gradient(156deg, #cd7f32 0%, rgba(0, 0, 0, 0.04) 92.3%)"}),
                padding: "3px",
                borderRadius: "inherit",
                pointerEvents: "none",
              },
        }}>
            <CardActionArea sx={{display: 'flex'}}>
                {(rank === 1) && <CardMedia 
                    component="img"
                    height="140"
                    image={avatar1}
                    alt="profile img github"
                    sx={{maxWidth: "50%"}}
                />  }     
                {(rank === 2) && <CardMedia 
                    component="img"
                    height="140"
                    image={avatar2}
                    alt="profile img github"
                    sx={{maxWidth: "50%"}}
                />  }     
                {(rank === 3) && <CardMedia 
                    component="img"
                    height="140"
                    image={avatar3}
                    alt="profile img github"
                    sx={{maxWidth: "50%"}}
                />  }        
                <CardContent>
                    <Typography>
                        {(rank === 1) && (
                            //users[rank-1].nickname
                            githubUsername1
                        )}
                        {(rank === 2) && (
                            //users[rank-1].nickname
                            //LeaderboardData[1].github_username
                            githubUsername2
                        )}
                        {(rank === 3) && (
                            //users[rank-1].nickname
                            //LeaderboardData[2].github_username
                            githubUsername3
                        )}
                    </Typography>
                    <Typography>
                        {(rank === 1) && (
                            //users[rank-1].points
                            //LeaderboardData[0].points
                            points1
                        )}
                        {(rank === 2) && (
                            //users[rank-1].points
                            //LeaderboardData[1].points
                            points2
                        )}
                        {(rank === 3) && (
                            //users[rank-1].points
                            //LeaderboardData[2].points
                            points3
                        )}
                    </Typography>
                </CardContent>    
            </CardActionArea>  
        </Card>
    )
}



