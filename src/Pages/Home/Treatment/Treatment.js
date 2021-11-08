import { Container, Grid, Typography, Box } from '@mui/material';
import React from 'react';
import treatment from '../../../images/treatment.png'

const Treatment = () => {
    return (
        <Container style={{
            marginTop: '80px',
            marginBottom: '50px'
        }}>
            <Grid container spacing={3} columns={{ xs: 12, md: 12 }}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '70%' }} src={treatment} alt="" />
                </Grid>
                <Grid item xs={12} md={6} >
                    <Box style={{
                        textAlign: 'left',
                        marginTop: '30px',
                        marginLeft: '10px'
                    }}>
                        <Typography variant='h3' sx={{ my: 5 }}>
                            Exceptional Dental <br /> Care, on Your Terms
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 400, color: 'gray' }}>
                            It is a long established fact that a reader will be distracted <br /> by the readable content of a page when looking at it's <br /> layout. The point of using Lorem ipsomious that it has <br /> a more-or-less normal distribution of letters as opposed <br /> of using 'Content here, content here', making it look like <br /> readable English. Many desktop publishing packages <br /> and web pages.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Treatment;