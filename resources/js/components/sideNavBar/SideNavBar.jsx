import React from 'react'
import SideNavBarHeader from './SideNavBarHeader'
import SideNavBarContent from './SideNavBarContent'
import SideNavBarFooter from './SideNavBarFooter'

export default function SideNavBar() {
  return (
    <div>
        <SideNavBarHeader />
        <SideNavBarContent />
        <SideNavBarFooter />
    </div>
  )
}
