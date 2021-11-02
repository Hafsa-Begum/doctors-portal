import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';
import { Container, Typography } from '@mui/material';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea officiis iste ipsam numquam necessitatibus inventore, eveniet quas optio tenetur?',
        image: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea officiis iste ipsam numquam necessitatibus inventore, eveniet quas optio tenetur?',
        image: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea officiis iste ipsam numquam necessitatibus inventore, eveniet quas optio tenetur?',
        image: whitening
    }
]

const Services = () => {
    return (
        <Container style={{ textAlign: 'center' }} sx={{ flexGrow: 1 }}>
            <Typography style={{ color: '#5CE7ED' }} sx={{ mt: 3 }} variant='h6'>
                Our Services
            </Typography>
            <Typography sx={{ my: 5 }} variant='h4'>
                Services We Provide
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service => <Service
                        key={service.name}
                        service={service}
                    ></Service>)
                }
            </Grid>
        </Container>
    );
};

export default Services;