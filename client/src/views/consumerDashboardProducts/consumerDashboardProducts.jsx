import { useContext, useEffect, useState } from 'react'
import { LoggedNavBar } from '../../components'
import DashboardProducts from '../../components/consumerDashboardComponents/dashboardProducts/dashboardProducts'
import { UserContext } from '../../context/userContext/userContext'

export default function ConsumerDashboardProducts() {
    const { token } = useContext(UserContext)
    const [likedProducts, setLikedProducts] = useState([])

    // likedProducts.map((product) => {
    //     return product.size.map((size) => {
    //         return size
    //     })
    // })

    useEffect(() => {
        if (token) {
            const controller = new AbortController()
            const { signal } = controller

            fetch(`/api/product/list?token=${token}`, { signal })
                .then((response) => {
                    response.json().then((data) => {
                        setLikedProducts(data)
                    })
                })
                .catch((error) => console.log(error))
            return () => {
                controller.abort()
            }
        }
    }, [token])
    return (
        <>
            <LoggedNavBar />
            <DashboardProducts
                likedProducts={likedProducts}
                setLikedProducts={setLikedProducts}
            />
        </>
    )
}
