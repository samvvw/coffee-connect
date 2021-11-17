import { useEffect, useState } from 'react'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import Dropdown from 'react-bootstrap/Dropdown'
import classNames from 'classnames'
import RadioButton from '../radioButton/radioButton'
import PriceSlider from './priceSlider/priceSlider'
import { Container } from './sortBy.styles'
import RoastLevelCheckboxes from './roastLevelCheckboxes/roastLevelCheckboxes'
import OriginCheckboxes from './originCheckboxes/originCheckboxes'
import { theme } from '../../../theme/theme'

const priceSliderStyle = {
    border: `1px solid ${theme.pallette.black[500]}`,
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    maxWidth: '400px',
    width: '320px',
    marginLeft: '1rem',
    backgroundColor: '#fff',
    padding: '1rem 2rem 2rem 0.5rem',
}

const SortBy = ({ data, onChange, type }) => {
    const [queryFilters, setQueryFilters] = useState({
        priceMin: 1,
        priceMax: 1000,
        roastLevel: [],
        origin: [],
    })
    const [filterSelected, setFilterSelected] = useState('')
    const [filters, setFilters] = useState({
        price: false,
        roastLevel: false,
        origin: false,
    })

    const handleChange = (value, checked) => {
        if (!filterSelected) {
            setFilters((prevFilters) => ({ ...prevFilters, [value]: checked }))
        } else {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [filterSelected]: !prevFilters[filterSelected],
                [value]: checked,
            }))
        }

        if (!checked) {
            setFilterSelected('')
        } else {
            setFilterSelected(value)
        }
    }

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

    const buildQueryString = () => {
        const minPrice = `minPrice=${queryFilters.priceMin}`
        const maxPrice = `maxPrice=${queryFilters.priceMax}`
        const roastLevel = queryFilters.roastLevel.reduce((accum, current) => {
            return (accum += `&${current}`)
        }, '')
        const origin = queryFilters.origin.reduce((accum, current) => {
            return (accum += `&${current}`)
        }, '')

        const queryFilter = `${minPrice}&${maxPrice}${roastLevel}${origin}`
        onChange(queryFilter)
    }

    const priceClass = classNames({
        active: filters.price,
    })

    const roastClass = classNames({
        active: filters.roastLevel,
    })

    const originClass = classNames({
        active: filters.origin,
    })

    useEffect(() => {
        buildQueryString()
    }, [queryFilters])

    return (
        <Container>
            <div className="options">
                {type === 'marketplace' && (
                    <Dropdown className="d-inline">
                        <Dropdown.Toggle
                            variant="warning"
                            id="dropdown-autoclose-true"
                        >
                            Price
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={priceSliderStyle}>
                            <div className="price-slider">
                                <PriceSlider
                                    min={1}
                                    max={1000}
                                    onChange={({ min, max }) => {
                                        setQueryFilters((prevQueryFilters) => ({
                                            ...prevQueryFilters,
                                            priceMin: min,
                                            priceMax: max,
                                        }))
                                    }}
                                />
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                )}

                {type === 'marketplace' && (
                    <Dropdown className="d-inline ">
                        <Dropdown.Toggle
                            variant="warning"
                            id="dropdown-autoclose-true"
                        >
                            Roast Level
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={priceSliderStyle}>
                            <div className="price-slider">
                                <RoastLevelCheckboxes onChange={roastFilter} />
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                )}

                <Dropdown align="end" className="d-inline ">
                    <Dropdown.Toggle
                        variant="warning"
                        id="dropdown-autoclose-true"
                    >
                        Origin
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={priceSliderStyle}>
                        <div className="price-slider">
                            <OriginCheckboxes onChange={originFilter} />
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            {/* {data.map((filter, i) => (
                    <RadioButton
                        key={filter.id}
                        id={filter.id}
                        value={filter.value}
                        label={filter.label}
                        onChange={handleChange}
                    />
                ))} */}

            {/* <div className={`price-filter ${priceClass}`}>
                <PriceSlider
                    min={1}
                    max={1000}
                    onChange={({ min, max }) => {
                        setQueryFilters((prevQueryFilters) => ({
                            ...prevQueryFilters,
                            priceMin: min,
                            priceMax: max,
                        }))
                    }}
                />
            </div> */}

            {/* <div className={`roast-filter ${roastClass}`}>
                <RoastLevelCheckboxes onChange={roastFilter} />
            </div> */}

            {/* <div className={`origin-filter ${originClass}`}>
                <OriginCheckboxes onChange={originFilter} />
            </div> */}
        </Container>
    )
}

export default SortBy
