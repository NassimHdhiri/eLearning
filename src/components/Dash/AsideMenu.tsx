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
       <Link to={"/student/id"}>
          <li className={(fullPath === "/student/id" ? "bg-[#9DACFF]" : "bg-[#D9D9D9]") + " w-[200px] hover:cursor-pointer hover:bg-[#9DACFF] hover:bg-opacity-50 h-[46px] rounded-lg grid grid-cols-12 items-center bg-opacity-50"}>
                <img  className=" col-span-2 ml-4" src={HomeImage} alt="" width={26} />
                <p    className=' col-span-8 '>Dashboard</p>
            </li>
       </Link>
        <Link to={"/student/id/enrolled-courses"}>
            <li className={(fullPath.includes("enrolled-courses") ? "bg-[#9DACFF]" : "bg-[#D9D9D9]") + " mt-[30px] w-[200px] hover:cursor-pointer hover:bg-[#9DACFF] hover:bg-opacity-50 h-[40px] rounded-lg grid grid-cols-12 items-center bg-opacity-50"}>
                <img  className=" col-span-2 ml-4" src={MycoursesImage} alt="" width={26} />
                <p    className=' col-span-8 '>My courses</p>
            </li>
        </Link>
        <Link to={"/student/id/homework"}>
            <li className={(fullPath === "/student/id/homework" ? "bg-[#9DACFF]" : "bg-[#D9D9D9]") + ' mt-[20px] w-[200px] hover:cursor-pointer hover:bg-[#9DACFF] hover:bg-opacity-50 h-[40px] rounded-lg grid grid-cols-12 items-center bg-opacity-50'}>
                <img  className=" col-span-2 ml-4" src={HomeworkImage} alt="" width={26} />
                <p    className=' col-span-8 '>Homework</p>
            </li>
        </Link>
        <Link to={"/student/id/history"}>
            <li className={(fullPath === "/student/id/history" ? "bg-[#9DACFF]" : "bg-[#D9D9D9]") + ' mt-[20px] w-[200px] hover:cursor-pointer hover:bg-[#9DACFF] hover:bg-opacity-50 h-[40px] rounded-lg grid grid-cols-12 items-center bg-opacity-50'}>
                <img  className=" col-span-2 ml-4" src={HistoryImage} alt="" width={26} />
                <p    className=' col-span-8 '>History</p>
            </li>
        </Link>
        <Link to={"/student/id/grades"}>
            <li className={(fullPath === "/student/id/grades" ? "bg-[#9DACFF]" : "bg-[#D9D9D9]") + ' mt-[20px] w-[200px] hover:cursor-pointer hover:bg-[#9DACFF] hover:bg-opacity-50 h-[40px] rounded-lg grid grid-cols-12 items-center bg-opacity-50'}>
                <img  className=" col-span-2 ml-4" src={GradImage} alt="" width={26} />
                <p    className=' col-span-8 '>Grades</p>
            </li>
        </Link>
      </ul>
    </div>
  )
}

export default AsideMenu