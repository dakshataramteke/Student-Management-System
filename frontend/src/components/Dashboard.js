// src/components/Dashboard.jsx
// import React from 'react';
// import './Dashboard.css';
// import {Link , Outlet, useLocation} from 'react-router-dom';
// import DashboardPage from './DashboardPage';


// const Dashboard = () => {
//   const location = useLocation(); 
//   console.log(location);// Get the current location
//   return (
   
//     <div className="container-fluid" id='Dashboard'>
//     <div className="row">
//       {/* Sidebar */}
//       <nav className="col-1 col-md-3 col-lg-2 d-md-block bg-light  p-0 ">
//         <div className="position-fixed sidebar" >
//         <ul className='nav-list'>
//         <li>
//             {/* <h3 className='d-sm-inline d-none ms-3'>Dashboard</h3> */}
//             <Link className={`dashboard_title nav-link `} to={'/admin/dashboard'}> <h3>Dashboard</h3></Link>
//            </li>
//            <li className='nav-item'>
           
//              <Link className={` nav-link ${location.pathname==='/admin/dashboard'? 'active' :''}`} to={'/admin/dashboard'}>
//              <i className='bi bi-house-door-fill me-2'></i>
//              <span className='d-none d-sm-inline'>Home</span>
//              </Link>
//            </li>
//            <li className='nav-item'>
             
//             <Link className={`nav-link ${location.pathname==='/admin/dashboard/show_Student'? 'active':''}`} to={'/admin/dashboard/show_Student'}>
//             <i className='bi bi-people-fill me-2'></i>
//             <span className='d-none d-sm-inline '>Student List</span></Link>
//           </li>
//          <li className='nav-item'>
          
//              <Link className={` nav-link ${location.pathname ==='/admin/dashboard/addStudent'?'active':''}`} to={'/admin/dashboard/addStudent'}>
//              <i className='bi bi-person-fill me-2'></i>
//               <span className='d-none d-sm-inline'>Add Student </span></Link>
//            </li>
//            <li className='' style={{marginTop:'20rem'}}>
//              <Link className='nav-link d-flex justify-content-center align-items-center'  to={'/'} style={{textDecoration:'underline' }}>
//              <i className="bi bi-arrow-left-short fs-1" ></i>
//              <span className='d-none d-sm-inline fs-6'>Back to Home Page </span> </Link>
//            </li>
//          </ul>
//         </div>
     
//       </nav>
    


//       <main className="col-md-9 mr-5 ms-sm-auto col-lg-10 p-0 dashboard_page">
//       <div className="">
//       <h2 className='text-center title'>Student Management System</h2>
//       {location.pathname === '/admin/dashboard' && <DashboardPage />}
//       </div>
     
//         <Outlet />
       
//       </main>
   
//     </div>
  
//   </div>
//   );
// }
import React from 'react';
import './Dashboard.css';
import { Link, Outlet, useLocation } from 'react-router-dom';
import DashboardPage from './DashboardPage';

const Dashboard = () => {
  const location = useLocation();
  console.log(location); // Get the current location
  return (
    <div className="container-fluid" id="Dashboard">
      <div className="row">
        {/* Sidebar */}
        <nav className="col-2 col-md-3 col-lg-2 d-md-block bg-light p-0 position-fixed sidebar">
     <div className="" >
        <ul className='nav-list'>
        <li>
            <Link className={`dashboard_title nav-link `} to={'/admin/dashboard'}> <h3>Dashboard</h3></Link>
           </li>
           <li className='nav-item'>
             <Link className={` nav-link ${location.pathname==='/admin/dashboard'? 'active' :''}`} to={'/admin/dashboard'}>
             <i className='bi bi-house-door-fill me-sm-2'></i>
             <span className='d-none d-sm-inline'>Home</span>
             </Link>
           </li>
           <li className='nav-item'>
             <Link className={`nav-link ${location.pathname==='/admin/dashboard/show_Student'? 'active':''}`} to={'/admin/dashboard/show_Student'}>
           <i className='bi bi-people-fill me-sm-2'></i>
             <span className='d-none d-sm-inline '>Student List</span></Link>
          </li>
          <li className='nav-item'>
          
              <Link className={` nav-link ${location.pathname ==='/admin/dashboard/addStudent'?'active':''}`} to={'/admin/dashboard/addStudent'}>
             <i className='bi bi-person-fill me-sm-2'></i>
               <span className='d-none d-sm-inline'>Add Student </span></Link>            </li>
            <li className='' style={{marginTop:'20rem'}}>
              <Link className='nav-link d-flex justify-content-center align-items-center'  to={'/'} style={{textDecoration:'underline' }}>
             <i className="bi bi-arrow-left-short fs-1" ></i>
              <span className='d-none d-sm-inline fs-6'>Back to Home Page </span> </Link>
            </li>
          </ul>
         </div>
     
       </nav>

        {/* Main Content */}
        <main className="col-10 col-md-9 offset-md-3 col-lg-10 offset-lg-2 p-0 dashboard_page" >
          <div>
            <h2 className="text-center title ">Student Management System</h2>
            {location.pathname === '/admin/dashboard' && <DashboardPage />}
          </div>
          <Outlet />
        </main>
      </div>    
    </div>
  );
};

export default Dashboard;

