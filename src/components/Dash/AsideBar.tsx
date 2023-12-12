import React from 'react'
import AsideMenu from './AsideMenu'
import Logo from './Logo'
import LogoutBtn from './LogoutBtn'
import SVGStudent from './SVGStudent'
import ToggledBtn from './ToggledBtn'


const AsideBar = () => {
  return (
    <div className='-ml-6'>   
        <Logo/>
        <AsideMenu/>
        <SVGStudent/>
    </div>
  )
}

export default AsideBar