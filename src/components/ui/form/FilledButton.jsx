import React from 'react';
import { Button } from '@mui/material';

const style = {
    color: 'var(--main-color) !important',
    backgroundColor: 'var(--button-color) !important',
    borderRadius: '100px',
    padding: '10px 40px',
    height: '40px',
    textTransform: 'none',
    fontFamily: '"Manrope", sans-serif !important',
    fontWeight: '650',
    fontSize: '15px',
};

export const FilledButton = ({ label, handleClick, icon, disabled=false, ...otherProps }) => {
    return (
    <Button
        sx={{...style, opacity: disabled ? '0.5' : '1', ...otherProps}}
        variant="filled"
        onClick={handleClick}
        endIcon={icon}
        disabled={disabled}
    >
        {label}
    </Button>
    );
};