import React from 'react';
import CourseImage from '../../../assets/images/courses_images_details/webdevelopment.jpg';
import { MdKey } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiChatHistoryFill } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Link } from 'react-router-dom';

const AddCourse : React.FC= () => {
    const handleDelete=()=>{

    }

    const handleUpdate=()=>{
        console.log("update");
    }
    
    const handleAssignments=()=>{
        console.log("assignment");
    }
    
    const creatNewMeet=()=>{
        console.log("creating new meet");
    }

    const { clickedCourse } = useSelector((state: RootState) => state.dashStudentEnrolledCourses);

    return (
        <div className='ml-7 w-[630px] border-2 border-slate-300 h-[620px] rounded-[50px] '>
                <div className='w-[500px] m-auto flex flex-col gap-y-4 text-start'>
                <img src={CourseImage} alt="course image" className='m-auto h-[250px] mt-12 rounded-2xl' />
                {/* CRUD */}
                <div className='flex justify-between'>
                    <p onClick={handleDelete} className='hover:underline hover:cursor-pointer text-red-600'>delete</p>
                    <p onClick={handleUpdate} className='hover:underline hover:cursor-pointer text-blue-600'>update</p>
                    <p onClick={handleAssignments} className='hover:underline hover:cursor-pointer text-blue-600'>assignments</p>
                    <p onClick={creatNewMeet} className='hover:underline hover:cursor-pointer text-blue-600'>create new meet</p>
                </div>
                <div className='text-start flex flex-col gap-y-2'>
                    <h5 className='text-base font-medium'>Description</h5>
                    <p className='text-sm text-justify ml-1'>{clickedCourse.description}</p>
                </div>
                <h4 className='text-lg font-medium'>Infos</h4>
                <div className='ml-16 gap-x-12 grid grid-flow-row grid-cols-2 gap-y-2'>
                    <div className='cols-span-1 flex items-center gap-x-4'>
                        <MdKey className="text-xl" />
                        <p>{clickedCourse.id}</p>
                    </div>
                    <div className='cols-span-1 flex items-center gap-x-4'>
                        <BiSolidCategory className="text-xl" />
                        <p>IT</p>
                    </div>
                    <div className='cols-span-1 flex items-center gap-x-4'>
                        <FaChalkboardTeacher className="text-xl" />
                        <p>{clickedCourse.tutorName}</p>
                    </div>
                    <div className='cols-span-1 flex items-center gap-x-4'>
                        <RiChatHistoryFill className="text-xl" />
                        <p>{clickedCourse.lastSeen}</p>
                    </div>
                </div>
                
                <Link to="/student/id/enrolled-courses/courseId" className='bg-[#9DACFF] pt-2 text-white w-[60%] h-10 items-center self-center mt-3 rounded-lg text-center '>
                    add
                </Link>
                
            </div>
        </div>
    );
};

export default AddCourse;
