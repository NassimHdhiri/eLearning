import React from 'react'
import ItemOfHomework from './ItemOfHomework'
import HomeworkState from './HomeworkState'

// type Props = {}

const ListofHomework = () => {
  return (
    <div  className='flex flex-col p-4  ml-12  w-[420px] border-2 border-slate-300 h-[620px] rounded-[50px]'>
       <HomeworkState/>
       <div className=' overflow-y-auto flex  flex-col gap-4'>
        <ItemOfHomework/>
        <ItemOfHomework/>
        <ItemOfHomework/>
        <ItemOfHomework/>
        <ItemOfHomework/>
       </div>
    </div>
  )
}

export default ListofHomework