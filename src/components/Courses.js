import React from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

const Courses = () => {

    return (
        <Box>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                    expandIcon={<ArrowDropDownIcon />}
                >
                    <Typography>Financial Planning for Young Adults</Typography>
                </AccordionSummary>
                <Divider/>
                <AccordionDetails>
                    <Typography>
                        A free course on Coursera. 
                        It's designed with Young Adults in mind, but the principles and habits apply to everyone.
                        <Link href='https://www.coursera.org/learn/financial-planning' underline='hover'>Course Link</Link>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>CA Rachana Ranade's Course on Stock Market Fundamentals</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A very good introduction to the basics of financial markets
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}


export default Courses;