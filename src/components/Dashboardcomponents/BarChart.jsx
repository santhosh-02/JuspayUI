import React from 'react';
import { Box, Typography } from '@mui/material'; //importing mui components 


const uData = [4000, 3000, 2000, 2780, 1890, 2390]; //data for bar projection
const pData = [2400, 1398, 9800, 3908, 4800, 3800];
const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];  //period of time 

export default function RealisticBarChart() {
  const maxDataValue = Math.max(...uData, ...pData);   

  // Ensure the height calculation is visible by scaling it properly
  const calculateHeight = (value) => (value / maxDataValue) * 100; // Increased multiplier to ensure visibility

  const yAxisValues = [30000, 20000, 10000, 0]; // Y-axis tick values for reference

  return (
    <div>
        {/* Title */}
        <Typography variant="h5" component="div" style={{textAlign: "left", fontSize:"14px",fontWeight:"600",fontFamily:"Inter"}}>
            Projections vs Actuals
          </Typography>   
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '400px',
        height: '250px',
        position: 'relative',
        padding: '16px',
      }}
    >
      {/* Y-axis labels and grid lines */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
          height: '100%',
          width: '50px',
          paddingRight: '8px',
          paddingBottom: '0px',
          
        }}
      >
        {yAxisValues.map((value, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '12px',
                color: '#707070',
              }}
            >
              {value / 1000}M
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                left: '45px',
                width: '320px',
                height: '1px',
                backgroundColor: '#e0e0e0',
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Bar Chart */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          width: '100%',
          height: '100%',
        }}
      >
        {xLabels.map((label, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '50px',
            }}
          >
            {/* Stacked Bars */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column-reverse',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  height: `${calculateHeight(pData[index])}px`, // Direct pixel height to ensure visibility
                  width: '50%',
                  backgroundColor: '#A8C5DA',
                  
                  marginBottom: '16px',
                }}
              />
              <Box
                sx={{
                  height: `${calculateHeight(uData[index])}px`,
                  width: '50%',
                  backgroundColor: '#707070',
                  borderRadius: '6px 6px 0 0',
                }}
              />
            </Box>
            {/* X-axis labels */}
            <Typography
              sx={{
                marginTop: '4px',
                marginBottom: '34px',
                fontSize: '12px',
                color: '#707070',
              }}
            >
              {label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
    </div>
  );
}
