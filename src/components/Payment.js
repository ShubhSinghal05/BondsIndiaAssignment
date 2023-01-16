import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { ContextGlobal } from '../GlobalContext/ContextFun'

const Payment = (props) => {
  const contextData = useContext(ContextGlobal)
  const { GlobalData, setGlobalData } = contextData
  const navigate = useNavigate()

  const goToProduct = (data) => {
    alert("Payment made successfully")
    navigate("/product")
  }
  // console.log("GlobalData in Payment", GlobalData)

  return (
    <>
      <h2>Product Description</h2>
      <div>{GlobalData.title}</div>
      <img style={{ width: '250px' }} src={GlobalData.image} alt="Product Image" />
      <h3 style={{ marginLeft: "7%" }}>{GlobalData.description}</h3>
      <h1 style={{ marginLeft: "45%" }}>$ {GlobalData.price}</h1>
      <button style={{ marginLeft: "40%" }} onClick={() => goToProduct()}>Pay Now</button>
    </>
  )
}

export default Payment