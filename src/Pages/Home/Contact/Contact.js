import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Typography } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import appointmentBg from '../../../images/appointment-bg.png';

const backgroundImg = {
    background: `url(${appointmentBg})`,
    backgroundColor: 'rgba(68, 71, 106, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    paddingTop: '20px',
    paddingBottom: '20px',
    marginTop: '20px',
    marginBottom: '20px',

}

const Contact = () => {

    return (
        <Box style={backgroundImg}>
            <Container
                sx={{
                    width: 800,
                    maxWidth: '100%',
                    my: 2
                }}
            >
                <Typography style={{ color: '#5CE7ED' }} sx={{ mt: 3 }} variant='h6'>
                    Contact Us
                </Typography>
                <Typography style={{ color: 'white' }} sx={{ mb: 5, mt: 2 }} variant='h4'>
                    Always Connect with Us
                </Typography>
                <TextField style={{
                    backgroundColor: 'white',
                    borderRadius: '10px'
                }} defaultValue="Your Name" fullWidth id="fullWidth" />
                <TextField style={{
                    backgroundColor: 'white',
                    borderRadius: '10px'
                }} sx={{ my: 2 }} defaultValue="Email Address" fullWidth id="fullWidth" />
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Empty"
                    style={{
                        width: 748,
                        borderRadius: '10px'
                    }}
                    minRows={5}

                />
                <Button variant='contained' style={{
                    backgroundColor: '#5CE7ED',
                    marginTop: '20px'
                }}>Learn More</Button>
            </Container>
        </Box>
    );
};

export default Contact;