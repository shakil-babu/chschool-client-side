import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import {BsFilePost, BsFillPlusSquareFill, BsFillPeopleFill} from 'react-icons/bs';
import {RiBarChartHorizontalFill} from 'react-icons/ri';
import {ImCross} from 'react-icons/im';
import {FaSchool, FaPhotoVideo, FaInfo, FaBook, FaLanguage, FaAddressBook} from 'react-icons/fa';
import {BrowserRouter as Router,Switch,Route,Link,NavLink,
} from "react-router-dom";
import avatar from '../../../utilities/avatar.png';
import AddSpecialMessage from "../AllAddComponents/AddSpecialMessage/AddSpecialMessage";
import AddPhotoAndTitle from "../AllAddComponents/AddPhotoAndTitle/AddPhotoAndTitle";
import AddAboutSchool from "../AllAddComponents/AddAboutSchool/AddAboutSchool";
import AddAskedQuestions from "../AllAddComponents/AddAskedQuestions/AddAskedQuestions";
import AddAdmin from "../AllAddComponents/AddAdmin/AddAdmin";
import AddSchoolAddress from "../AllAddComponents/AddSchoolAddress/AddSchoolAddress";
import AddTeachers from "../AllAddComponents/AddTeachers/AddTeachers";
import AddWorkers from "../AllAddComponents/AddWorkers/AddWorkers";
import AddNotice from "../AllAddComponents/AddNotice/AddNotice";
import AddStudent from "../AllAddComponents/AddStudent/AddStudent";
import IndexOfManage from "../IndexOfManage/IndexOfManage";
import AllStudents from "../AllStudents/AllStudents";

const routesWithCom = [

  {
    path: "/manage/special-message",
    sidebar: () => <AddSpecialMessage/>
  },
  {
    path: "/manage/add-campus-photo",
    sidebar: () => <AddPhotoAndTitle/>
  },
  {
    path: "/manage/add-about-school",
    sidebar: () => <AddAboutSchool/>
  },
  {
    path: "/manage/add-teachers-info",
    sidebar: () => <AddTeachers/>
  },
  {
    path: "/manage/add-workers-info",
    sidebar: () => <AddWorkers/>
  },
  {
    path: "/manage/add-notice",
    sidebar: () => <AddNotice/> 
  },
  {
    path: "/manage/add-student-info",
    sidebar: () => <AddStudent/>
  },
  {
    path: "/manage/add-frequently-asked-questions",
    sidebar: () => <AddAskedQuestions/>,
  },
  {
    path: "/manage/add-school-address",
    sidebar: () => <AddSchoolAddress/>
  },
  {
    path: "/manage/add-admin",
    sidebar: () => <AddAdmin/> ,
  },
  {
    path: "/manage/all-admins",
    sidebar: () => <h3>all admins</h3> ,
  },
  {
    path:'/manage/allstudents',
    sidebar:() => <AllStudents/>
  },
  {
      path:'/',
      sidebar:() => <IndexOfManage/>
  }
];



const Sidebar = () => {

const [isBar, setIsBar] = useState(true);
const toggleHandler = () => {
    setIsBar(!isBar);
}
  return (
    <>
      <Router>

        <section className="sidebar-main-area">
          {
              isBar && (
                  <div className="sidebar-left-main-part">
                      <ImCross onClick={toggleHandler} className='cross'/>
                <div className="navigation-link">
                    <Link style={{textDecoration:'none'}} to='/manage'>
                        <div className="admin-panel-title">
                            <FaSchool className='si'/>
                            <h4>ছাগলধরা উচ্চ বিদ্যালয়</h4>
                            <h4>এডমিন প্যানেল</h4>
                        </div>
                    </Link>
                    <NavLink style={{ textDecoration: "none" }}activeClassName={"active-style"}to="/manage/special-message"className="action-flex">
                    <BsFilePost className="action-icon" />
                    <p>বিশেষ বার্তা</p>
                    </NavLink>

                    <NavLink style={{ textDecoration: "none" }}activeClassName={"active-style"}to="/manage/add-campus-photo"className="action-flex">
                    <FaPhotoVideo className="action-icon" />
                    <p>ছবিসমূহ এবং টাইটেল</p>
                    </NavLink>

                    <NavLink style={{ textDecoration: "none" }}activeClassName={"active-style"}to="/manage/add-about-school"className="action-flex">
                    <FaSchool className="action-icon" />
                    <p>স্কুল সম্পর্কে</p>
                    </NavLink>

                    <NavLink style={{ textDecoration: "none" }} activeClassName={"active-style"} to="/manage/add-student-info" className="action-flex">
                    <FaInfo className="action-icon" />
                    <p> শিক্ষার্থীর তথ্য</p>
                    </NavLink>


                    <NavLink style={{ textDecoration: "none" }} activeClassName={"active-style"} to="/manage/add-teachers-info" className="action-flex">
                    <BsFillPlusSquareFill className="action-icon" />
                    <p>শিক্ষকের তথ্য</p>
                    </NavLink>

                    <NavLink style={{ textDecoration: "none" }} activeClassName={"active-style"} to="/manage/add-workers-info" className="action-flex" >
                    <BsFillPeopleFill className="action-icon" />
                    <p>কর্মচারীর তথ্য</p>
                    </NavLink>

                    <NavLink style={{ textDecoration: "none" }} activeClassName={"active-style"} to="/manage/add-notice" className="action-flex">
                    <FaBook className="action-icon" />
                    <p>নোটিশ</p>
                    </NavLink>

                    <NavLink style={{ textDecoration: "none" }} activeClassName={"active-style"} to="/manage/add-frequently-asked-questions" className="action-flex">
                    <FaLanguage className="action-icon" />
                    <p>জিজ্ঞাসাকৃত প্রশ্ন</p>
                    </NavLink>

                    <NavLink style={{ textDecoration: "none" }} activeClassName={"active-style"} to="/manage/add-school-address" className="action-flex">
                    <FaAddressBook className="action-icon" />
                    <p>স্কুলের ঠিকানা</p>
                    </NavLink>

                    <NavLink style={{ textDecoration: "none" }} activeClassName={"active-style"} to="/manage/add-admin" className="action-flex">
                    <BsFillPlusSquareFill className="action-icon" />
                    <p>এড এডমিন</p>
                    </NavLink>

                    <NavLink style={{ textDecoration: "none" }} activeClassName={"active-style"} to="/manage/all-admins" className="action-flex">
                    <BsFillPeopleFill className="action-icon" />
                    <p>সবগুলো এডমিনস</p>
                    </NavLink>


                    <NavLink style={{ textDecoration: "none" }} activeClassName={"active-style"} to="/manage/allstudents" className="action-flex">
                    <BsFillPeopleFill className="action-icon" />
                    <p>সব শিক্ষার্থী</p>
                    </NavLink>
                 </div>
          </div>
              )
          }

          <div className="all-info-part">
                <div className="appbar">
                    <div className="appbar-bar-icon">
                        {!isBar && <RiBarChartHorizontalFill onClick={toggleHandler} className='bar'/> }
                    </div>
                    <div className="appbar-admin-profile">
                        <div className="img-box">
                            <img src={avatar} alt="img" />
                        </div>
                        <div className="admin-name">
                            <h5>Shakil Babu</h5>
                            <h6>Admin</h6>
                        </div>
                    </div>
                </div>

            <div className="info-main-part-here">
              <Switch>
                {routesWithCom.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.sidebar />}
                  />
                ))}
              </Switch>
            </div>
          </div>
        </section>
      </Router>
    </>
  );
};

export default Sidebar;
