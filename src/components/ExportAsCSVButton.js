import React from 'react';
import Button from '@mui/material/Button';

const ExportCSVButton = ({ rows, headers }) => {
    // Function to convert table data to CSV format

    const convertToCSV = () => {
        const headerRow = headers.join(',');

        const csvRows = rows.map(row =>
            headers.map(header => row[header]).join(',')
        );

        // Combine header and rows
        return [headerRow, ...csvRows].join('\n');
    };

    // Function to trigger CSV download
    const handleExportCSV = () => {
        const csvData = convertToCSV(rows);

        // Create a Blob from the CSV data
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });

        // Create a download link and click it
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.setAttribute('download', 'financial_plan.csv'); // File name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Button variant="contained" color="primary" onClick={handleExportCSV}>
            Export as CSV
        </Button>
    );
}

export default ExportCSVButton;