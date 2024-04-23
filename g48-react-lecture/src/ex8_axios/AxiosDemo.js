import React, { useState } from 'react';
import axios from 'axios';

const AxiosDemo = () => {

    const baseURL = 'http://localhost:8080';

    const [bookings, setBookings] =useState([]);


    const getBookingsClickHandler = async () => {
        console.log('Start');

        await axios.get(baseURL + '/api/v1/booking/from/2024-04-23/to/2024-04-24')
        .then((response) => {
            console.log('RESPONSE', response);

            if(response.status === 200){
                console.log('DATA', response.data);
                setBookings(response.data);
            }
        })
        .catch((error) =>{
            console.log('ERROR: ', error)
        });

        console.log('End');
    };


    return (
        <div className='container mt-5'>

            <div className='row'>
                <div className='col'>
                    <button className='btn btn-info' onClick={getBookingsClickHandler}>Get Bookings</button>
                </div>
            </div>


            <div className='col mt-3'>

                {bookings.map(booking => (
                    <div key={booking.id} className='card mb-4 col-mb-3'>
                        <div className='card-body'>
                            <h5 className='card-title'>{booking.dateTime}</h5>
                        </div> 
                    </div>
                ))}

            </div>


            
        </div>
    );
};

export default AxiosDemo;