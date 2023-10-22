import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export default function ChallengeTable({ problems }) {

  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "initial",
        border: "2px solid rgb(210, 184, 99)",
        borderRadius: "25px",
      }}
    >
      <Table sx={{ minWidth: 500 }} aria-label="Ranking Table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#FFF", textAlign: "center" }}>
              Challenges
            </TableCell>
            <TableCell sx={{ color: "#FFF", textAlign: "center" }}>
              Points
            </TableCell>
            <TableCell sx={{ color: "#FFF", textAlign: "center" }}>
              Bonus
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {problems && problems.map && problems.map((problem) => (
            <TableRow
              key={problem.problem.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ color: "#FFF", textAlign: "center" }}
              >
                {problem.problem.name}
              </TableCell>
              <TableCell sx={{ color: "#FFF", textAlign: "center" }}>
                {problem.problem.points}
              </TableCell>
              <TableCell sx={{ color: "#FFF", textAlign: "center" }}>
                {problem.bonus_points}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}