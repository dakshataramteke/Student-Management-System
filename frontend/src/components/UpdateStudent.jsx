// import React, { useState , useEffect} from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { useParams, useNavigate } from "react-router-dom";

// const UpdateStudent = () => {
//     const navigate = useNavigate()
//   const { id } = useParams();
//   const [values, setValues] = useState({
//     id:id,
//     firstname: "",
//     lastname: "",
//     mobile: "",
//     class: "",
//     fees: "",
//   })
//   useEffect(() => {
//   if (id) {
//     axios.get(`http://localhost:8081/admin/dashboard/show_Student/update_Student/${id}`)
//       .then(res => {
//         console.log(res.data);
//         setValues({
//           ...values,
//           firstname: res.data.firstname,
//           lastname: res.data.lastname,
//           mobile: res.data.mobile,
//           class: res.data.class,
//           fees: res.data.fees
//         });
//       })
//       .catch(err => console.log(err));
//   }
// }, []); 
//   // Submit Button alert
//   const SubmitAlert = () => {
//     Swal.fire({
//       title: "Successfully!",
//       text: "Your Data is Saved!",
//       icon: "success",
//     });
//   };

//   const handlChange = (event)=>{
//     setValues({...values, [event.target.name]: event.target.value})
//   }

//   //Submit Value
// const Submit = (e) => {
//   e.preventDefault();
//   console.log(values);
//   axios
//     .put(`http://localhost:8081/admin/dashboard/show_Student/update_Student/${id}`,values, {
//     })
//     .then((res) => {
//       console.log(res);
     
//       if (res.data && res.data.message) {
//         Swal.fire({
//           title: "Success!",
//           text: res.data.message,
//           icon: "success",
//         });
       
//       }
//       navigate('/admin/dashboard/show_Student');
//     })
//     .catch((error) => {
//       console.error("Update error:", error);
//       Swal.fire({
//         title: "Error!",
//         text: "There was an error updating the data.",
//         icon: "error",
//       });
//     });
// };

//   return (
//     <>
//       <div className=" container-fluid StudentForm px-4 mt-4">
//         <div>
//           <h2 className="text-center mt-3">UPDATE STUDENT</h2>
//           <hr className="mb-4" style={{height:"4px", backgroundColor:'#041d56'}}/>
//         </div>
//         <form onSubmit={Submit}>
//           <div className="row ">
//             <div className="col-12 col-md-6">
//               <label htmlFor="fname" className="form-label">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="fname"
//                 value={values.firstname}
//                 onChange={handlChange}
//                 aria-describedby="FirstName"
//                 name="firstname" // Match this with the state property
       
//               />
//             </div>
//             <div className="col-12 col-md-6">
//               <label htmlFor="lname" className="form-label">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="lname"
//                 name="lastname"
//                 value={values.lastname}
//                 onChange={handlChange}
//               />
//             </div>
//           </div>

//           <div className="row ">
//             <div className="col-12 col-md-4">
//               <label htmlFor="mobileno" className="form-label">
//                 Mobile No
//               </label>
//               <input
//                 type="tel"
//                 className="form-control"
//                 id="mobileno"
//                 name="mobile"
//                 value={values.mobile}
//                 onChange={handlChange}
//                 aria-describedby="emailHelp"
//               />
//             </div>
        
//         </div>
//           <hr />
//           <h3>Admission Details</h3>
//           <div className="row">
//             <div className="col-12 col-md-4">
//               <label htmlFor="classDetails" className="form-label">
//                 Class
//               </label>
//               <select
//                 className="form-select"
//                 aria-label="Default select example"
//                 id="classDetails"
//                 name="class"
//                 value={values.class}
//                 onChange={handlChange}
//               >
//                 <option>Admission Class</option>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//                 <option value="5">5</option>
//                 <option value="6">6</option>
//                 <option value="7">7</option>
//                 <option value="8">8</option>
//                 <option value="9">9</option>
//                 <option value="10">10</option>
//               </select>
//             </div>
//             <div className="col-12 col-md-4">
//               <label htmlFor="fatname" className="form-label">
//                 Fees
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="fees"
//                 aria-describedby="FirstName"
//                 name="fees" // Match this with the state property
//                 value={values.fees}
//                 onChange={handlChange}
//               />
//             </div>
//           </div>
//           <hr />
        
//         </form>
//         <div className="row my-4">
//             <div className="col-md-5"></div>
//             <div className="col-6 col-md-5 text-center text-md-start">
//             {/* <button type="submit" className="btn student_btn my-4" onClick={SubmitAlert}>
//   Update
// </button> */}
// <button type="submit" className="btn student_btn my-4">
//   Update
// </button>
//             </div>
           
//           </div>
//       </div>
//     </>
//   );
// };

// export default UpdateStudent;


import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";

const UpdateStudent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    firstname: "",
    lastname: "",
    mobile: "",
    class: "",
    fees: "",
  });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8081/admin/dashboard/show_Student/update_Student/${id}`)
        .then(res => {
          console.log(res.data);
          setValues({
            ...values,
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            mobile: res.data.mobile,
            class: res.data.class,
            fees: res.data.fees
          });
        })
        .catch(err => console.log(err));
    }
  }, [id]); // Add id to the dependency array

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const Submit = (e) => {
    e.preventDefault();
    console.log(values);
    axios.put(`http://localhost:8081/admin/dashboard/show_Student/update_Student/${id}`, values)
      .then((res) => {
        console.log(res);
        if (res.data && res.data.message) {
          Swal.fire({
            title: "Success!",
            text: res.data.message,
            icon: "success",
          });
        }
        navigate('/admin/dashboard/show_Student');
      })
      .catch((error) => {
        console.error("Update error:", error);
        Swal.fire({
          title: "Error!",
          text: "There was an error updating the data.",
          icon: "error",
        });
      });
  };

  return (
    <>
      <div className="container-fluid StudentForm px-4 mt-4">
        <div>
          <h2 className="text-center mt-3">UPDATE STUDENT</h2>
          <hr className="mb-4" style={{ height: "4px", backgroundColor: '#041d56' }} />
        </div>
        <form onSubmit={Submit}>
          <div className="row ">
            <div className="col-12 col-md-6">
              <label htmlFor="fname" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="fname"
                value={values.firstname}
                onChange={handleChange}
                aria-describedby="FirstName"
                name="firstname" // Match this with the state property
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="lname" className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lname"
                name="lastname"
                value={values.lastname}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-12 col-md-4">
              <label htmlFor="mobileno " className="form-label">Mobile No</label>
              <input
                type="tel"
                className="form-control"
                id="mobileno"
                name="mobile"
                value={values.mobile}
                onChange={handleChange}
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <hr />
          <h3>Admission Details</h3>
          <div className="row">
            <div className="col-12 col-md-4">
              <label htmlFor="classDetails" className="form-label">Class</label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="classDetails"
                name="class"
                value={values.class}
                onChange={handleChange}
              >
                <option>Admission Class</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="col-12 col-md-4">
              <label htmlFor="fees" className="form-label">Fees</label>
              <input
                type="text"
                className="form-control"
                id="fees"
                name="fees" // Match this with the state property
                value={values.fees}
                onChange={handleChange}
              />
            </div>
          </div>
          <hr />
          <div className="row my-4">
            <div className="col-md-5"></div>
            <div className="col-6 col-md-5 text-center text-md-start">
              <button type="submit" className="btn student_btn my-4">Update</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateStudent;
