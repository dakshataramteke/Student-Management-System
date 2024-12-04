import axios from "axios";
import React, { useEffect, useState } from "react";

const DashboardPage = () => {
  const [StudentCount, setStudentCount] = useState();
  const [FeesCount, setFeesCount] = useState(0);

  useEffect(() => {
    StudentTotal();
    FeesTotal();
  }, []);

  const StudentTotal = () => {
    axios
      .get("http://localhost:8081/student_count")
      .then((result) => {
        console.log(result.data);

        if (result.data.Status) {
          setStudentCount(result.data.count);
        } else {
          console.error(
            "Status is false or unexpected response structure:",
            result.data
          );
          setStudentCount(0);
        }
      })
      .catch((err) => console.log(err));
  };

  const FeesTotal = () => {
    axios
      .get("http://localhost:8081/student_total")
      .then((result) => {
        console.log(result.data);

        if (result.data.Status) {
          if (result.data.result && result.data.result.length > 0) {
            setFeesCount(result.data.result[0].feesStu);
          } else {
            console.error("Result is empty or not as expected:", result.data);
            setFeesCount(0);
          }
        } else {
          console.error(
            "Status is false or unexpected response structure:",
            result.data
          );
          setFeesCount(0);
        }
      })
      .catch((err) => {
        console.error("Error fetching fees total:", err);
        setFeesCount(0);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-10 shadow p-4 m-3 box_data">
            <div className="text-center ">
              <h4 className="text-center">Total Students : {StudentCount}</h4>
            </div>
          </div>

          <div className="col-10 col-md-5 shadow p-4 m-3 box_data">
            <div className="text-center">
              <h4 className="text-center">Total Balance :{FeesCount}</h4>
            </div>
          </div>
        </div>

       
        <div className="row">
          <div className="col-md-5 col-10  p-4 m-3 counter_js">
           <div className="card student_counter">
              <div className="percent">
              <div className="dot"></div>
                <svg>
                  <circle cx="70" cy="70" r="70" style={{stroke:"#E5E4E2"}}></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>{StudentCount} <span></span></h2>
                  <p className="mb-0">Students</p>
                </div>
              </div>
           </div>
          </div>

          <div className="col-10 col-md-5 p-4 m-3 counter_js">
          <div className="card fee_counter">
              <div className="percent">
              <div className="dot"></div>
                <svg>
                  <circle cx="70" cy="70" r="70" style={{stroke:"#E5E4E2"}}></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                <h2>83 <span> %</span></h2>
                  <p className="mb-0">Fees</p>
                </div>
              </div>
           </div>
          </div>
        </div>
      </div>

   

    </>
  );
};

export default DashboardPage;
