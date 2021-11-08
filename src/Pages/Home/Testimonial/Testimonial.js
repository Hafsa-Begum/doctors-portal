import { Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';

const testimonials = [
    {
        description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distributor using Content here, content',
        name: "Winson Herry",
        country: 'California',
        image: people1
    },
    {
        description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distributor using Content here, content',
        name: "Winson Kerry",
        country: 'California',
        image: people2
    },
    {
        description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distributor using Content here, content',
        name: "Winson Merry",
        country: 'California',
        image: people3
    }
]

const Testimonial = () => {
    return (
        <Container style={{
            textAlign: 'left',
            marginTop: '100px',
            marginBottom: '100px'
        }} sx={{ flexGrow: 1 }}>
            <Typography style={{ color: '#5CE7ED' }} sx={{ mt: 3 }} variant='h6'>
                Testimonials
            </Typography>
            <Typography sx={{ mb: 5, mt: 2 }} variant='h4'>
                What's Our Patient's <br /> Says
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    testimonials.map(testimonial => <Grid sx={{ mb: 3, boxShadow: 1, pb: 3 }} item xs={4} md={4} key={testimonial.name}>

                        <Box sx={{ mx: 3 }}>
                            <Typography sx={{ mb: 5 }} variant='p'>{testimonial.description}</Typography>

                            <Grid container sx={{ mt: 5 }} spacing={2} columns={{ xs: 4, md: 12 }}>
                                <Grid sx={{ width: '80%' }} xs={2} md={4}><img src={testimonial.image} alt="" /></Grid>
                                <Grid xs={2} md={8}>
                                    <Typography variant='h5'>{testimonial.name}</Typography>
                                    <Typography variant='p'>{testimonial.country}</Typography>

                                </Grid>
                            </Grid>
                        </Box>

                    </Grid>)
                }
            </Grid>
        </Container >
    );
};

export default Testimonial;