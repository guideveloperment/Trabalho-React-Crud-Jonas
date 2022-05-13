import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ToList from '../../components/Tolist/List/ToList'
import { baseUrl } from '../../environments'


function ToListCustomer(props) {

    const URL = `${baseUrl}/customer`

    const [customer, setCustomer] = useState([])

    useEffect(() => {
        
        getCustomers()
    },[])


    
    const getCustomers = () => {
        axios.get(`${URL}`)
        .then((response) => {
            setCustomer(response.data)
        })
    }

    const deleteCustomer = (id) => {
        axios.delete(`${URL}/${id}`)
        .then((response) => {
            getCustomers()

        })
    }

    return (
        <>
           
            <ToList 
            
            user = {customer} 
            
            delete={deleteCustomer}
            />
        </>
    )
}

export default ToListCustomer