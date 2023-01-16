import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Payment from './Payment';
import { ContextGlobal } from '../GlobalContext/ContextFun';
import './css/Login.css'

const Product = () => {
    const contextData = useContext(ContextGlobal)
    const { GlobalData, setGlobalData } = contextData
    console.log("in Product", GlobalData)
    const [show, setShow] = useState(false)
    const [sortState, setSortState] = useState("none");
    const sortMethods = {
        none: { method: (a, b) => null },
        ascending: { method: (a, b) => (a.price < b.price ? -1 : 1) },
        descending: { method: (a, b) => (a.price > b.price ? -1 : 1) },
    };

    const [fake, setFake] = useState([]);
    console.log(fake)
    useEffect(() => {
        fakeStore()
    }, [])
    const navigate = useNavigate()

    const goToPayment = (data) => {
        // <Payment data={data} />
        //console.log("hello", data)
        setGlobalData(data)
        navigate("/productDescription", { data: data })
    }

    const fakeStore = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        const jsonData = await response.data
        setFake(jsonData)
        //console.log(jsonData)
    }


    useEffect(() => {

    }, [fake])
    return (
        <div>
            <h2>Product Page</h2>
            <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
                <option value="DEFAULT" disabled>None</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
            Sort
            {fake.sort(sortMethods[sortState].method).map((values) => {
                return (
                    <>
                        <div style={{ marginLeft: "35%", marginBottom: '5%', fontFamily: 'serif' }}>{values.title}</div>
                        <img onClick={() => goToPayment(values)} style={{ width: '250px' }} src={values.image} alt="Product Image" />

                        <h2 style={{ marginBottom: "1%", marginLeft: "47%" }}>$ {values.price}</h2>
                        <h4 style={{ marginBottom: "1%", marginLeft: "47%" }}>Ratings : {values.rating.rate}</h4>
                        <br />
                        <button style={{ marginBottom: "5%", marginLeft: "40%" }} onClick={() => goToPayment(values)}>Buy Now</button>
                    </>
                )
            })}
        </div>
    )
}

export default Product