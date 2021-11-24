import { useCallback, useEffect, useState } from 'react'
import { theme } from '../../../theme/theme'
import OriginCheckboxes from '../sortBy/originCheckboxes/originCheckboxes'
import PriceSlider from '../sortBy/priceSlider/priceSlider'
import RoastLevelCheckboxes from '../sortBy/roastLevelCheckboxes/roastLevelCheckboxes'
import { Container } from './sortByMobile.styles'

const SortByMobile = ({ data, onChange, type }) => {
    const [queryFilters, setQueryFilters] = useState({
        priceMin: 1,
        priceMax: 150,
        roastLevel: [],
        origin: [],
    })

    const roastFilter = (value, checked) => {
        if (checked) {
            setQueryFilters((prevQueryFilters) => ({
                ...prevQueryFilters,
                roastLevel: [
                    ...prevQueryFilters.roastLevel,
                    `roastLevel[]=${value}`,
                ],
            }))
        } else {
            setQueryFilters((prevQueryFilters) => ({
                ...prevQueryFilters,
                roastLevel: prevQueryFilters.roastLevel.filter(
                    (roast) => roast !== `roastLevel[]=${value}`
                ),
            }))
        }
    }

    const originFilter = (value, checked) => {
        if (checked) {
            setQueryFilters((prevQueryFilters) => ({
                ...prevQueryFilters,
                origin: [...prevQueryFilters.origin, `origin[]=${value}`],
            }))
        } else {
            setQueryFilters((prevQueryFilters) => ({
                ...prevQueryFilters,
                origin: prevQueryFilters.origin.filter(
                    (origin) => origin !== `origin[]=${value}`
                ),
            }))
        }
    }

    const buildQueryString = useCallback(() => {
        const minPrice = `minPrice=${queryFilters.priceMin}`
        const maxPrice = `maxPrice=${queryFilters.priceMax}`
        const roastLevel = queryFilters.roastLevel.reduce((accum, current) => {
            return (accum += `&${current}`)
        }, '')
        const origin = queryFilters.origin.reduce((accum, current) => {
            return (accum += `&${current}`)
        }, '')

        if (type === 'marketplace') {
            onChange(`${minPrice}&${maxPrice}${roastLevel}${origin}`)
        } else {
            onChange(`${origin}`)
        }
    }, [
        queryFilters.priceMax,
        queryFilters.priceMin,
        type,
        queryFilters.origin,
        queryFilters.roastLevel,
        onChange,
    ])

    useEffect(() => {
        buildQueryString()
    }, [buildQueryString])

    const handlePriceChange = useCallback(({ min, max }) => {
        setQueryFilters((prevQueryFilters) => ({
            ...prevQueryFilters,
            priceMin: min,
            priceMax: max,
        }))
    }, [])

    return (
        <Container>
            <div className="options">
                {type === 'marketplace' && (
                    <div className="filter slider">
                        <PriceSlider
                            min={1}
                            max={150}
                            onChange={handlePriceChange}
                        />
                    </div>
                )}

                {type === 'marketplace' && (
                    <div className="filter">
                        <RoastLevelCheckboxes onChange={roastFilter} />
                    </div>
                )}

                <div className="filter">
                    <OriginCheckboxes onChange={originFilter} />
                </div>
            </div>
        </Container>
    )
}

export default SortByMobile
