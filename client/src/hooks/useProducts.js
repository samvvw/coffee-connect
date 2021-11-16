import { useState, useEffect } from 'react'
import axios from 'axios'
import { api } from '../config/api'

const useProducts = (queryString = '', farmId) => {
    const [products, setProducts] = useState([])

    const getProducts = async (queryString = '') => {
        const { data } = await axios.get(`${api.products}?${queryString}`)
        setProducts(data)
    }

    const getProductsByFarm = () => {}

    useEffect(() => {
        if (!farmId) getProducts()
        else getProductsByFarm()
    }, [farmId])

    return [products, getProducts]
}

export default useProducts
