import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';  //import CssBaseline for layout
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card12Layout from './card12';   //import to rendered first two components
import LineChart from './LineChart';
import TopSellingProducts from './Table';
import PieChart from './PieChart';
import RevenueMap from './RevenueMap';
import {  useTheme } from "@mui/material/styles";

export default function Dashboard() {

    const theme = useTheme(); 

  return (
    <React.Fragment>
      <CssBaseline />
{/* rendering first two components  */}
      <Card12Layout />   

      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'absolute',
            top: '440px',
            left: '280px',
            width: '892px',
            height: 'auto',
            gap: '38px',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
          }}
        >
          {/* Card 3 */}
          <Box
            sx={{
              width: '662px',
              height: '318px',
              minWidth: '662px',
              padding: '24px',
              gap: '16px',
              borderRadius: '16px',
              backgroundColor: theme.palette.mode === 'dark' ? '#FFFFFF0D' : '#F7F9FB',
            }}
          >
            {/* rendering Linechart component */}
            <LineChart />
          </Box>

          {/* Card 4 */}
          <Box
            sx={{
              width: '202px',
              height: '318px',
              minWidth: '250px',
              maxWidth: '272px',
              padding: '24px',
              gap: '16px',
              borderRadius: '16px',
              backgroundColor: theme.palette.mode === 'dark' ? '#FFFFFF0D' : '#F7F9FB',
            }}
          >
             {/* rendering RevenueMap component */}
            <RevenueMap />
          </Box>

          {/* Card 5 */}
          <Box
            sx={{
              width: '662px',
              height: '336px',
              minWidth: '662px',
              padding: '24px',
              gap: '4px',
              borderRadius: '16px',
              backgroundColor: theme.palette.mode === 'dark' ? '#FFFFFF0D' : '#F7F9FB',
            }}
          >
            {/* rendering TopSellingProducts component */}
            <TopSellingProducts />
          </Box>

          {/* Card 6 */}
          <Box
            sx={{
              width: '202px',
              height: '344px',
              minWidth: '250px',
              maxWidth: '272px',
              padding: '24px',
              gap: '4px',
              borderRadius: '16px',
              backgroundColor: theme.palette.mode === 'dark' ? '#FFFFFF0D' : '#F7F9FB',
            }}
          >
            {/* rendering PieChart component */}
            <PieChart />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
