import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Isabelle from '../images/Isabelle.png';

const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: '1px 2px 4px rgba(0, 0, 0, .5)',
    padding: '20px',
    width: "95%",
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
    <Container className={classes.paper}>
      <Typography variant="body1">
        Thanks for using Critterpedia! I hope you find this site useful.
      </Typography>
      <br />
      <Typography variant="body1">
        The tables are for Northern Hemisphere Time Sync/Zone.
      </Typography>
      <Typography variant="body1">
        They can still be used in the Southern Hemisphere, add 6 to the months eg. March + 6 = September
      </Typography>
      <br />
      <Typography align="center">
        <img src={Isabelle} width="200" alt="Isabelle" />
      </Typography>
      <br />
      <br />
      <Typography variant="body1" >
        I'm Sungyeon, a student based in Philadelphia. I am a big fan of the Animal Crossing series.
        I found it difficult to find a reliable database for fish and bugs in Animal Crossing - New Horizons, so I built this site to provide a quick reference for the critters I am trying to catch.
      </Typography>
      <br />
      <Typography variant="body1">
        I plan to expand this tool with user authentication soon. The login page is only experimental at the moment.
        If you like the site and find it useful, feel free to reach me out on my Github page or buy me a cup of coffee!
      </Typography>
    </Container>
  )
}