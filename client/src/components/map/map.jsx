import { useMemo, useEffect, useState, useCallback } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { latLngBounds, latLng } from 'leaflet'

const Map = ({ data, style }) => {
    const [center, setCenter] = useState([])
    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)

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
    const allCountriesBounds = useMemo(() => {
        const collection = data.map((coord) => {
            return latLng(coord[0], coord[1])
        })
        const bounds = latLngBounds(collection)
        // data.forEach((d) => bounds.extend(latLng(d[0], d[1])))
        // setCenter(bounds.getCenter())
        // console.log('bounds', bounds.getCenter())
        // setCenter(bounds.getCenter())
        return bounds
    }, [data])

    // useEffect(() => {
    //     const allCountriesBounds = () => {
    //         const bounds = latLngBounds()
    //         data.forEach((d) => bounds.extend(d.coordinates))
    //         setResult(bounds.pad(0.1))
    //     }
    //     allCountriesBounds()
    // }, [data])

    // useEffect(() => {
    //     const coords = center.getCenter()
    //     console.log(coords.lat, coords.lng)
    //     setLat(+coords.lat)
    //     setLng(+coords.lng)
    // }, [])

    return (
        <>
            <MapContainer
                bounds={allCountriesBounds}
                scrollWheelZoom={true}
                style={style}
                center={[lat, lng]}
                zoom={2}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {data.map((c) => (
                    <Marker key={c.name} position={c} />
                ))}
            </MapContainer>
            {/* {<p>{JSON.stringify(center.getCenter())}</p>} */}
        </>
    )
}

export default Map
