import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import bugIcon from '../images/bug.png'
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    red: {
      backgroundColor: '#FF7C7C',
    },
  }),
);

export default function Navigation() {
  const classes = useStyles();

  return (
    <div>
      <AppBar color="default">
        <Toolbar>
          {/* <Typography variant="h6" className={classes.title}>
        Critterpedia
      </Typography> */}
          <Box flexGrow={1}>
            <Button color="inherit">
              <Typography variant="h6">
                Critterpedia
              </Typography>
            </Button>
          </Box>
          <Box display="flex">
            <Avatar className={classes.red}>
              <img src={bugIcon} width="32px" height="32px" alt="bugs" />
            </Avatar>            
            <Button color="inherit">Bugs</Button>
          </Box>
          <Button color="inherit">Fish</Button>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>

  )

}
