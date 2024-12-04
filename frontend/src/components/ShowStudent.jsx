
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import {Link, Outlet} from 'react-router-dom';
import './ShowStudent.css';


const ShowStudent = () => {
  const [category, setCategory] = useState([]);
  const [totalFees, setTotalFees] = useState(0);
  const [classCounts, setClassCounts] = useState([]);

  useEffect(() => {
    fetchStudents();
    fetchClassCounts();
    fetchFeesTotal();
  }, []);

  // Fetch student data
  const fetchStudents = async () => {
    try {
      const result = await axios.get("http://localhost:8081/show_Student");
      if (result.data.Status) {
        setCategory(result.data.result);
      }
    } catch (err) {
      console.error("Error fetching student data:", err);
    }
  };

  // Fetch class counts
  const fetchClassCounts = async () => {
    try {
      const result = await axios.get('http://localhost:8081/showClass');
      if (result.data.Status) {
        setClassCounts(result.data.result);
      }
    } catch (err) {
      console.error("Error fetching class counts:", err);
    }
  };

  // Fetch total fees
  const fetchFeesTotal = async () => {
    try {
      const result = await axios.get("http://localhost:8081/student_total");
      if (result.data.Status) {
        if (result.data.result && result.data.result.length > 0) {
          setTotalFees(result.data.result[0].feesStu);
        } else {
          setTotalFees(0);
        }
      } else {
        setTotalFees(0);
      }
    } catch (err) {
      console.error("Error fetching fees total:", err);
      setTotalFees(0);
    }
  };

  // Calculate fees for each class
  const calculateClassCounts = () => {
  const countsByClass = Array(10).fill(0); // Initialize an array for classes 1-10

  category.forEach(student => {
    const classIndex = parseInt(student.class) - 1; // Get the index for the class
    if (classIndex >= 0 && classIndex < countsByClass.length) {
      countsByClass[classIndex] += 1; // Increment the count for the class
    }
  });

  return countsByClass;
};
  const classFees = calculateClassCounts ();

  // Delete Data 
  const deleteData = async (id) => {
  console.log("delete successfully " + id);
  try {
    const res = await axios.delete(`http://localhost:8081/formDelete/${id}`);
    // console.log(res);
    Swal.fire({
      title: "Deleted",
      text: "Delete Successfully",
      icon: "success"
    });
  } catch (err) {
    console.log(err);
  }
};
  return (
    <div className="container" >
      <div className="row text-center mt-3" >
        {classFees.map((count, index) => (
          <div className="card m-1 class_box" key={index + 1} style={{ width:'7rem'}}>
            <div>Class {index + 1}</div>
            <p className="mt-1"><b>{count}</b></p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-center text-uppercase mt-4">Student List</h2>
      </div>
      <div className="row mt-3 table-responsive">
        <table className="table shadow">
          <thead style={{backgroundColor:'#133E87', color: 'white'}}>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Mobile No</th>
              {/* <th scope="col">Image</th> */}
              <th scope="col">Class</th>
              <th scope="col">Fees</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {category.map((c) => (
              <tr key={c.id}>
                <td>{c.fname}</td>
                <td>{c.lname}</td>
                <td>{c.mobile_no}</td>
                {/* <td><img src={`http://localhost:8081/${c.photo}`} alt={c.name} height="80px" width="100px" /></td> */}
                <td>{c.class}</td>
                <td>{c.fees}</td>
                <td>
                <Link to={`/admin/dashboard/show_Student/update_Student/${c.id}`} className="btn btn-sm btn-success me-2" >Update</Link>
              
                <Outlet/>
                <button className="btn btn-sm btn-danger" onClick={()=>deleteData(c.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
          <tbody >
            <tr style={{backgroundColor:'#133E87', color: 'white'}}>
              <td></td>
              <td></td>
              {/* <td></td> */}
              <td></td>
              <td>Total Fees :</td>
              <td>{totalFees}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};



export default ShowStudent;