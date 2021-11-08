import { Button, Container, Grid, TextField, Typography, Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();

    const { user, isLoading, loginUser, authError, signInUsingGoogle, } = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleOnSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();

    }
    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacing={3} columns={{ xs: 12, md: 12 }}>
                <Grid item xs={12} md={6} style={{ marginTop: '100px' }}>
                    <Typography variant='body1'>Login</Typography>
                    {!isLoading && <form onSubmit={handleOnSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            variant="standard"
                            name="email"
                            placeholder="Email"
                            onChange={handleOnChange}
                        />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            variant="standard"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleOnChange}
                        />
                        <Button variant="contained" type='submit' sx={{ width: '75%', m: 1 }} >Login</Button>

                    </form>}
                    <NavLink to='/register'>
                        <Button variant='text'>New User? Please Register</Button>
                    </NavLink>
                    <p>-------------------or-------------------</p>
                    <Button onClick={handleGoogleSignIn} variant='contained'>Google Sign In</Button>
                    {isLoading && <CircularProgress />}
                    {user?.emaill && <Alert severity="success">User logged in successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;