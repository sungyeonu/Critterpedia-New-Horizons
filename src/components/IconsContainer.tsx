import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import bugIcon from '../../src/images/bug.png'
import fishIcon from '../../src/images/fish.png'

interface IconsContainerProps {
  setCategory: (category: string) => void;
}

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

export default function IconAvatars({setCategory}: IconsContainerProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.blue} onClick={() => setCategory("fish")} >
        <img src={fishIcon} width="32px" height="32px" alt="fish"/>
      </Avatar>
      <Avatar className={classes.red} onClick={() => setCategory("bugs")}>
        <img src={bugIcon} width="32px" height="32px" alt="bugs"/>
      </Avatar>
    </div>
  );
}