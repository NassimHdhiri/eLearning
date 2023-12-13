import React, { useEffect } from 'react';
import AsideBar from '../../components/Dash/AsideBar';
import NavBar from '../../components/Dash/navbar/Index';
import ListOfCourses from '../../components/dashStudent/enrolledCourses/ListOfCourses';
import CourseDetails from '../../components/dashStudent/enrolledCourses/CourseDetails';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ConfirmDialogeLogout from '../../components/dashStudent/index.tsx/ConfirmDialogeLogout';
import { getAllCourses } from '../../features/dashstudent/Enrolledcourses';
import { useDispatch } from 'react-redux';



const EnrolledCourses = () => {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getAllCourses);
  },[])

  const { courses } = useSelector((state: RootState) => state.dashStudentEnrolledCourses);
  const { displaying } = useSelector((state: RootState) => state.dashStudentIndex);


  return (
    <>
    {displaying && <ConfirmDialogeLogout/>}
    <div className='m-auto ml-5 overflow-x-hidden overflow-y-hidden flex-row w-full h-screen grid grid-cols-12 justify-between'>
      <div className='w-[270px] -ml-2 font-bold col-span-2'>
        <AsideBar />
      </div>
      {/* main */}
      <div className='flex-row ml-5 col-span-10'>
        {/* NAVBAR */}
        <NavBar type={"Student"}/>

        {/* center buttom bg-orange-300 bg-yellow-400 */}
        <div className='grid grid-cols-12 h-screen '>
          <div className='col-span-5 items-start '>
            <ListOfCourses courses={courses} />
          </div>
          <div className=''>
            <CourseDetails />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default EnrolledCourses;
