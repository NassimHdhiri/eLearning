import React from 'react'
import Avatar from '../../components/dashStudent/index.tsx/Avatar'
import LogoutBtn from '../../components/Dash/LogoutBtn'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
// type Props = {}
import Assignment from '../../components/dashTutor/index/Assignment'
// import Assignment from '../../dashTutor/index/Assignment'

const ProfileTutor = () => {
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
        <Assignment/>
    </div>
  )
}

export default ProfileTutor