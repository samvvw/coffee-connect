import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { latLngBounds, latLng } from 'leaflet'

const Map = ({ data, style }) => {
    const [boundsObj, setBoundsObj] = useState()
    const [lat, setLat] = useState()
    const [lng, setLng] = useState()

    useEffect(() => {
        const allCountriesBounds = () => {
            const collection = data?.map((coord) => {
                return latLng(coord[0], coord[1])
            })
            const bounds = latLngBounds(collection)
            return bounds
        }
        if (data?.length > 0) {
            setBoundsObj(allCountriesBounds())
            setLat(allCountriesBounds()?.getCenter().lat)
            setLng(allCountriesBounds()?.getCenter().lng)
        }
    }, [data])

    return (
        <>
            {boundsObj ? (
                <>
                    <MapContainer
                        bounds={boundsObj}
                        scrollWheelZoom={true}
                        style={style}
                        center={[lat ? lat : 0, lng ? lng : 0]}
                    >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {data?.map((c, index) => (
                            <Marker key={index} position={c} />
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
