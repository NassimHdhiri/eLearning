import React, { useState, useEffect } from 'react';
import AsideBar from '../../components/Dash/AsideBar';
import MyStepper from '../../components/dashStudent/course/Stepper';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const DetailsCourse = () => {

  const [scrollPercentage, setScrollPercentage] = useState(0);
  const { clickedCourse } = useSelector((state: RootState) => state.dashStudentEnrolledCourses);


  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('your-container-id'); // Replace with the actual ID of your container
      if (!container) return;

      const containerHeight = container.clientHeight;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - containerHeight;

      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    const container = document.getElementById('your-container-id'); // Replace with the actual ID of your container
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className='m-auto ml-5 overflow-x-hidden overflow-y-hidden flex-row w-full h-screen grid grid-cols-12 justify-between'>
      <div className='w-[270px] -ml-2 font-bold col-span-2'>
        <AsideBar />
      </div>
      {/* main */}
      <div className='flex-row col-span-10 p-12 pt-7'>
        <p className='absolute top-0 right-0 mt-2 mr-2'>Scroll Percentage: {scrollPercentage.toFixed(2)}%</p>
        <div className='pl-6 flex m-auto relative border-2 border-slate-300 h-full rounded-[50px] items-center'>
          <MyStepper />
          <div id='your-container-id' className='w-full h-full border-l-2 overflow-y-auto'>
            <ol className='p-12 pt-0 h-[700px] mt-3 '>
                    <li className='text-start mt-12'>
                        <h1 className='text-3xl font-medium capitalize'>{clickedCourse.title}</h1>
                        <h3 className=' text-lg font-normal '>Description</h3>
                        <p className=' text-justify pt-5 leading-relaxed'>{clickedCourse.description}</p>
                        <div className='mt-9'>
                            <video className="w-full rounded-xl" autoPlay controls>
                            <source src={clickedCourse.title} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCourse;
