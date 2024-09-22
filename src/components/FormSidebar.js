import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import TableChartIcon from '@mui/icons-material/TableChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { Box, Typography, TextField, Button } from '@mui/material';

const drawerWidth = 300;

const FormSidebar = ({ formValues, updateFormValues, handleSubmit, setIsShowPlot }) => {
    const handleChange = (e) => {
        updateFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth },
            }}
        >
            <Toolbar />
            <Box p={1} height='auto'>
                <Typography variant="h6">Variables</Typography>
                {Object.keys(formValues).map((key) => (
                    <TextField
                        key={key}
                        label={key.replace(/([A-Z])/g, ' $1')} // Split camelCase for readability
                        name={key}
                        value={formValues[key]}
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                        size="small"
                    />
                ))}
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Box>
            <Divider />
            <Box m={2}>
                <IconButton
                    color="primary"
                    onClick={() => setIsShowPlot(false)} 
                >
                    <TableChartIcon />
                </IconButton>

                {/* Button to show plot */}
                <IconButton
                    color="primary"
                    onClick={() => setIsShowPlot(true)} 
                >
                    <ShowChartIcon />
                </IconButton>
            </Box>
        </Drawer>
    );
}

export default FormSidebar;