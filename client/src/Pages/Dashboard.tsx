import React, { useEffect, useState } from 'react'
import Singlepro from './Singlepro'
import "../CSS/Dashboard.css"
import { Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { GetAllBids } from "../Redux/Bids/Action"


const Dashboard = () => {
  const dispatch = useDispatch();
  //@ts-ignore
  const { bids } = useSelector(state => state.bidsReducer)
  const getLocalstorage = localStorage.getItem("Bids");

  const [getBid, setGetBids] = useState([])

  useEffect(() => {
    //@ts-ignore
    dispatch(GetAllBids())
    //@ts-ignore
    const parsedVal = JSON.parse(getLocalstorage)
    
    parsedVal.AllBids !== undefined ? setGetBids(parsedVal.AllBids) : setGetBids([])
  }, [dispatch])

  return (
    <>
      <Text fontWeight={800} fontSize={'xl'} textAlign={"center"} mt={"5"}>
        Make Your First Bid Now
      </Text>
      <div className="main-dashboard-div">

        {
          getBid.map((ele) => (
                //@ts-ignore
            <Singlepro image={ele.image} title={ele.title} desc={ele.desc} time={ele.timeleft} bids={ele.bids} />
          ))
        }
      </div>
    </>
  )
}

export default Dashboard