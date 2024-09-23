import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box, Typography, Toolbar } from '@mui/material';

const FinancialPlanPlot = ({ rows }) => {
    const ages = rows.map(row => row.age);
    const networths = rows.map(row => row.networth);

    return (
        <Box maxWidth="md">
            <Toolbar />
            <Box mb={4}>
                <Typography variant="h4" gutterBottom>
                    Your Networth Over the Years:
                </Typography>
                <Typography variant="body1">
                    Based on the inputs you have provided, the following chart shows how your networth would look like each year.
                    One key thing to notice is whether your networth is dipping towards the end. Ideally, you want a 
                    smooth, increasing, exponential curve.
                </Typography>
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center'>
                <LineChart
                    xAxis={[
                        {
                            id: "agewiseNetworth",
                            data: ages,
                            label: 'Age', 
                            scaleType:'linear'
                        }
                    ]}
                    // y-axis configuration with label and linear scale
                    yAxis={[
                        {
                            id: "networthScale",
                            label: 'Networth',
                            scaleType: 'linear',  // Ensuring linear scale for the y-axis
                        }
                    ]}
                    series={
                        [
                            {
                                label: "Networth",
                                data: networths,
                            }
                        ]
                    }
                    margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                    grid={{ vertical: true, horizontal: true }}
                    width={750}
                    height={400}
                />
            </Box>
        </Box>

    )
}

export default FinancialPlanPlot;