import React, { useState } from 'react';
import { Box, Typography, Collapse, IconButton } from '@mui/material';
import { ArrowForwardIosRounded } from '@mui/icons-material';

export default function QACollapse({ question, answer, first, last }) {
    const [open, setOpen] = useState(false);

    return (
        <Box display='flex' flexDirection='column' width='100%'>
            <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                padding='10px 30px'
                sx={{
                    backgroundColor: 'var(--second-color)', 
                    transition: 'border-radius .2s linear',
                    borderRadius: first ? '15px 15px 0 0' : last && !open ? '0 0 15px 15px' : '0',
                    border: 'rgba(255, 255, 255, 0.05) 1px solid',
                    cursor: 'pointer'
                }}
                onClick={() => setOpen(!open)}
            >
                <Typography fontWeight={600} fontSize='16px' sx={{ color: 'rgba(255, 255, 255, 0.5)', display: 'flex', alignItems: 'center' }}>{question}</Typography>
                <IconButton onClick={() => setOpen(!open)} sx={{ color: '#fff' }}>
                    <ArrowForwardIosRounded sx={{ opacity: '0.25', rotate: open ? '90deg' : '0', transition: 'rotate ease-in-out 150ms' }}/>
                </IconButton>
            </Box>
            <Collapse in={open}>
                <Box
                    padding='20px 30px'
                    sx={{
                        backgroundColor: 'var(--fourth-color)', 
                        borderRadius: last ? '0 0 15px 15px' : '0',
                        border: 'rgba(255, 255, 255, 0.05) 1px solid',
                        fontSize: '15px',
                        color: 'rgba(255, 255, 255, 0.5)'
                    }}
                >
                    {answer}
                </Box>
            </Collapse>
        </Box>
    );
}