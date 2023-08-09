import React from 'react'
import Singlepro from './Singlepro'
import "../CSS/Dashboard.css"
import { Text } from '@chakra-ui/react'

const Dashboard = () => {
  return (
    <>
    <Text>Make Your First Bid</Text>
      <div className="main-dashboard-div">
        <Singlepro />
        <Singlepro />
        <Singlepro />
        <Singlepro />
        <Singlepro />
        <Singlepro />
        <Singlepro />
      </div>
    </>
  )
}

export default Dashboard