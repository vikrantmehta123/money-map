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
            {/* TODO: Include a Header that explains the rationale behind the mental models*/}


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
                            <strong>Definition: </strong> {model.definition}
                        </Typography>
                        <Typography>
                            <strong>Example: </strong> {model.example}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
}


export default MentalModels;