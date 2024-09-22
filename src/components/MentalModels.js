import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box } from "@mui/material";

const models = [
    {
        "title": "Availability Bias",
        "definition": "We judge how often an event occurs based on how easily we can recall it.",
        "example": `How often do you think terrorist attacks occur? The chance of you getting in 
                the middle of a terrorist attack is less than the chance of you being struck by lightning. 
                But if you are like most people, you thought that terrorist attacks are more common. Why? 
                Because you were able to recall terrorist attacks easily. Same goes with crashes in stock markets.`
    },
    {
        "title": "Recency Effect",
        "definition": "The more recent the event, the more weight we attach to it.",
        "example": `If you are a manager, think about the last performance review that you conducted. 
                If you were evaluating performance for the entire year, chances are that you paid more attention
                to the recent performance.`
    },

];


const MentalModels = () => {

    return (
        <Box>
            <Box mb={4}>
                <Typography variant="h4" gutterBottom>
                    Mental Models
                </Typography>
                <Typography variant="body1">
                    A mental model is any idea that helps us understand the world better. This concept
                    comes from Charlie Munger, who encouraged using mental models in thinking.
                    The goal is to apply these models when solving problems. As Charlie says, if you want
                    big success, look for different models working together.
                    This collection shares some important mental models I've gathered over the years.

                </Typography>
            </Box>

            {models.map((model, index) => (
                <Accordion key={index}>
                    <AccordionSummary
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                        expandIcon={<ArrowDropDownIcon />}
                    >
                        <Typography>{model.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <Typography component="span" fontWeight="bold">Definition: </Typography>
                            {model.definition}
                        </Typography>
                        <Typography>
                            <Typography component="span" fontWeight="bold">Example: </Typography>
                            {model.example}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
}


export default MentalModels;