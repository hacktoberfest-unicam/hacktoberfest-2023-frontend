import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useEffect } from "react";

//dati fittizzi per tabella
function createTable(challenge, points, solves) {
  return { challenge, points, solves };
}

const rows = [
  createTable("challenge1", 500, 25),
  createTable("challenge2", 150, 30),
  createTable("challenge3", 250, 15),
];

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
          {problems.map((problem) => (
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

/** linear-gradient(77.9deg, rgb(236, 66, 55) 0%, rgb(51, 182, 216) 100%) */
