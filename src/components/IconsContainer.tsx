import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import bugIcon from '../../src/icons/bug.png'
import fishIcon from '../../src/icons/fish.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'left',

      '& > *': {
        margin: theme.spacing(1),
      },
    },
    blue: {
      backgroundColor: '#88E1F2',
    },
    red: {
      backgroundColor: '#FF7C7C',
    },
  }),
);

export default function IconAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.blue}>
        <img src={fishIcon} width="32px" height="32px" alt="fish" />
      </Avatar>
      <Avatar className={classes.red}>
        <img src={bugIcon} width="32px" height="32px" alt="bugs" />
      </Avatar>
    </div>
  );
}