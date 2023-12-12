import React from 'react'
import FormAddCourse from './FormAddCourse'

// type Props = {}

const CardAdd :React.FC= () => {
    return(
        <div className='ml-24 p-20 -mt-0 w-[900px] border-2 border-slate-300 h-[620px] rounded-[50px]'>
            <FormAddCourse/>
        </div>
    )
}

export default CardAdd