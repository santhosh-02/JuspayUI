import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'; //import table component

export default function TopSellingProducts() {
  const products = [
    { name: 'ASOS Ridley High Waist', price: '$79.49', qty: 82, amount: '$6,518.18' },
    { name: 'Marco Lightweight Shirt', price: '$128.50', qty: 37, amount: '$4,754.50' },
    { name: 'Half Sleeve Shirt', price: '$39.99', qty: 64, amount: '2,559.36' },
    { name: 'Lightweight Jacket', price: '$20.00', qty: 184, amount: '$3,680.00' },
    { name: 'Marco Shoes', price: '$79.49', qty: 64, amount: '$1,965.81' },
    // passing data to value 
  ];

  return (
    <Box sx={{ padding: '8px' }}>
      <Typography variant="h5" style={{ textAlign: 'left', fontSize: '14px', fontWeight: '600', fontFamily: 'Inter' }}>
        Top Selling Products
      </Typography>
      <Table sx={{ borderCollapse: 'collapse' }}>
        <TableHead>
          <TableRow sx={{ height: '45px' }}>
            <TableCell sx={{ color: 'GrayText', borderBottom: '1px solid #e0e0e0', padding: '6px 8px' }}>Name</TableCell>
            <TableCell sx={{ color: 'GrayText', borderBottom: '1px solid #e0e0e0', padding: '6px 8px' }}>Price</TableCell>
            <TableCell sx={{ color: 'GrayText', borderBottom: '1px solid #e0e0e0', padding: '6px 8px' }}>Quantity</TableCell>
            <TableCell sx={{ color: 'GrayText', borderBottom: '1px solid #e0e0e0', padding: '6px 8px' }}>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.name} sx={{ height: '45px' }}>
              <TableCell sx={{ borderBottom: 'none', padding: '6px 8px' }}>{product.name}</TableCell>
              <TableCell sx={{ borderBottom: 'none', padding: '6px 8px' }}>{product.price}</TableCell>
              <TableCell sx={{ borderBottom: 'none', padding: '6px 8px' }}>{product.qty}</TableCell>
              <TableCell sx={{ borderBottom: 'none', padding: '6px 8px' }}>{product.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
