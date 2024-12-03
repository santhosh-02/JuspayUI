import React from 'react';
import { Box, Container } from '@mui/material';
import CardGrid from './Card';
import StackedBarChart from './BarChart';
import {  useTheme } from "@mui/material/styles";

//out of six dashboard components ,first two components defined here to avoid clumsy
export default function Card12Layout() {

    const theme = useTheme(); //hook for theme

  return (
    //setting layout
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'grid',
          position: 'absolute',
          left: '280px',
          width: '892px',
          height: 'auto',
          gridTemplateColumns: 'repeat(2, auto)', // Two cards with auto spacing
          gap: '38px', // Space between cards
          justifyContent: 'start', // Align cards to the left
        }}
      >
        {/* Card 1 */}
        <Box
          sx={{
            width: '457px', // Fixed width
            height: '252px', // Fixed height
            padding: '16px',
            borderRadius: '16px',
            
          }}
        >
          <CardGrid />
        </Box>

        {/* Card 2 */}
        <Box
          sx={{
            width: '457px', // Fixed width
            height: '252px', // Fixed height
            padding: '16px',
            borderRadius: '16px',
            backgroundColor: theme.palette.mode === 'dark' ? '#FFFFFF0D' : '#F7F9FB',
            marginTop:'18px'
          }}
        >
          <StackedBarChart />
        </Box>
      </Box>
    </Container>
  );
}
