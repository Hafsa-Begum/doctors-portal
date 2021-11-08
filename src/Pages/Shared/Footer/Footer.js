import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Container style={{
            marginTop: "120px",
            paddingBottom: "40px",
            textAlign: 'left'
        }} >
            <Grid container spacing={3} columns={{ xs: 12, md: 12 }}>
                <Grid itme xs={12} md={3}>
                    <Typography variant='p' sx={{
                        pt: 3,
                        color: 'text.secondary',

                    }}>
                        Experimental Dental Care <br /> <br />
                        Check Up <br /> <br />
                        Treatment of Personal Dieseases <br /> <br />
                        Tooth Extraction
                    </Typography>
                </Grid>
                <Grid itme xs={12} md={3}><Typography style={{ color: '#5CE7ED' }} variant='h6'>
                    Services
                </Typography>
                    <Typography variant='p' sx={{
                        mt: 5,
                        color: 'text.secondary',

                    }}>
                        Experimental Dental Care <br /> <br />
                        Check Up <br /> <br />
                        Treatment of Personal Dieseases <br /><br />
                        Tooth Extraction <br /><br />
                        Check Up <br /><br />
                        Check Up <br /><br />
                        Check Up
                    </Typography>
                </Grid>
                <Grid itme xs={12} md={3}> <Typography style={{ color: '#5CE7ED' }} variant='h6'>
                    Oral Health
                </Typography>
                    <Typography variant='p' sx={{
                        mt: 5,
                        color: 'text.secondary',

                    }}>
                        Experimental Dental Care <br /> <br />
                        Check Up <br /> <br />
                        Treatment of Personal Dieseases <br /> <br />
                        Tooth Extraction <br /> <br />
                        Check Up <br /> <br />
                        Check Up <br /> <br />
                        Check Up
                    </Typography>
                </Grid>
                <Grid itme xs={12} md={3}>
                    <Typography style={{ color: '#5CE7ED' }} variant='h6'>
                        Our Address
                    </Typography>
                    <Typography variant='p' sx={{ color: 'text.secondary' }}>
                        NewYork-101010 Hudson Yards
                    </Typography>
                    <Box>
                        <br /> <br />
                        <FacebookOutlinedIcon style={{
                            fontSize: '40px'
                        }}></FacebookOutlinedIcon>
                        <TwitterIcon style={{
                            fontSize: '40px',
                            marginLeft: '15px',
                            marginRight: '15px'
                        }}></TwitterIcon>
                        <InstagramIcon style={{
                            fontSize: '40px'
                        }}></InstagramIcon>
                        <br />
                        <br />
                        <br />
                    </Box>
                    <Typography variant='h6' sx={{ color: 'text.secondary' }}>
                        Call Now
                    </Typography>
                    <Button variant='contained' style={{ backgroundColor: '#5CE7ED' }}>234245344</Button>
                </Grid>
            </Grid>
            <Box sx={{ color: 'text.secondary', textAlign: 'center' }}>
                <br />
                <Typography variant='caption' >Copyright © All Rights reserved</Typography>
            </Box>
        </Container >
    );
};

export default Footer;