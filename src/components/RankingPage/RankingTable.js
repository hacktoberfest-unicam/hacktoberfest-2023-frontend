import React, { useEffect, useState } from 'react'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Box } from '@mui/material'
import {users} from "../../mock/users.js" 
import axios from 'axios';

users.sort((a, b) => a.rank - b.rank);
//let remainingUsers = users.slice(3);

const adminUsers = ["giorgiosld", "HarlockOfficial", "lollobeach2000"]
//let normalUsers = remainingUsers.filter(user => !adminUsers.includes(user.nickname));


export default function RankingTable() {

    let remainingUsers;
    let normalUsers;
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
                //console.log(response.data)
            })
            .catch((error) => {
                console.error("Zio pera")
            });
    }, []);
    //githubUsername2 = LeaderboardData[1].user.github_username;
    if (LeaderboardData.length > 0){  
        remainingUsers = LeaderboardData.slice(3);
        if (remainingUsers){
            normalUsers = remainingUsers.filter(user => !adminUsers.includes(user.user.github_username));
        }
    }
    //const githubUsernames = normalUsers.map(item => item.user.github_username);



    return (
        <Box paddingTop={"100px"} paddingBottom={"100px"} minWidth={800}> 
            <TableContainer component={Paper} sx={{ backgroundColor: "initial", border: "2px solid rgb(210, 184, 99)", borderRadius: "25px" }} >
                <Table sx={{ minWidth: 500 }} aria-label="Ranking Table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx= {{color: "#FFF", textAlign: "center", width: "33%" }}>Rank</TableCell>
                            <TableCell sx= {{color: "#FFF", textAlign: "center", width: "33%" }}>Nickname</TableCell>
                            <TableCell sx= {{color: "#FFF", textAlign: "center", width: "33%" }}>Points</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {normalUsers && normalUsers.map((item, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx= {{color: "#FFF", textAlign: "center" }}>{index+4}</TableCell>
                                <TableCell sx= {{color: "#FFF", textAlign: "center" }}>{item.user.github_username}</TableCell>
                                <TableCell sx= {{color: "#FFF", textAlign: "center" }}>{item.score}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>   
    )
}
