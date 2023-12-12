import React from 'react'
import CoursImage from "../../../assets/images/courses_images_details/webdevelopment.jpg"
import ProgressBar from '../enrolledCourses/ProgressBar'
import { useDispatch } from 'react-redux'
import { showClickedHistory } from '../../../features/dashstudent/History'

type Interaction={
    materialTitle:string,
    dateInteraction:string,
    typeOfInteraction:string
}

type History={
    courseId:string,
    courseTitle:string,
    courseTutorName:string,
    percentageOfCompletion:string,
    interactions:Interaction[],
}

type ItemHistory={
  history:History
}


const ItemHistory = (props:ItemHistory) => {
  const dispatch =useDispatch();

  const handleClickedHistory=()=>{
    dispatch(showClickedHistory(props.history.courseId))
  }

  const percentage = parseInt(props.history.percentageOfCompletion, 10);
  return (
    <div onClick={handleClickedHistory} className="flex w-[] h-28 rounded-2xl shadow-lg hover:cursor-pointer hover:bg-slate-100 border-2 ">
            <img src={CoursImage} alt="" width={130} className='rounded-2xl m-3' />
            <div className='flex flex-col text-start gap-1 w-full p-4 pl-2'>
                <h6 className=' truncate'>{props.history.courseTitle}</h6>
                <p className='pb-2 text-sm text-gray-400'>{props.history.courseTutorName}</p>
                <ProgressBar percentage={percentage}/>
            </div>
        </div>
  )
}

export default ItemHistory