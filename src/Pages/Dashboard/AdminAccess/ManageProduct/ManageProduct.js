import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Fab from "@mui/material/Fab";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
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

export default function ManageProduct() {
  const [allProducts, setAllProducts] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:5000/droneServices").then((res) => {
      const data = res.data;
      setAllProducts(data);
    });
  }, [isDelete]);
  const handleDelete = (id) => {
    if (window.confirm("Are your sure delete this item?")) {
      axios.delete(`http://localhost:5000/droneServices/${id}`).then((res) => {
        if (res.data.deletedCount) {
          alert("Successfully delete your item");
          setIsDelete(true);
        } else {
          setIsDelete(false);
        }
      });
    }
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "auto" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="left">Price</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allProducts.map((products) => (
              <>
                <StyledTableRow key={products._id} key={products._id}>
                  <StyledTableCell component="th" scope="row">
                    {products.title}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {products.desc.slice(0, 130)}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    ${products.price}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Fab
                      size="small"
                      style={{ color: "red", background: "#fff" }}
                      sx={{ mr: 1 }}
                      onClick={() => handleDelete(products._id)}
                    >
                      <DeleteIcon />
                    </Fab>
                  </StyledTableCell>
                </StyledTableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
