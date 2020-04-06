import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

interface RegisterProps {
  setUsername: (s: string) => void
  setPassword: (s: string) => void
  setShowSignIn: (b: boolean) => void
  submit: () => void
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
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function Register({ setUsername, setPassword, setShowSignIn, submit }: RegisterProps) {
  const classes = useStyles();

  return (
      <Container component="main" maxWidth="xs" className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">
            Register
          </Typography>
          <form className={classes.form} noValidate onSubmit={e => submit()}>
            <TextField
              variant="outlined"
              margin="normal"
              label="Username"
              color="secondary"
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
              color="secondary"
              required
              fullWidth
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Register
            </Button>
            <Link color="secondary" href="#" variant="body2" onClick={() => setShowSignIn(true)}>
              {"Already have an account? Log in"}
            </Link>
          </form>
      </Container>
  );
}