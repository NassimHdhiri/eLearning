import React from 'react'
import AsideBar from '../../components/Dash/AsideBar'
import NavBar from '../../components/Dash/navbar/Index'
import Homeworkdetails from '../../components/dashStudent/homework/HomeworkDetails'
import ListofHomework from '../../components/dashStudent/homework/ListofHomework'
import ConfirmDialogeLogout from '../../components/dashStudent/index.tsx/ConfirmDialogeLogout';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
// type Props = {name:string}


function Homework() {
  const { displaying } = useSelector((state: RootState) => state.dashStudentIndex);
  return (
    <>
    {displaying && <ConfirmDialogeLogout />}
    <div className='m-auto ml-5 overflow-x-hidden overflow-y-hidden flex-row w-full h-screen grid grid-cols-12 justify-between'>
        <div className='w-[270px]  -ml-2  font-bold col-span-2'>
          <AsideBar/>
        </div>
        {/* main */}
        <div className=' flex-row ml-5 col-span-10'>
          {/* NAVBAR */}
                  <NavBar type={"Student"}/>

          {/* center buttom bg-orange-300 bg-yellow-400 */}
          <div className="  grid grid-cols-12 h-screen ">
              <div className=' col-span-5 items-start   ' >
                  {/* <HomeworkState/> */}
                  <ListofHomework/>
              </div>
              <div className=' '>
                  <Homeworkdetails/>
              </div>
          </div>
        </div>
    </div>
    </>
    
  )
}

export default Homework