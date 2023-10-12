import React from "react";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Box } from '@mui/material'
import {users} from "../../mock/users.js" 

let adminUsers = ["giorgiosld", "harlockOfficial", "lollobeach2000"]

const normalUsers = users.filter(user => !adminUsers.includes(user.nickname));

export default function AdminControlPanel(){
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
                        {normalUsers.map((user, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx= {{color: "#FFF", textAlign: "center" }}>{user.rank}</TableCell>
                                <TableCell sx= {{color: "#FFF", textAlign: "center" }}>{user.nickname}</TableCell>
                                <TableCell sx= {{color: "#FFF", textAlign: "center" }}>{user.points}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>   
    )
}