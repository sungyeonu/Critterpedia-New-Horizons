import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navigation from '../Navigation'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

interface SignInProps {
  setUsername: (s: string) => void;
  setPassword: (s: string) => void;
  setShowSignIn: (b: boolean) => void;
  submit: () => void;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: '1px 2px 4px rgba(0, 0, 0, .5)',
    padding: '20px',
    backgroundColor: 'white',
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function SignIn({ setUsername, setPassword, setShowSignIn, submit }: SignInProps) {
  const classes = useStyles();

  return (
    <>
      <Navigation />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper} >
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
            </Typography>
          <form className={classes.form} noValidate onSubmit={e => submit()}>
            <TextField
              variant="outlined"
              margin="normal"
              label="Username"
              required
              fullWidth
              autoFocus
              onChange={e => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              label="Password"
              type="password"
              required
              fullWidth
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
              </Button>
            <Link href="#" variant="body2" onClick={() => setShowSignIn(false)}>
              {"Don't have an account? Sign Up"}
            </Link>
          </form>
        </div>
      </Container>
    </>
  );
}