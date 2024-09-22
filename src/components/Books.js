import React from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box } from "@mui/material";

const books = [
    {
        "title": "Poor Charlie's Almanack",
        "author": "Peter D Kaufman",
        "description": `This book is a must read for anyone who wants to be a better investor, and to live a better live in general.`
    },
    {
        "title": "The Millionnaire Next Door",
        "author": "",
        "description": ""
    },
    {
        "title": "Rich Dad, Poor Dad",
        "author": "Robert Kiyosaki",
        "description": ""
    }
]

const Books = () => {

    return (
        <Box>
            <Box mb={4}>
                <Typography variant="h4" gutterBottom>
                    Top 10 Books on Finance
                </Typography>
                <Typography variant="body1">
                    There's no better resource than books on finance. There are tons of good books on personal
                    finance, and each book contains a good piece of advice. Here's a list of top 10 finance books that
                    I have found most impactful.
                </Typography>
            </Box>

            {books.map((book, index) => (
                <Accordion key={index}>
                    <AccordionSummary
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                        expandIcon={<ArrowDropDownIcon />}
                    >
                        <Typography>{book.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <Typography component="span" fontWeight="bold">Author: </Typography>
                            {book.author}
                        </Typography>
                        <Typography>
                            {book.description}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))
            }
        </Box>
    );
}


export default Books;