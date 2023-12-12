import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import ItemHistory from './ItemHistory';

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

type Props={
  history:History[],
}

const ListOfHistories = (props:Props) => {

  return (
    <div className='flex flex-col p-4 pt-12 ml-12 w-[420px] border-2 border-slate-300 h-[620px] rounded-[50px]'>
      <div className='overflow-y-auto flex flex-col gap-4'>
        {props.history.map((history: History) => (
          <ItemHistory key={history.courseId} history={history} />
        ))}
      </div>
    </div>
  );
};

export default ListOfHistories;
