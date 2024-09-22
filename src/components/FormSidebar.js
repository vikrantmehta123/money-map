import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import { Box, Typography, TextField, Button } from '@mui/material';

const drawerWidth = 300;

const FormSidebar = ({ formValues, updateFormValues, handleSubmit }) => {
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
        </Drawer>
    );
}

export default FormSidebar;