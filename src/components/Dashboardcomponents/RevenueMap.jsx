import React from 'react';
import { Box, Typography } from '@mui/material';
import WorldMap from "./../../assets/WorldMap.png";
import {  useTheme } from "@mui/material/styles";

export default function RevenueMap() {

  const theme = useTheme(); //hook for theme

  const locations = [
    { city: 'New York', revenue: '72K' },
    { city: 'San Francisco', revenue: '39K' },
    { city: 'Sydney', revenue: '25K' },
    { city: 'Singapore', revenue: '61K' },
  ];

  return (
    <Box sx={{ padding: '12px 28px 42px 28px', borderRadius: '12px'}}>
      <Typography variant="h5" style={{ textAlign: 'left', fontSize: '14px', fontWeight: '600', fontFamily: 'Inter'}}>
        Revenue by Location
      </Typography>

     
      <Box sx={{  textAlign: 'center' }}>
        <img
          src={WorldMap} 
          alt="Revenue Map"
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>


      <Box sx={{ marginBottom: '16px' }}>
        {locations.map((loc) => (
          <Box key={loc.city} sx={{ marginBottom: '16px' }}>

            {/* City and Revenue  */}
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <Typography sx={{ fontSize: '12px', color: theme.palette.mode === 'dark' ? 'white' : 'black'}}>
                {loc.city}
              </Typography>
              <Typography sx={{ fontSize: '12px', color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>
                {loc.revenue}
              </Typography>
            </Box>

            {/* Blue Bar */}
            <Box
              sx={{
                height: '2px',
                backgroundColor: '#A8C5DA', // Blue color
                borderRadius: '4px',
                position: 'relative',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
