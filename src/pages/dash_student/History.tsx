import React from 'react'
import AsideBar from '../../components/Dash/AsideBar'
import NavBar from '../../components/Dash/navbar/Index'
import TableHistory from '../../components/dashStudent/history/TableHistory'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import ListOfHistories from '../../components/dashStudent/history/ListOfHistories'
import ConfirmDialogeLogout from '../../components/dashStudent/index.tsx/ConfirmDialogeLogout';

const History = () => {
  const { histories } = useSelector((state: RootState) => state.dashStudentHistory);
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
              <NavBar type={"Student"}/>

      {/* center buttom bg-orange-300 bg-yellow-400 */}
      <div className="  grid grid-cols-12 h-screen ">
          <div className=' col-span-5 items-start   ' >
              <ListOfHistories history={histories}/>
          </div>
          <div className=' '>
              <TableHistory/>
          </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default History