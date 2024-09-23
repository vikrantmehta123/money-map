import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 240;

export default function Sidebar({onResourceClick}) {

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
            <List>
                {['Books', 'Courses, YouTube and Other', 'Mental Models'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => onResourceClick(text)}>
                            
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Drawer>
    );
}
