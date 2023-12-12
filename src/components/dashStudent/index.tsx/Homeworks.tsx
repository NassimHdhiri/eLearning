import React from 'react'
import WebdesImage from "../../../assets/images/homeworkWebDes.svg"
import WebdevImage from "../../../assets/images/homeworkWebDev.svg"
import PhotoImage from "../../../assets/images/homeworkPhotography.svg"
import MarketingImage from "../../../assets/images/homeworkMarketing.svg"
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { Link } from 'react-router-dom'

// type Props = {}

const Homeworks = () => {
    const {homework}=useSelector((state:RootState) =>state.dashStudentIndex)
  return (
        
<div className="overflow-y-auto h-[292px] absolute bottom-14 w-60 m-auto ml-5 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className=" text-base font-bold leading-none text-gray-900 dark:text-white">Homework</h5>
        <Link to="/student/id/history" className=" text-xs font-medium text-blue-600 hover:underline dark:text-blue-500 underline">
            View all
        </Link>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            
            
           { homework.map((item)=>
           <li className="py-3 sm:py-2 hover:cursor-none">
                <div className="flex items-center hover:bg-slate-100 rounded-lg">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={WebdesImage} alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0 ms-4 text-start">
                        <p className="text-xs capitalize font-medium text-gray-900 truncate dark:text-white">
                            {item.title}
                        </p>
                        <p className="text-xs lowercase text-gray-500 truncate dark:text-gray-400">
                            {item.description}
                        </p>
                    </div>
                    
                </div>
            </li>
           )
            }     
        </ul>
   </div>
</div>

  )
}

export default Homeworks