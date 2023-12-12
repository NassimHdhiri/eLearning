import React, { useState } from 'react'
import AsideBar from '../../components/dashTutor/AsideBar';
import NavBar from '../../components/Dash/navbar/Index';
import CardMeet from '../../components/dashTutor/mycourses/CardMeet';
import { useSelector } from 'react-redux'
import { RootState } from '../../store';
import { IoMdClose } from "react-icons/io";

// type Props = {} props: Props
const Meet = () => {
    const {clickedHistory}=useSelector((state:RootState)=>state.dashStudentHistory)
    const  [show,setShow] = useState<boolean>(false);

    const handleSubmit=()=>{

    }

    const handleDisplayListOfStudent=(showBool:boolean) => {
        setShow(showBool);
    }
  return (
    <div className='m-auto ml-5 overflow-x-hidden overflow-y-hidden flex-row w-full h-screen grid grid-cols-12 justify-between'>
        <div className='w-[270px]  -ml-2  font-bold col-span-2'>
          <AsideBar/>
        </div>
        {/* main */}
        <div className=' flex-row ml-5 col-span-10 relative'>
          {/* NAVBAR */}
          <p onClick={()=>handleDisplayListOfStudent(true)} className=' text-base hover:underline hover:cursor-pointer z-50 text-blue-500 absolute right-24 top-11'>List of Students</p>
          <NavBar type={"Tutor"}/>
          <div className="  grid grid-cols-12 h-screen ml-20 ">
            <CardMeet/>
            {
                (show)&&(
                    <form onSubmit={handleSubmit} className='shadow-lg mt-8 '>
                        <div className='absolute border-2 border-cyan-200 shadow-lg p-5 left-72 h-[570px] w-[450px] rounded-md bg-slate-50 z-50 '>
                <div className='absolute right-6 top-4 '>
                    <IoMdClose className='text-lg hover:cursor-pointer' onClick={()=>handleDisplayListOfStudent(false)}/>
                </div>
                <h4 className='pb-5 mt-4 font-medium text-lg'>List Of Students</h4>
                <hr />
                <br />
               <div className='h-[350px] overflow-y-auto'>
                    <table className="w-full mb-7 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Student Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Present
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Absent
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {clickedHistory.interactions.map((interaction, index) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={interaction.materialTitle}>
                        <th scope="row" className="px-6 max-w-[276px] truncate py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {interaction.materialTitle}
                        </th>
                        <td className="px-6 py-4">
                            <label>
                            <input type="radio" name={`status_${index}`} value="present" />
                            
                            </label>
                        </td>
                        <td className="px-6 py-4">
                            <label>
                            <input type="radio" name={`status_${index}`} value="absent" />
                            
                            </label>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
               </div>
               <button type="submit" className='-mb-4 bg-[#9DACFF] text-white w-[60%] h-10 items-center self-center mt-10 '>
                        Submit
                </button>
            </div>
</form>
                

                )
            }
          </div>
        </div>
    </div>
  )
}

export default Meet