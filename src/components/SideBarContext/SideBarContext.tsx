'use client';
import Context from '@/Context/Context';
import SideBarHeading from '../SideBarHeading/SideBarHeading'
import SideBarSize from '../SideBarSize/SideBarSize'

function SideBarContext() {
  return (
    // <Context>
      <>
        <SideBarHeading/>
       <SideBarSize/> 
      {/* <SideBarContext */}
      </>
    // </Context>
  )
}

export default SideBarContext
