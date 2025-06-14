import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import ParagraphSm from "./Typography/ParagraphSm";
import { ICustomTableSection } from "../interfaces/ICustomTableSection";

export default function CustomTableSection({
  title,
  headers,
  rows,
}: ICustomTableSection) {
  return (
    <Box sx={{ mt: 4, mb: 2, textAlign: "center" }}>
      <ParagraphSm>{title}</ParagraphSm>

      <Paper
        sx={{ overflowX: "auto", maxWidth: "800px", margin: "0 auto", mt: 3 }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell
                  key={index}
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "#f5f5f5",
                    fontSize: "19px",
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell
                    key={cellIndex}
                    sx={{ fontWeight: "light", fontSize: "19px" }}
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
