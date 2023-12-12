import React from 'react'
import CoursImage from "../../../assets/images/courses_images_details/webdevelopment.jpg"
import { useDispatch } from 'react-redux'
import { showClickedNotification } from '../../../features/dashTutor/Notifications'

type Course={
  id:string,
  title:string,
  description:string,
  enrolledDate:string,
  percentageOfCompletion:string,
  lastSeen:string,
  tutorName:string
}

type ItemCourse={
  course:Course
}


const ItemOfNotification = (props:ItemCourse) => {
  const dispatch =useDispatch();

  const handleClickedCouse=()=>{
    dispatch(showClickedNotification(props.course.id))
    console.log("Show Notifications")
  }

  return (
    <div onClick={handleClickedCouse} className="flex w-[] h-28 rounded-2xl shadow-lg hover:cursor-pointer hover:bg-slate-100 border-2 ">
            <img src={CoursImage} alt="" width={130} className='rounded-2xl m-3' />
            <div className='flex flex-col text-start gap-1 w-full p-4 pl-2'>
                <h6 className=' truncate'>{props.course.title}</h6>
                {/* <p className='pb-2 text-sm text-gray-400'>{props.course.tutorName}</p> */}
                <p>enrolled students :30</p>
                <p>max student : 40</p>

            </div>
        </div>
  )
}

export default ItemOfNotification