import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, Typography } from '@material-ui/core';

function App() {
  const [registrationData, setRegistrationData] = useState(null);

  const registerCompany = async () => {
    const requestData = {
      companyName: 'Gudlavalleru Engineering College',
      ownerName: 'PERA MANOJ',
      rollNo: '20481A05I5',
      ownerEmail: 'peramanojroyal123@gmail.com',
      accessCode: 'dWGzNM',
    };

    try {
      const response = await axios.post(
        'http://104.211.219.98/train/register',
        requestData
      );
      setRegistrationData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem', textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Train Schedule
      </Typography>

      <Button variant="contained" color="primary" onClick={registerCompany}>
        Register Company
      </Button>

      {registrationData && (
        <div style={{ marginTop: '2rem' }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Registration Successful!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Company Name: {registrationData.companyName}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Client ID: {registrationData.clientID}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Client Secret: {registrationData.clientSecret}
          </Typography>
        </div>
      )}
    </Container>
  );
}

export default App;
