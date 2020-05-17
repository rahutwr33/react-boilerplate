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
import Footer from '../../../shared/components/Footer';
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  
  return (
    <Container id="signup"  component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          initialValues={{firstname:"",lastname:"", email: "" , password:"" }}
          onSubmit={async values => {
            console.log('submit form', values)
            await new Promise(resolve => setTimeout(props.history.push('/dashboard'), 500));
          }}
          validationSchema={Yup.object().shape(
            {
            firstname: Yup.string()
              .required("Required"),
            lastname: Yup.string()
            .required("Required"),
            email: Yup.string()
            .email('Email is not valid')
            .required("Required"),
            password: Yup.string()
            .min(8, "Too Short!")
            .max(50, "Too Long!")
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
        <form className={classes.form} onSubmit={handleSubmit}  noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
                id="firstname"
                label="First Name"
                autoFocus
              />
              {errors.firstname && touched.firstname && (
                  <div className="input-feedback">{errors.firstname}</div>
                 )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                id="lastname"
                label="Last Name"
                name="lastname"
                autoComplete="lname"
              />
              {errors.lastname && touched.lastname && (
                  <div className="input-feedback">{errors.lastname}</div>
                 )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                 )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
              />
              {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                 )}
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            id="registerbtn"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/signin" component={RouterLink} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
            )
          }}
        </Formik>
      </div>
      <Footer/>
    </Container>
  );
}