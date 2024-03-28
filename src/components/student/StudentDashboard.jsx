import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CoursesList from "./CoursesList";

function StudentDashboard() {
  const [record, setRecord] = useState([]);
  const [userId, setUserId] = useState();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //fetch user id by name

  const loadEnrolledCourse = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      //destructuring original => res.data
      const { data } = await axios.post(
        `http://localhost:9090/api/elearning/user/getuid/${userInfo}`,
        config
      );
      setUserId(data);
      // alert(userId);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadEnrolledCourse();
  }, []);

  return (
    <>
      {/* sidebar */}
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidebar">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <a
            href="/"
            class="d-flex align-items-center pt-5 mb-md-0 me-md-auto  text-decoration-none"
          >
            <span class="fs-5 d-none d-sm-inline"></span>
          </a>
          <ul
            class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start "
            id="menu"
          >
            <li class="nav-item mt-2">
              <a href="#" class="nav-link align-middle px-0">
                <i class="fa fa-home" aria-hidden="true"></i>

                <span class="ms-1 d-none d-sm-inline">Student Dashboard</span>
              </a>
            </li>
            <li>
              <Link
                to={`/student/allcourses/${userId}`}
                className="nav-link px-0 align-middle"
              >
                <i class="fa fa-dashboard "></i>
                <span class="ms-1 d-none d-sm-inline ">Register Courses</span>
              </Link>
            </li>
            <li>
              <Link to="/student/cart" class="nav-link px-0 align-middle">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>

                <span class="ms-1 d-none d-sm-inline ">View Cart</span>
              </Link>
            </li>
            <li>
              <a
                href="#submenu2"
                data-bs-toggle="collapse"
                class="nav-link px-0 align-middle "
              >
                <i class="fa fa-bell" aria-hidden="true"></i>
                <span class="ms-1 d-none d-sm-inline">Announcements</span>
              </a>
              <ul
                class="collapse nav flex-column ms-1"
                id="submenu2"
                data-bs-parent="#menu"
              >
                <li class="w-100">
                  <a href="#" class="nav-link px-0">
                    {" "}
                    <span class="d-none d-sm-inline">Launch New courses in Upcoming days</span> 
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0">
                    {" "}
                    <span class="d-none d-sm-inline">Diwali offers coming soon</span> 
                  </a>
                </li>
              </ul>
            </li>
          </ul>
         
        </div>
      </div>
      

       
    </>
  );
}

export default StudentDashboard;
