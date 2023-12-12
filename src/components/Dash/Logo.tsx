import React from 'react';
import LogoImage from '../../assets/images/Logo.svg';

// type Props = {}props: Props

const Logo = () => {
  return (
    <div className='absolute left-24 top-7'>
      <img src={LogoImage} alt="" className='w-16' />
    </div>
  );
}

export default Logo;
