import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

//dati fittizzi per tabella
function createTable(
    position,
    nickname,
    points,
) {
    return { position, nickname, points }
}

const rows = [
    createTable(4, "test4", 25),
    createTable(3, "test5", 20),
    createTable(6, "test6", 15),
];

export default function RankingTable() {
    return (
    <TableContainer component={Paper} sx={{opacity: 0.5}}>
        <Table sx={{ minWidth: 500}} aria-label="Ranking Table">
            <TableHead>
                <TableRow>
                    <TableCell>Position</TableCell>
                    <TableCell>Nickname</TableCell>
                    <TableCell>Points</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow
                        key={row.position}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">{row.position}</TableCell>
                        <TableCell>{row.nickname}</TableCell>
                        <TableCell>{row.points}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
)}