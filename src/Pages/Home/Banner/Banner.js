import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450,

}

const Banner = () => {

    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: 'left' }}>
                    <Box>
                        <Typography variant="h4">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5, fontSize: 14, fontWeight: 300, color: 'gray' }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, perferendis dolor sequi quibusdam voluptatum non cum magnam libero consequatur architecto!
                        </Typography>
                        <Button variant='contained' style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: 350 }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;