import React, { useEffect, useState } from 'react'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material'
import {users} from "../../mock/users.js" 
import axios from 'axios';

users.sort((a, b) => a.rank - b.rank);

export default function RankingCard({rank}) {

    const [LeaderboardData, setLeaderboardData] = useState()

    useEffect(() => {
        const apiLeaderboard = `${process.env.REACT_APP_BACKEND_URL}api/leaderboard/`;
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
    if (LeaderboardData){
        let users = Object.values(LeaderboardData);
        const extractedData = users[0].slice(0, 3).map(user => ({
            github_username: user.user.github_username,
            github_profile_picture: user.user.github_profile_picture,
            score: user.score,
        }));
        githubUsername1 = extractedData[0].github_username
        githubUsername2 = extractedData[1].github_username
        githubUsername3 = extractedData[2].github_username
        points1 = extractedData[0].score
        points2 = extractedData[1].score
        points3 = extractedData[2].score
        avatar1 = extractedData[0].github_profile_picture
        avatar2 = extractedData[1].github_profile_picture
        avatar3 = extractedData[2].github_profile_picture
    }

    return (
        <>
        {LeaderboardData ? (
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
                {(rank === 1) && 
                    <CardActionArea 
                        sx={{display: 'flex'}}
                        href={`user/${githubUsername1}`}
                    >
                        <CardMedia 
                        component="img"
                        height="140"
                        image={avatar1}
                        alt="profile img github"
                        sx={{maxWidth: "50%"}}
                        />
                        <CardContent>
                            <Typography>
                                {githubUsername1}
                            </Typography>
                            <Typography>
                                {points1}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                }
                {(rank === 2) && 
                    <CardActionArea 
                        sx={{display: 'flex'}}
                        href={`user/${githubUsername2}`}
                    >
                        <CardMedia 
                        component="img"
                        height="140"
                        image={avatar2}
                        alt="profile img github"
                        sx={{maxWidth: "50%"}}
                        />
                        <CardContent>
                            <Typography>
                                {githubUsername2}
                            </Typography>
                            <Typography>
                                {points2}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                }
                {(rank === 3) && 
                    <CardActionArea 
                        sx={{display: 'flex'}}
                        href={`user/${githubUsername3}`}
                    >
                        <CardMedia 
                        component="img"
                        height="140"
                        image={avatar3}
                        alt="profile img github"
                        sx={{maxWidth: "50%"}}
                        />
                        <CardContent>
                            <Typography>
                                {githubUsername3}
                            </Typography>
                            <Typography>
                                {points3}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                }
            </Card>
        ) : (
            <p>Lulz</p>
        )}
        </>
    )
}



