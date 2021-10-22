import { useMemo } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { latLngBounds } from 'leaflet'

const Map = ({ data, style }) => {
    const allCountriesBounds = useMemo(() => {
        const bounds = latLngBounds()
        data.forEach((d) => bounds.extend(d.coordinates))
        return bounds.pad(0.1)
    }, [data])

    return (
        <MapContainer
            bounds={allCountriesBounds}
            zoom={5}
            scrollWheelZoom={true}
            style={style}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data.map((c) => (
                <Marker key={c.name} position={c.coordinates} />
            ))}
        </MapContainer>
    )
}

export default Map
