import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

// type Props = {}



const TableHistory : React.FC = ()=>{
    const {clickedHistory}=useSelector((state:RootState)=>state.dashStudentHistory)
  return (
    <div className='ml-7 w-[630px] border-2 border-slate-300 h-[620px] rounded-[50px] '>
      <div className='p-5 pt-12  overflow-y-auto'>
    <div className="relative  sm:rounded-lg shadow-lg">
           <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                   <tr>
                       <th scope="col" className="px-6 py-3">
                           Material
                       </th>
                       <th scope="col" className="px-6 py-3">
                           Date
                       </th>
                       <th scope="col" className="px-6 py-3">
                           Interaction type
                       </th>
                      
                       
                   </tr>
               </thead>
               <tbody>

                {  
                    clickedHistory.interactions.map((interaction) => (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={interaction.materialTitle}>
                        <th scope="row" className="px-6 max-w-[276px] truncate py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {interaction.materialTitle}
                        </th>
                        <td className="px-6 py-4">
                          {interaction.materialTitle}
                        </td>
                        <td className="px-6 py-4">
                          {interaction.typeOfInteraction}
                        </td>
                      </tr>
                    ))
                  
                  
                }
               </tbody>
           </table>
       </div>
   </div>
    </div>
    
  )
}


export default TableHistory