import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TrainDetails = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    
    fetch('http://104.211.219.98/train/trains/2344', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        companyName: 'Gudlavalleru Engineering College',
        ownerName: 'PERA MANOJ',
        rollNo: '20481A05I5',
        ownerEmail: 'peramanojroyal123@gmail.com',
        accessCode: 'dWGzNM',
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  }, []);
  
  // ...
  
  useEffect(() => {
   
    fetch('http://104.211.219.98:80/train/trains', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        companyName: 'Gudlavalleru Engineering College',
        ownerName: 'PERA MANOJ',
        rollNo: '20481A05I5',
        ownerEmail: 'peramanojroyal123@gmail.com',
        accessCode: 'dWGzNM',
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  if (!train) {
    return <div>Loading train details...</div>;
  }

  return (
    <div>
      <h2>{train.name}</h2>
      <p>Departure: {train.departureTime}</p>
      <p>Arrival: {train.arrivalTime}</p>
      <p>Delay: {train.delay}</p>
      <p>Price: {train.price}</p>
      <p>Seat Availability: {train.seatAvailability}</p>
      <p>Coach Class: {train.coachClass}</p>
    </div>
  );
};

export default TrainDetails;
