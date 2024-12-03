import React from 'react';
import { Box, Typography } from '@mui/material';
import {  useTheme } from "@mui/material/styles";

const uData = [1000, 1100, 1200, 1300, 1400, 1500]; //data for line projection
const pData = [900, 2000, 1500, 2000, 2500, 3800];
const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export default function LineChart() {

  const theme = useTheme();

  const maxDataValue = Math.max(...uData, ...pData);

  const chartWidth = 600;
  const chartHeight = 280;

  // Calculate x positions based on the chart width
  const calculateXPosition = (index) => (index / (xLabels.length - 1)) * chartWidth;

  // Calculate y positions based on the chart height (inverted, since y-axis starts at the top)
  const calculateYPosition = (value) => chartHeight - (value / maxDataValue) * chartHeight;

  return (
    <div>
        <div>
  <Typography variant="h5" component="div" style={{ textAlign: 'left', fontSize: '14px', fontWeight: '600', fontFamily: 'Inter' }}>
    Revenue 
    <span style={{ marginLeft: "15px", display: 'inline' }}>
      |  
      <p
        style={{
          fontSize: '12px',
          color: theme.palette.mode === 'dark' ? '#e0e0e0' : 'black', // Changes text color for dark mode
          fontWeight: '500',
          display: 'inline',
          margin: '0 8px',
        }}
      >
        <span
          style={{
            color: theme.palette.mode === 'dark' ? '#A8C5DA' : '#707070', // changes bullet color based on theme
            fontSize: '20px',
          }}
        >
          •
        </span>{' '}
        Current week
        <span
          style={{
            fontSize: '15px',
            fontWeight: '600',
            fontFamily: 'Inter',
            marginBottom: '14px',
            paddingLeft: '6px',
            color: theme.palette.mode === 'dark' ? 'white' : 'black', // Changes value color for dark mode
          }}
        >
          $58,211
        </span>
      </p>

      {/* Previous Week */}
      <p
        style={{
          fontSize: '12px',
          color: theme.palette.mode === 'dark' ? '#e0e0e0' : 'black', // Changes text color for dark mode
          fontWeight: '500',
          display: 'inline',
          margin: '0 8px',
        }}
      >
        <span
          style={{
            color: theme.palette.mode === 'dark' ? '#A8C5DA' : '#A8C5DA', // changes bullet color based on theme
            fontSize: '20px',
          }}
        >
          •
        </span>{' '}
        Previous week
        <span
          style={{
            fontSize: '15px',
            fontWeight: '600',
            fontFamily: 'Inter',
            marginBottom: '14px',
            paddingLeft: '6px',
            color: theme.palette.mode === 'dark' ? 'white' : 'black', // changes color based on theme
          }}
        >
          $68,768
        </span>
      </p>
    </span>
  </Typography>
</div>


      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: chartWidth + 'px',  // Auto adjust height and width according to data
          height: chartHeight + 'px',
          position: 'relative',
          padding: '16px',
          marginTop: '-20px', 
        }}
      >
        {/* Y-axis labels and grid lines */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column-reverse',
            gap: '28px',
            height: '100%',
            width: '50px',
            paddingRight: '8px',
            paddingBottom: '80px',
            marginTop: '28px',
          }}
        >
          {Array.from({ length: 4 }).map((_, index) => {
            const yValue = (maxDataValue / 3) * index;
            return (
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
                  {Math.round(yValue / 100)}M
                </Typography>
                <Box
                  sx={{
                    position: 'absolute',
                    left: '45px',
                    width: '550px',
                    height: '1px',
                    backgroundColor: '#e0e0e0',
                  }}
                />
              </Box>
            );
          })}
        </Box>

        {/* Line Chart */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          {/* Path for the "pData" Line */}
          <svg
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
          >
            <path
              d={`M${pData
                .map((data, index) => {
                  const x = calculateXPosition(index);
                  const y = calculateYPosition(data);
                  return `${x},${y}`;
                })
                .join(' L ')}`}
              fill="none"
              stroke="#A8C5DA"
              strokeWidth="2"
            />
          </svg>

          {/* Path for the "uData" Line */}
          <svg
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
          >
            <path
              d={`M${uData
                .map((data, index) => {
                  const x = calculateXPosition(index);
                  const y = calculateYPosition(data);
                  return `${x},${y}`;
                })
                .join(' L ')}`}
              fill="none"
              stroke="#707070"
              strokeWidth="2"
            />
          </svg>
        </Box>

        {/* X-axis labels */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '28px', 
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {xLabels.map((label, index) => (
            <Typography
              key={index}
              sx={{
                fontSize: '12px',
                color: '#707070',
                textAlign: 'center',
                width: '16%',
              }}
            >
              {label}
            </Typography>
          ))}
        </Box>
      </Box>
    </div>
  );
}
