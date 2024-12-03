import React from 'react';
import { Box, Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart'; //import piechart base 

export default function PieChartComponent() {
  const data = [38.6, 20, 25, 15]; // Pie chart data values
  const labels = ['Direct', 'Affiliate', 'Sponsored', 'E-mail']; 
  const colors = ['#95A4FC', '#1C1C1C', '#BAEDBD', '#B1E3FF']; // Pie chart colors
  const amounts = ['$34', '$22', '$28', '$18']; 

  return (
    <Box sx={{ padding: '4px', borderRadius: '12px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
      
      {/* Total Sales Row */}
      <Box sx={{ marginBottom: '4px' }}>
      <Typography variant="h5" style={{ textAlign: 'left', fontSize: '14px', fontWeight: '600', fontFamily: 'Inter' }}>
        Total Sales
      </Typography>
      </Box>

      {/* Pie Chart Row */}
      <Box sx={{ marginBottom: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <PieChart
          series={[
            {
              data: data.map((value, index) => ({
                value: value,
                color: colors[index], 
              })),
              innerRadius: 40,
              outerRadius: 60,
              paddingAngle: 5,
              cornerRadius: 6,
              startAngle: -45,
              endAngle: 360,
              cx: 80,
              cy: 70,
            },
          ]}
          width={200}
          height={150}
        />
      </Box>

      {/* Legend Row */}
      <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '4px' }}>
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
    {labels.map((label, index) => (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr auto', // Two columns and amount adjusts to content
          alignItems: 'center',
          width: '100%',
          marginBottom: '4px',
        }}
        key={index}
      >
        {/* Label in column 1 */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '12px', color: colors[index], marginRight: '8px' }}>•</Typography>
          <span style={{ fontSize: '12px' }}>{label}</span> {/* Use inline styles to match the Typography style */}
        </Box>

        {/* Amount in column 2, aligned to the right */}
        <Typography sx={{ fontSize: '12px', textAlign: 'right' }}>{amounts[index]}</Typography>
      </Box>
    ))}
  </Box>
</Box>




      
    </Box>
  );
}
