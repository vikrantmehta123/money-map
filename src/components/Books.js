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
        "description": `This book is a must read for anyone who wants to be a better investor, and to live a 
        better live in general. It's a collection of the wisdom of Charlie Munger, who was a long-time partner of Warren
        Buffett.`
    },
    {
        "title": "The Millionnaire Next Door",
        "author": "Thomas Stanley",
        "description": `A lesser known classic. It shows how normal people can become rich beyond imagination with discipline.`
    },
    {
        "title": "Rich Dad, Poor Dad",
        "author": "Robert Kiyosaki",
        "description": `Although the author has lost credibility in recent times, the principles from the book are still
        solid. A must read if you want to retire well. `
    }, 
    {
        'title':"Thinking, Fast and Slow", 
        'author': "Kaniel Kahnemann", 
        "description":`This is not an easy read. But a reading worthy of the effort. It's not a financial book as well.
        It introduces the ways in which we think- and how our thinking can fail. The biases presented in this book will
        be extremely helpful when you invest your own money.`
    }, 
    {
        'title':"Nudge", 
        "author": "Richard Thaler", 
        "description": `Another classic from a Nobel laureate. It expands our understanding of our cognitive biases 
        applied to a financial setting. Extremely useful when you spend, save, or invest money.`
    }
]

const Books = () => {

    return (
        <Box>
            <Box mb={4}>
                <Typography variant="h4" gutterBottom>
                    Top 5 Books to Read to Master Personal Finance
                </Typography>
                <Typography variant="body1">
                    There's no better resource than books on finance. There are tons of good books on personal
                    finance, and each book contains a good piece of advice. Here's a list of top 5 finance books that
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