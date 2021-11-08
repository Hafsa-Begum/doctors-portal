import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory()

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        //console.log(newLoginData)
        setLoginData(newLoginData);
    }
    const handleOnSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your Password didn't match");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();

    }
    return (
        <Container>
            <Grid container spacing={3} columns={{ xs: 12, md: 12 }}>
                <Grid item xs={12} md={6} style={{ marginTop: '100px' }}>
                    <Typography variant='body1'>Register</Typography>
                    {!isLoading && <form onSubmit={handleOnSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            variant="standard"
                            name="name"
                            label="Name"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            variant="standard"
                            type="email"
                            name="email"
                            label="Email"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            variant="standard"
                            type="password"
                            name="password"
                            label="Password"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            variant="standard"
                            type="password"
                            name="password2"
                            label="Re-type Password"
                            onBlur={handleOnBlur}
                        />
                        <Button variant="contained" type='submit' sx={{ width: '75%', m: 1 }} >Register</Button>
                    </form>
                    }

                    <NavLink to='/login'>
                        <Button variant='text'>Already Registered? Please Login</Button>
                    </NavLink>
                    {isLoading && <CircularProgress />}
                    {user?.emaill && <Alert severity="success">User created successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;