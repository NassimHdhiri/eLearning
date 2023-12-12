import React from 'react'
import AvatarImage from '../../../assets/images/nassim.jpeg'
// type Props = {}

const Avatar = () => {
  return (
    <div className='ml-16 mt-32'>
        <img className="w-36 h-36 rounded-full" src={AvatarImage} alt="Rounded avatar"/>
    </div>
  )
}

export default Avatar