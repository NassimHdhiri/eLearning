import React from 'react'
import LogoutIcon from '../../assets/images/logout-svgrepo-com.svg';
import { display } from '../../features/dashstudent/IndexStudent';
import { useDispatch } from 'react-redux';
// type Props = {}props: Props



const LogoutBtn = () => {
  const dispatch=useDispatch();

  const handleDisplayConfirmDialoge=() => {
    dispatch(display(true));
  }
  
  return (
    <div className='absolute top-12 right-7 hover:cursor-pointer' onClick={handleDisplayConfirmDialoge}>
      <img className='' src={LogoutIcon} alt=""  width={22}/>
    </div>
  )
}

export default LogoutBtn