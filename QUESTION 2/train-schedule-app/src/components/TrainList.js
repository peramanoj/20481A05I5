import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrainList = () => {
  const [trains, setTrains] = useState([]);

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
   
  

  return (
    <div>
      <h2>All Trains</h2>
      <ul>
        {trains.map(train => (
          <li key={train.id}>
            <a href={`/trains/${train.id}`}>{train.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
        };

export default TrainList;
