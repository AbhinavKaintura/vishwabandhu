import React from 'react'
import HeaderBar from '@/components/common/header-bar/page'
import NavBar from '@/components/common/nav-bar/page'
import Title from '@/components/users-comp/title/page'
import DonorMemorial from '@/components/users-comp/list/page'
import DonorList from '@/components/users-comp/col-list/page'


const Users = () => {
  return (
    <div>
      <HeaderBar/>
      <NavBar bg_color='bg-white'/>
      <Title/>
      <DonorMemorial/>
      <div className="container mx-auto px-1 py-2 bg-[#f7f7f7]">
        <DonorList />
      </div>
    </div>
  )
}

export default Users