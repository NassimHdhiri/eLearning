import React from 'react';
import AsideBar from '../../components/Dash/AsideBar';
import SearchForm from '../../components/Dash/navbar/SearchForm';
import Notification from '../../components/Dash/navbar/Notification';
import CardCourseRecently from '../../components/dashStudent/index.tsx/CardCourseRecently';
import '../../assets/style/cardCourseRecently.css';
import TableEnrolledCourses from '../../components/dashStudent/index.tsx/TableEnrolledCourses';
import Profile from '../../components/dashStudent/index.tsx/Profile';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ConfirmDialogeLogout from '../../components/dashStudent/index.tsx/ConfirmDialogeLogout';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {

  const { recentlySeen, displaying } = useSelector((state: RootState) => state.dashStudentIndex);
  const portionRecentlySeen = recentlySeen.slice(0, 3);

  return (
    <>
        {displaying && <ConfirmDialogeLogout />}
        <div className='m-auto ml-5 overflow-x-hidden overflow-y-hidden flex-row w-full h-screen grid grid-cols-12 justify-between'>
          {/* Sidebar */}
          <div className='w-[270px] -ml-2 font-bold col-span-2'>
            <AsideBar />
          </div>

          {/* Main Content */}
          <div className='felx flex-row ml-5 col-span-8'>
            {/* Navbar */}
            <div className='h-28 flex items-center'>
              <h2 className='font-semibold text-2xl'>Student</h2>
              <div className='w-32'></div>
              <div className='flex justify-between '>
                <SearchForm />
                <div className='w-12'></div>
                <Notification />
              </div>
            </div>

            {/* Center Content */}
            <div className='grid grid-row-12 h-screen'>
              <div className='flex flex-col items-start -mt-7'>
                <h3 className='ml-12 mt-9 text-lg'>Recently</h3>
                <div className='flex mt-5 justify-between gap-12 m-auto'>
                  {portionRecentlySeen.map((item) => (
                    <CardCourseRecently
                      title={item.title}
                      lastDate={item.lastSeen}
                      percentageOfCompletion={item.percentageOfCompletion}
                    />
                  ))}
                </div>
              </div>
              <div className='mb-0 -mt-28 ml-auto mr-auto flex flex-col items-start w-[80%]'>
               <div className='flex justify-between w-full ml-4'>
                <h3 className='-ml-12 mb-5 text-lg'>My courses</h3>
                  <Link to="/student/id/enrolled-courses" className="pr-12 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 underline">
                      View all
                  </Link>
               </div>
                
                
                <TableEnrolledCourses />
              </div>
            </div>
          </div>

          {/* Profile */}
          <div className='-ml-9 -mr-4 col-span-2 '>
            <Profile />
          </div>
        </div>
    </>
  );
};

export default Index;
