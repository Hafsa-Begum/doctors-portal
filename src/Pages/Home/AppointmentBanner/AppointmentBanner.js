import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import appointmentBg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const backgroundImg = {
    background: `url(${appointmentBg})`,
    marginTop: '175px',
    backgroundColor: 'rgba(68, 71, 106, 0.7)',
    backgroundBlendMode: 'darken, luminosity'

}

const AppointmentBanner = () => {
    return (
        <Box style={backgroundImg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <img style={{
                        width: 400,
                        marginTop: '-107px'
                    }} src={doctor} alt="" />
                </Grid>
                <Grid sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white'
                }} item xs={12} md={7}>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography style={{ color: '#5CE7ED' }} variant='h6'>
                            APPOINTMENT
                        </Typography>
                        <Typography sx={{ my: 3 }} variant='h4'>
                            Make an appointment Today
                        </Typography>
                        <Typography variant='p'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore fugit numquam porro magni culpa, reiciendis maxime dolorem accusantium sequi.</Typography> <br /> <br />

                        <Button variant='contained' style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;