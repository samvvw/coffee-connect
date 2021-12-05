import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import * as L from 'leaflet'
import { latLngBounds, latLng } from 'leaflet'

const Map = ({ data, style, zoom }) => {
    const [boundsObj, setBoundsObj] = useState()
    const [lat, setLat] = useState()
    const [lng, setLng] = useState()

    const LeafIcon = L.icon({
        iconUrl:
            'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
        shadowUrl:
            'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    })

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
                    {zoom && (
                        <MapContainer
                            bounds={boundsObj}
                            scrollWheelZoom={true}
                            style={{
                                ...style,
                                backgroundColor: 'rgb(175,210,222)',
                            }}
                            center={[lat ? lat : 0, lng ? lng : 0]}
                            zoom={4}
                        >
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {data?.map((c, index) => (
                                <Marker
                                    key={index}
                                    position={c}
                                    icon={LeafIcon}
                                />
                            ))}
                        </MapContainer>
                    )}
                    {!zoom && (
                        <MapContainer
                            bounds={boundsObj}
                            scrollWheelZoom={true}
                            style={{ ...style, background: 'rgb(175,210,222)' }}
                            center={[lat ? lat : 0, lng ? lng : 0]}
                        >
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {data?.map((c, index) => (
                                <Marker
                                    key={index}
                                    position={c}
                                    icon={LeafIcon}
                                />
                            ))}
                        </MapContainer>
                    )}
                </>
            ) : (
                ''
            )}
        </>
    )
}

export default Map
