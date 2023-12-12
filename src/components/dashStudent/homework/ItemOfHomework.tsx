import React from 'react'
import CoursImage from "../../../assets/images/courses_images_details/webdevelopment.jpg"

// type Props = {}

const ItemOfHomework = ( ) => {
  return (
    <div className="flex w-[] h-28 rounded-2xl shadow-lg hover:cursor-pointer hover:bg-slate-100 border-2 ">
            <img src={CoursImage} alt="" width={130} className='rounded-2xl m-3' />
            <div className='flex flex-col text-start gap-1 w-full p-4 pl-2'>
                <h6 className=' truncate'>React state management</h6>
                <p className=' text-xs text-gray-400'>deadline: 12/7/2023</p>
                <div className='flex justify-between pt-1'>
                    <a className=' text-xs underline'>feedback</a>
                    <p className=' text-xs font-semibold text-red-500'>note : 20</p>
                </div>
            </div>
    </div>
  )
}

export default ItemOfHomework