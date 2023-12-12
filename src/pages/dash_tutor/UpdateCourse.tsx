import React from 'react'
import AsideBar from '../../components/dashTutor/AsideBar';
import NavBar from '../../components/Dash/navbar/Index';
import CardAdd from '../../components/dashTutor/addcourses/CardAdd';
import ConfirmDialogeLogout from '../../components/dashStudent/index.tsx/ConfirmDialogeLogout';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CardUpdate from '../../components/dashTutor/updatecourse/CardUpdate';

const UpdateCourse = () => {
  const { displaying } = useSelector((state: RootState) => state.dashStudentIndex);
  
  return (
    <>
      {displaying && <ConfirmDialogeLogout/>}

    <div className='m-auto ml-5 overflow-x-hidden overflow-y-hidden flex-row w-full h-screen grid grid-cols-12 justify-between'>
        <div className='w-[270px]  -ml-2  font-bold col-span-2'>
          <AsideBar/>
        </div>
        {/* main */}
        <div className=' flex-row ml-5 col-span-10'>
          {/* NAVBAR */}
          <NavBar type={"Tutor"}/>
          <div className="  grid grid-cols-12 h-screen ">
              <CardUpdate/>
          </div>
        </div>
    </div>
    </>
  )
}

export default UpdateCourse