import React from 'react'
import ItemOfAssignment from './ItemOfAssignment'

// type Props = {}

const ListOfAssignments = () => {
  return (
    <div  className='flex flex-col p-4  ml-12  w-[420px] border-2 border-slate-300 h-[620px] rounded-[50px]'>
       <div className=' overflow-y-auto flex  flex-col gap-4'>
        <ItemOfAssignment/>
        <ItemOfAssignment/>
        <ItemOfAssignment/>
        <ItemOfAssignment/>
        <ItemOfAssignment/>
       </div>
    </div>
  )
}

export default ListOfAssignments