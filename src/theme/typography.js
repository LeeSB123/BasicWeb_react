import React from 'react';
import { Typography, makeStyles } from '@mui/material';
import '../fonts/front.css';

const useStyles = makeStyles({
  text: {
    color: 'white',
    Fontfamily: 'gothic_eb',
    fontsize: 50,
  },
});

export default function() {
  const logo = useStyles();
  return <Typography classNAme={logo.text}>basic</Typography>
}