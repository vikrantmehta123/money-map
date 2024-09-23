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
        'title': "Loss Aversion Bias", 
        'definition': `We tend to weigh losses more heavily than the gains.`, 
        'example': `If you make a profit of 100 Rs, it's not the same as making a loss of 100 Rs. 100 Rs loss has much
        higher weight in our minds, and that's why we avoid realizing this loss. Have you seen how many people 
        hold on to their losing stocks? Loss Aversion is precisely the reason.`
    }, 
    {
        'title': 'Survivorship Bias', 
        'definition' : 'Those who live to tell the tale, tell a distorted tale.',
        'example': `This is most apparent in funds. Many funds report their successful funds. But they don't report their
        failed funds. As a result, the returns are distorted.`
    }, 
    {
        'title':'Compounding', 
        'definition': 'Returns grow exponentially, the longer the time span and the higher the return', 
        'example': `Check out Mohnish Pabrai's video on YouTube on Compounding. Anything and everything compounds!`
    }, 
    {
        'title' : 'Feedback Loops', 
        'definition' : `Elements of a system respond to each other based on some feedback, in some sort of a feedback loop.`, 
        'example' : `Transport is a system. Unusual traffic based on accident is a response ( unusual traffic ) 
        based on a feedback ( accident ). Then people honk ( response to feedback of unusual traffic ),`
    }
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