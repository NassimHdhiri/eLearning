import React from 'react'
import SearchForm from './SearchForm'
import Notification from './Notification'
import LogoutBtn from '../LogoutBtn'
type Props = {
  type:string,
}

const Index = (props:Props) => {
  return (
    <div className='h-28 flex items-center relative'>
          <h2 className=' font-semibold text-2xl'>{props.type}</h2>
              <div className='w-32'></div>
              <div className='flex justify-between '> 
                <SearchForm/>
                <div className='w-12'></div>
                <Notification/>
              </div>
        <div className='absolute right-0 w-28 top-0'>
          <LogoutBtn/>
        </div>
</div>
  )
}

export default Index