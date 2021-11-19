import { useState, useEffect } from 'react'
import axios from 'axios'
import { api } from '../config/api'

const useFarms = (queryString = '') => {
    const [farms, setFarms] = useState([])

    const getFarms = async (queryString = '') => {
        const { data } = await axios.get(`${api.farms}?${queryString}`)
        setFarms(data)
    }

    useEffect(() => {
        getFarms()
    }, [])

    return [farms, getFarms]
}

export default useFarms
