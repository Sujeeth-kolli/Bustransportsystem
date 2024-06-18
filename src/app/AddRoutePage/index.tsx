import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Route } from '@/components/dashboard/routes/routes-card';
import RouterLink from 'next/link';


interface AddRoutePageProps {
  onAddRoute: (newRoute: Route) => void; // Callback to handle adding route
}

const AddRoutePage: React.FC<AddRoutePageProps> = ({ onAddRoute }) => {
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [pickUpPoints, setPickUpPoints] = useState('');

  const handleAddRoute = () => {
    const newRoute: Route = {
      id: `ROUTE-${Math.random().toString(36).substr(2, 9).toUpperCase()}`, // Generate unique ID (not actual implementation)
      name: `Route ${Math.floor(Math.random() * 100) + 1}`, // Example name
      description: `Route from ${startPoint} to ${endPoint}`, // Example description
      icon: '/assets/icon-route-default.png', // Example icon URL
      trips: 0, // Example initial trips count
      updatedAt: new Date(), // Current date/time
    };
    // Call the callback to add the new route
    onAddRoute(newRoute);
    // Reset fields after adding route
    setStartPoint('');
    setEndPoint('');
    setPickUpPoints('');
  };

  return (
    <div>
      <Typography variant="h4">Add New Route</Typography>
      <TextField
        fullWidth
        label="Start Point"
        value={startPoint}
        onChange={(e) => setStartPoint(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="End Point"
        value={endPoint}
        onChange={(e) => setEndPoint(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Pick-up Points"
        value={pickUpPoints}
        onChange={(e) => setPickUpPoints(e.target.value)}
        margin="normal"
        variant="outlined"
        multiline
        rows={4}
      />
      <Button variant="contained" color="primary" onClick={handleAddRoute}>
        Add Route
      </Button>
    </div>
  );
};

export default AddRoutePage;
