import { useState, useCallback } from 'react'
import axios from 'axios'
import { api } from '../config/api'

const useProducts = (queryString = '', farmId) => {
    const [products, setProducts] = useState([])

    const getProducts = useCallback(async (queryString = '') => {
        const { data } = await axios.get(`${api.products}?${queryString}`)
        setProducts(data)
    }, [])

    // const getProductsByFarm = () => {}

    // useEffect(() => {
    //     if (!farmId) getProducts()
    //     else getProductsByFarm()
    // }, [farmId, getProducts])

    return [products, getProducts]
}

export default useProducts
