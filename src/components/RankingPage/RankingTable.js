import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Box } from '@mui/material'

//dati fittizzi per tabella
function createTable(
    position,
    nickname,
    points,
) {
    return { position, nickname, points }
}

const rows = [
    createTable(3, "test4", 25),
    createTable(4, "test5", 30),
    createTable(5, "test6", 15),
    createTable(5, "test6", 15),
];

export default function RankingTable() {
    return (
    <Box paddingTop={"50px"} minWidth={800}> 
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
                    {rows.map((row) => (
                        <TableRow
                            key={row.points}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx= {{color: "#FFF", textAlign: "center" }}>{row.position}</TableCell>
                            <TableCell sx= {{color: "#FFF", textAlign: "center" }}>{row.nickname}</TableCell>
                            <TableCell sx= {{color: "#FFF", textAlign: "center" }}>{row.points}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>   
)}

/** linear-gradient(77.9deg, rgb(236, 66, 55) 0%, rgb(51, 182, 216) 100%) */

