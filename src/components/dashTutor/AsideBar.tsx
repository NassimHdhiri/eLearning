import React from 'react'
import Logo from '../Dash/Logo'
import AsideMenu from './AsideMenu'
import SVGTutor from './SVGTutor'

// type Props = {}

const AsideBar = () => {
  return (
    <div className='-ml-6'>   
        <Logo/>
        <AsideMenu/>
        <SVGTutor/>
    </div>
  )
}

export default AsideBar