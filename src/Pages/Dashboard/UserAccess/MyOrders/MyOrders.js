import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useAuth from "../../../../Hooks/useAuth";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function MyOrders() {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:5000/orders").then((res) => {
      const data = res.data;
      const matchData = data.filter((dt) => dt?.email == currentUser.email);
      setOrders(matchData);
    });
  }, [isDelete]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure delete this item?")) {
      axios.delete(`http://localhost:5000/orders/${id}`).then((res) => {
        if (res.data.deletedCount) {
          alert("Delete successful")
          setIsDelete(true);
        }
      });
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Email ID</StyledTableCell>
            <StyledTableCell align="left">Address</StyledTableCell>
            <StyledTableCell align="left">Phone</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <StyledTableRow key={order._id}>
              <StyledTableCell component="th" scope="row">
                {order.name}
              </StyledTableCell>
              <StyledTableCell align="left">{order.email}</StyledTableCell>
              <StyledTableCell align="left">{order.address}</StyledTableCell>
              <StyledTableCell align="left">{order.phone}</StyledTableCell>
              <StyledTableCell align="left">{order.status}</StyledTableCell>
              <StyledTableCell align="left">
                <Fab
                  size="small"
                  style={{ color: "red", background: "#fff" }}
                  sx={{ mr: 1 }}
                  onClick={() => handleDelete(order._id)}
                >
                  <DeleteIcon />
                </Fab>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
