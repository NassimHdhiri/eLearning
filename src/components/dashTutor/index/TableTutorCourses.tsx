import React from 'react'
import { Table } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Link } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';

// type Props = {}
type Course={
      title:string,
      enrolledDate:string,
      completedPourcentage:string,
      lastSeen:string,
      tutorName:string
}

const TableTutorCourses = () => {
const navigate = useNavigate();

const handleNavigate = () => {
    // Assuming you have a route like "/enrolled-courses/:id" /tutor/id/mycourses/idCourse
    navigate("/tutor/id/mycourses/idCourse");
  };
    //get data from redux store 
    const { courses } = useSelector((state: RootState) => state.dashStudentIndex);
    return (
    // Import necessary types from 'flowbite-react'


    <div className="mb-0 w-full h-72 overflow-y-auto shadow-lg rounded-lg ">
<Table hoverable>
    <Table.Head className=' '>
        <Table.HeadCell>Title</Table.HeadCell>
        <Table.HeadCell>Uploaded Date</Table.HeadCell>
        <Table.HeadCell>Enrolled </Table.HeadCell>
        <Table.HeadCell>Max Capacity</Table.HeadCell>
    </Table.Head>
<Table.Body className="divide-y hover:cursor-pointer">
    {
            courses.map((course, index) => (
            <Table.Row key={index} onClick={handleNavigate} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {course.title}
                    </Table.Cell>
                    <Table.Cell>{course.enrolledDate}</Table.Cell>
                    <Table.Cell>{course.percentageOfCompletion}</Table.Cell>
                    <Table.Cell>{course.lastSeen}</Table.Cell>                
            </Table.Row>
    ))
    }
    </Table.Body>
    </Table>
</div>
);
}



export default TableTutorCourses