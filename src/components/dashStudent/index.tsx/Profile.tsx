import React from 'react'
import Avatar from './Avatar'
import Calender from './Calender'
import Homeworks from './Homeworks'
import LogoutBtn from '../../Dash/LogoutBtn'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'// type Props = {}
import Assignments from '../../../pages/dash_tutor/Assignments'
import Assignment from '../../dashTutor/index/Assignment'

const Profile = () => {
  const {pseudo,dateInscription}=useSelector((state:RootState) => state.dashStudentIndex)
  return (
    <div>
        <h2 className='absolute top-12 text-xl font-medium'>Profile</h2>
        <LogoutBtn/>
        <Avatar/>
        {/* <Calender/> */}
        <div className='mt-8 -ml-6 '>
          <p className=" capitalize font-semibold text-2xl">{pseudo}</p>
          <p className=" lowercase mt-2 text-lg text-slate-700 ">{dateInscription}</p>
        </div>
        <hr className='w-48 m-auto mt-5 text-slate-800'/>
        <Homeworks/>
    </div>
  )
}

export default Profile