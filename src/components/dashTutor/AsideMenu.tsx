import React, { useEffect, useState } from 'react'
import HomeImage from '../../assets/images/Home.svg';
import MycoursesImage from '../../assets/images/Book.svg';
import HomeworkImage from '../../assets/images/Homework.svg';
import HistoryImage from '../../assets/images/History.svg';
import GradImage from '../../assets/images/Grades.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// type Props = {}props: Props


const AsideMenu = () => {
  const location = useLocation();
  const [fullPath, setFullPath] = useState(location.pathname);

  useEffect(() => {
    // Update fullPath when the route changes
    setFullPath(location.pathname);
  }, [location]);

  console.log(fullPath.includes("enrolled-courses"));

  return (
    <div className='ml-8 mt-28'>
      <ul className='m-auto'>
       <Link to={"/tutor/id"}>
          <li className={(fullPath === "/tutor/id" ? "bg-[#9DACFF]" : "bg-[#D9D9D9]") + " w-[200px] hover:cursor-pointer hover:bg-[#9DACFF] hover:bg-opacity-50 h-[46px] rounded-lg grid grid-cols-12 items-center bg-opacity-50"}>
                <img  className=" col-span-2 ml-4" src={HomeImage} alt="" width={26} />
                <p    className=' col-span-8 '>Dashboard</p>
            </li>
       </Link>
        <Link to={"/tutor/id/mycourses"}>
            <li className={(fullPath.includes("mycourses") ? "bg-[#9DACFF]" : "bg-[#D9D9D9]") + " mt-[30px] w-[200px] hover:cursor-pointer hover:bg-[#9DACFF] hover:bg-opacity-50 h-[40px] rounded-lg grid grid-cols-12 items-center bg-opacity-50"}>
                <img  className=" col-span-2 ml-4" src={MycoursesImage} alt="" width={26} />
                <p    className=' col-span-8 '>My courses</p>
            </li>
        </Link>
        <Link to={"/tutor/id/assignment"}>
            <li className={(fullPath === "/tutor/id/assignment" ? "bg-[#9DACFF]" : "bg-[#D9D9D9]") + ' mt-[20px] w-[200px] hover:cursor-pointer hover:bg-[#9DACFF] hover:bg-opacity-50 h-[40px] rounded-lg grid grid-cols-12 items-center bg-opacity-50'}>
                <img  className=" col-span-2 ml-4" src={HomeworkImage} alt="" width={26} />
                <p    className=' col-span-8 '>Assignment</p>
            </li>
        </Link>
        <Link to={"/tutor/id/notifications"}>
            <li className={(fullPath === "/tutor/id/notifications" ? "bg-[#9DACFF]" : "bg-[#D9D9D9]") + ' mt-[20px] w-[200px] hover:cursor-pointer hover:bg-[#9DACFF] hover:bg-opacity-50 h-[40px] rounded-lg grid grid-cols-12 items-center bg-opacity-50'}>
                <img  className=" col-span-2 ml-4" src={HistoryImage} alt="" width={26} />
                <p    className=' col-span-8 '>Notifications</p>
            </li>
        </Link>
      </ul>
    </div>
  )
}

export default AsideMenu