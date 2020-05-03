import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink } from 'react-router-dom';
import Footer from '../../../shared/components/Footer'
import { Formik } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  
  return (
    <Container id="signin" component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={{ email: "" , password:"" }}
          onSubmit={async values => {
            console.log('submit form', values)
            await new Promise(resolve => setTimeout(props.history.push('/dashboard'), 500));
          }}
          validationSchema={Yup.object().shape(
            {
            password: Yup.string()
            .min(8, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
            email: Yup.string()
              .email()
              .required("Required"),
            })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit
            } = props;
            return (
              <form id="login-form" className={`${classes.form} login`} onSubmit={handleSubmit} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Email Address"
                  autoComplete="email"
                  className={
                    errors.email && touched.email
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                 )}

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Password"
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  className={
                    errors.password && touched.password
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                 )}
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  id="loginbtn"
                  className={classes.submit}
                  disabled={isSubmitting}
                >
                  Sign In
          </Button>
                <Grid container>
                  <Grid item xs>
                    <Link to="/forgotpassword" component={RouterLink} variant="body2">
                      Forgot password?
              </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/signup" component={RouterLink} variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            );
          }}
        </Formik>

      </div>
      <Footer />
    </Container>
  );
}