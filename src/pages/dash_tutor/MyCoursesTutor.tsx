import React from 'react'
import AsideBar from '../../components/dashTutor/AsideBar'
import NavBar from '../../components/Dash/navbar/Index'
import DetailsCourse from '../../components/dashTutor/mycourses/DetailsCourses'
import ListOfCoursesTutor from '../../components/dashTutor/mycourses/ListOfCoursesTutor'
// type Props = {} props: Props
import ConfirmDialogeLogout from '../../components/dashStudent/index.tsx/ConfirmDialogeLogout';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const MyCoursesTutor = () => {

  const {courses}=useSelector((state:RootState)=> state.dashTutorEnrolledCourses)
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
        <NavBar type={"Tutor"} />

        {/* center buttom bg-orange-300 bg-yellow-400 */}
        <div className='grid grid-cols-12 h-screen '>
          <div className='col-span-5 items-start '>
            <ListOfCoursesTutor courses={courses}/>
          </div>
          <div className=''>
            <DetailsCourse />
          </div>
        </div> 
      </div>
    </div>
    </>
  )
}

export default MyCoursesTutor