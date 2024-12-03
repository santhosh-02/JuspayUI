import React, { useState } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@mui/material";  //import table components
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";

import OrderSearch from "../utilities/OrderSearch";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ImportExportIcon from '@mui/icons-material/ImportExport';

//data for the order list 
const initialOrders = [
  { id: "#CM9801", user: "Natali Craig", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress" },
  { id: "#CM9802", user: "Kate Morrison", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete" },
  { id: "#CM9803", user: "Drew Cano", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending" },
  { id: "#CM9804", user: "Orlando Diggs", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved" },
  { id: "#CM9805", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected" },
];

const OrderList = () => {
  const [orders, setOrders] = useState(initialOrders); // Orders state
  const [selectedRows, setSelectedRows] = useState([]); // Selected rows for checkbox

  // Handle Sort Button Click (Sort by Date)
  const handleSortClick = () => {
    const sortedOrders = [...orders].sort((a, b) => new Date(a.date) - new Date(b.date));
    setOrders(sortedOrders);
  };

  // Handle Filter Button Click (Filter Orders based on Status)
  const handleFilterClick = () => {
    setOrders(initialOrders); // Reset to all orders if no filter is selected
  };

  // Handle Row Selection
  const handleSelectRow = (event, orderId) => {
    const selectedIndex = selectedRows.indexOf(orderId);
    let newSelectedRows = [];

    if (selectedIndex === -1) {
      newSelectedRows = newSelectedRows.concat(selectedRows, orderId);
    } else if (selectedIndex === 0) {
      newSelectedRows = newSelectedRows.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelectedRows = newSelectedRows.concat(selectedRows.slice(0, -1));
    } else {
      newSelectedRows = newSelectedRows.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
    }
    setSelectedRows(newSelectedRows);
  };

  // Handle Select All Rows
  const handleSelectAllRows = (event) => {
    if (event.target.checked) {
      const newSelectedRows = orders.map((order) => order.id);
      setSelectedRows(newSelectedRows);
    } else {
      setSelectedRows([]);
    }
  };

  return (
    <div>
      {/* Action Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#F7F9FB",
          padding: "5px 20px",
          marginBottom: "20px",
          borderRadius: "8px", // Rounded corners
        }}
      >
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "transparent",
              boxShadow: "none",
              color: "#000",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
                boxShadow: "none",
              },
            }}
          >
            <AddIcon />
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "transparent",
              boxShadow: "none",
              color: "#000",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
                boxShadow: "none",
              },
            }}
            onClick={handleFilterClick} // Apply Filter
          >
            <FilterListIcon />
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "transparent",
              boxShadow: "none",
              color: "#000",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
                boxShadow: "none",
              },
            }}
            onClick={handleSortClick} // Sort by Date
          >
            <ImportExportIcon />
          </Button>
        </Box>
        <OrderSearch />
      </Box>

      {/* Order List Table */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedRows.length === orders.length}
                  onChange={handleSelectAllRows}
                  inputProps={{
                    "aria-label": "Select all orders",
                  }}
                />
              </TableCell>
              <TableCell sx={{ color: "grey.600" }}>Order ID</TableCell>
              <TableCell sx={{ color: "grey.600" }}>User</TableCell>
              <TableCell sx={{ color: "grey.600" }}>Project</TableCell>
              <TableCell sx={{ color: "grey.600" }}>Address</TableCell>
              <TableCell sx={{ color: "grey.600" }}>Date</TableCell>
              <TableCell sx={{ color: "grey.600" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedRows.indexOf(order.id) !== -1}
                    onChange={(event) => handleSelectRow(event, order.id)}
                    inputProps={{
                      "aria-labelledby": order.id,
                    }}
                  />
                </TableCell>
                <TableCell>{order.id}</TableCell>
                <TableCell>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // Placeholder image
                    alt={order.user}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  {order.user}
                </TableCell>
                <TableCell>{order.project}</TableCell>
                <TableCell>{order.address}</TableCell>
                <TableCell ><CalendarTodayIcon />{order.date}</TableCell>
                <TableCell>
                  <span
                    style={{
                      color: getStatusColor(order.status),
                      fontWeight: "bold",
                    }}
                  >
                    {order.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

// Helper function to determine the color based on order status
const getStatusColor = (status) => {
  switch (status) {
    case "In Progress":
      return "blue";
    case "Complete":
      return "green";
    case "Pending":
      return "orange";
    case "Approved":
      return "purple";
    case "Rejected":
      return "red";
    default:
      return "black";
  }
};

export default OrderList;
