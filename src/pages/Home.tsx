import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Isabelle from '../images/Isabelle'
const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: '1px 2px 4px rgba(0, 0, 0, .5)',
    padding: '20px',
    backgroundColor: 'white',
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
}))
export default function Home() {
  const classes = useStyles();

  return (
    <Container className={ classes.paper }>

      <Typography variant="body1">
        Thanks for using Critterpedia! I hope you find this tool useful.
      </Typography>
      <img src={ Isabelle } width="24px" height="24px" alt="bugs" />
      <br/>
      <br/>
      <Typography variant="body1">
        I'm Sungyeon, a student based in Philadelphia. I am a big fan of Animal Crossing Series.
        I found it difficult to find a reliable database for fish and bugs in Animal Crossing - New Horizons, to provide a quick reference for the critters I am trying to catch.
      </Typography>
      <br/>
      <Typography variant="body1">
        I plan to expand this tool 
      </Typography>

    </Container>
  )
}