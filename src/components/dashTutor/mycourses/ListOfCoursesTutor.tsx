import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import ItemCourseTutor from './ItemCourseTutor';
import { useNavigate } from 'react-router-dom';

type Course={
  id:string,
  title:string,
  description:string,
  enrolledDate:string,
  percentageOfCompletion:string,
  lastSeen:string,
  tutorName:string
}

type Props={
  courses:Course[],
}

const ListOfCoursesTutor = (props:Props) => {
    const navigate=useNavigate();

    const AddCourse=()=>{
        navigate("/tutor/id/mycourses/add-courses");
      }

  return (
    <div className='flex flex-col p-4 pt-12 ml-12 w-[420px] border-2 border-slate-300 h-[620px] rounded-[50px]'>
      <div className='overflow-y-auto flex flex-col gap-4'>
        <button onClick={AddCourse} className='w-52 bg-gray-200 m-auto  mb-2' > Add Course</button>

        {props.courses.map((course: Course) => (
          <ItemCourseTutor key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default ListOfCoursesTutor;
