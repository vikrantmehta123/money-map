import React from "react";
import { useState } from "react";
import { Box, Typography, Toolbar } from "@mui/material";
import Sidebar from './Sidebar';
import Books from "./Books";
import MentalModels from "./MentalModels";
import Courses from "./Courses";

const Resources = () => {
    const [selectedResource, setSelectedResource] = useState("Books");

    const handleOnClick = (option) => {
        setSelectedResource(option);
    }

    const renderSelectedComponent = () => {
        switch (selectedResource) {
            case "Books":
                return <Books />
            case "Mental Models":
                return <MentalModels/>
            case "Courses, YouTube and Other":
                return <Courses/>
            default:
                return <Books />
        }
    }

    return (
        <Box sx={{ display: 'flex' }}>

            <Sidebar onResourceClick={handleOnClick} />
            <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Typography sx={{ marginBottom: 2 }}>
                    {renderSelectedComponent()}
                </Typography>
            </Box>
        </Box>

    )
}

export default Resources;