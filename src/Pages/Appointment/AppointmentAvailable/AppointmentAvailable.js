import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10:05 AM - 11:30 AM ',
        space: 10
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '5:00 PM - 6:30 PM',
        space: 5
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '7:00 PM - 8:30 PM',
        space: 1
    },
    {
        id: 5,
        name: 'Teeth Whitening',
        time: '8:00 AM - 9:00 AM',
        space: 10
    },
    {
        id: 6,
        name: 'Teeth Whitening',
        time: '8:00 AM - 9:00 AM',
        space: 10
    },
]

const AppointmentAvailable = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container>
            <Typography sx={{ my: 3, color: 'info.main' }} variant='h4'>Available Appointment on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment booked successfully</Alert>}
            <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>
                {
                    bookings.map(booking => <Booking
                        date={date}
                        key={booking.id}
                        booking={booking}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AppointmentAvailable;