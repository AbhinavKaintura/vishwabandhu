import React from 'react'
import HeaderBar from '@/components/common/header-bar/page'
import NavBar from '@/components/common/nav-bar/page'
import Title from '@/components/donors-comp/title/page'
import DonorMemorial from '@/components/donors-comp/list/page'
import DonorList from '@/components/donors-comp/col-list/page'


const Users = () => {
  return (
    <div>
      <HeaderBar/>
      <NavBar bg_color='bg-white'/>
      {/* <Title/> */}
      {/* <DonorMemorial/> */}
      <DonorList />
    </div>
  )
}

export default Users
