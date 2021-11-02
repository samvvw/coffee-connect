import { useMemo, useEffect, useState, useCallback } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { latLngBounds, latLng } from 'leaflet'

const Map = ({ data, style }) => {
    const [center, setCenter] = useState([])
    const [boundsObj, setBoundsObj] = useState()
    const [lat, setLat] = useState()
    const [lng, setLng] = useState()

    // const [result, setResult] = useState(() => {
    //     const bounds = latLngBounds()
    //     data.forEach((d) => bounds.extend(d.coordinates))
    //     return bounds.pad(0.1)
    // })
    // const allCountriesBounds = useMemo(() => {
    //     const bounds = latLngBounds()
    //     data.forEach((d) => bounds.extend(d.coordinates))
    //     console.log('pad', bounds.pad(0.1))
    //     return bounds.pad(0.1)
    // }, [data])

    useEffect(() => {
        const allCountriesBounds = () => {
            const collection = data?.map((coord) => {
                return latLng(coord[0], coord[1])
            })
            const bounds = latLngBounds(collection)
            // data.forEach((d) => bounds.extend(latLng(d[0], d[1])))
            // setCenter(bounds.getCenter())
            // console.log('bounds', data)
            // setCenter(bounds.getCenter())
            return bounds
        }
        if (data?.length > 0) {
            console.log(allCountriesBounds().getCenter())
            setBoundsObj(allCountriesBounds())
            setLat(allCountriesBounds()?.getCenter().lat)
            setLng(allCountriesBounds()?.getCenter().lng)
        }
    }, [data])

    // useEffect(() => {
    //     const coords = center.getCenter()
    //     console.log(coords.lat, coords.lng)
    //     setLat(+coords.lat)
    //     setLng(+coords.lng)
    // }, [])

    return (
        <>
            {boundsObj ? (
                <>
                    <MapContainer
                        bounds={boundsObj}
                        scrollWheelZoom={true}
                        style={style}
                        center={[lat ? lat : 0, lng ? lng : 0]}
                        // zoom={4}
                    >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {data?.map((c) => (
                            <Marker key={c.name} position={c} />
                        ))}
                    </MapContainer>
                </>
            ) : (
                'loading...'
            )}
        </>
    )
}

export default Map
