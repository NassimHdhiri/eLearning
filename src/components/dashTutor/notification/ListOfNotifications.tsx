import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import ItemOfNotification from './ItemOfNotification';

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

const ListOfNotifications = (props:Props) => {

  return (
    <div className='flex flex-col p-4 pt-12 ml-12 w-[420px] border-2 border-slate-300 h-[620px] rounded-[50px]'>
      <div className='overflow-y-auto flex flex-col gap-4'>
        {props.courses.map((course: Course) => (
          <ItemOfNotification key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default ListOfNotifications;
