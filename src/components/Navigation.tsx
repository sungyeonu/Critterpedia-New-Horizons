import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function Navigation() {
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

          <Button color="inherit">Bugs</Button>
          <Button color="inherit">Fish</Button>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>

  )

}
