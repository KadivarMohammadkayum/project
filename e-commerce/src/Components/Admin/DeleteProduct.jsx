import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const DeleteProduct = () => {

  const [data, setData] = useState([]);
  const { id } = useParams("");
  const Nevigate = useNavigate("");

  useEffect(() => {
    axios.delete(`http://localhost:9999/product/${id}`).then((response) => {
      setData(response.data);
      Swal.fire({
        title: "Product is Deleted",
        text: "Your Product deleted successfully",
        icon: "success",
      });
    });
    Nevigate("/Admin/manageproduct");
  });
  return (
    <>
      <section></section>
    </>
  )
}

export default DeleteProduct
