import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import bugIcon from '../images/bugIcon.png'
import fishIcon from '../images/fishIcon.png'
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';

interface NavigationProps {
  setPage: (param: string) => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    red: {
      backgroundColor: "#FF7C7C",
    },
    blue: {
      backgroundColor: "#88E1F2",
    },
    text: {
      marginLeft: "10px",
    },
    box: {
      marginLeft: "20px",
      display: "flex",
    },
  }),
)

export default function Navigation({ setPage }: NavigationProps) {
  const classes = useStyles()
  return (
    <AppBar color="default" position="sticky">
      <Toolbar>
        <Box flexGrow={9}>
          <Button onClick={() => setPage("home")}>
            <HomeIcon />
            <Typography variant="h6" className={classes.text}>
              Critterpedia
                </Typography>
          </Button>
        </Box>
        <Box className={classes.box}>
          <Button color="inherit" onClick={() => setPage("bugs")}>
            <Avatar className={classes.red}>
              <img src={bugIcon} width="24px" height="24px" alt="bugs" />
            </Avatar>
            <Typography variant="body2" className={classes.text}>
              BUGS
              </Typography>
          </Button>
        </Box>
        <Box className={classes.box}>
          <Button color="inherit" onClick={() => setPage("fish")}>
            <Avatar className={classes.blue}>
              <img src={fishIcon} width="32px" height="32px" alt="fish" />
            </Avatar>
            <Typography variant="body2" className={classes.text}>
              Fish
              </Typography>
          </Button>
        </Box>
        <Box className={classes.box}>
          <Button color="inherit" onClick={() => setPage("login")}>
            <Typography variant="body2" className={classes.text}>
              Login
            </Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
