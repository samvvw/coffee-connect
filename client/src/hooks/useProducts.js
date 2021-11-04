import { useState, useEffect } from 'react'
import axios from 'axios'
import { api } from '../config/api'

const useProducts = (farmId) => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const { data } = await axios.get(api.getProducts)
        setProducts(data)
    }

    const getProductsByFarm = () => {}

    useEffect(() => {
        if (!farmId) getProducts()
        else getProductsByFarm()
    }, [farmId])

    return products
}

export default useProducts
