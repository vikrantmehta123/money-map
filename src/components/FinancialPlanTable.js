import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography, Toolbar } from '@mui/material';
import ExportCSVButton from './ExportAsCSVButton';

const FinancialPlanTable = ({ rows }) => {
    let headers = ["Age", "Inflow", "Outflow", "Networth"];
    return (
        <Box maxWidth="md">
            <Toolbar />
            <Box mb={4}>
                <Typography variant="h4" gutterBottom>
                    Your Networth Over the Years:
                </Typography>
                <Typography variant="body1">
                    Based on the inputs you have provided, the following table shows how your networth would look like each year.
                    One key thing to notice is whether your networth is dipping towards the end.
                </Typography>

            </Box>
            <Box>
                <Box mb={1}>
                    <ExportCSVButton headers={headers} rows={rows} />
                </Box>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table" sx={{ borderTop: 1 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Age</TableCell>
                                <TableCell align="right">Cash Inflow</TableCell>
                                <TableCell align="right">Cash Outflow</TableCell>
                                <TableCell align="right">Total Investment Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.age}
                                    </TableCell>
                                    <TableCell align="right">{row.inflow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
                                    <TableCell align="right">{row.outflow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
                                    <TableCell align="right">{row.networth.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

        </Box>
    );
}

export default FinancialPlanTable;

