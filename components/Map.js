import { useState, useEffect } from 'react'
import { Box } from 'theme-ui'
import { IndexCard } from './IndexCard'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  Tooltip,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const starIcon = new L.Icon({
  iconUrl: `/elements/star-sticker.svg`,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 60),
  popupAnchor: [0, 0]
})
//placeholder icon
const pinIcon = new L.Icon({
    iconUrl: `/elements/sticky-note.svg`,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(20, 20),
    popupAnchor: [0, 0]
})
const StyledMapContainer = MapContainer;

export default function Map({full}) {
  const [center, setCenter] = useState(
    window.innerWidth > 767.98 ? [35.683, -25.099] : [55, -100]
  )
  const [events, setEvents] = useState([
    { name: 'Flagship', location: "Los Angeles", lat: 34.0522, lng: -118.2437, description: "yada yada yada", flagship: true },
    { name: 'Flagship', location: "New York", lat: 40.7128, lng: -74.0060, description: "yada yada yada" },
]);    

  const bounds = [
    [-85, -Infinity],
    [85, Infinity]
  ];

  return (
    <>
      <StyledMapContainer
        center={center}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        zoom={2.5}
        minZoom={1}
        style={{ width: full ? '80vw' : '80%', height: full ? '100vh' : '100vh', zIndex: 0 }}
        worldCopyJump={true}
        zoomControl={!full}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {events.map((event, idx) => (
          <Marker
            position={[event.lat, event.lng]}
            key={idx}
            icon={event.flagship ? starIcon : pinIcon}
          >
        {/* <Popup className="custom-popup" style={{ position: 'absolute', top: '10px', right: '10px', transform: 'none' }}>
              {event.description}
            </Popup> */}
            <Tooltip>{event.name}</Tooltip>
          </Marker>
        ))}
        {full && <ZoomControl position="topright" />}
      </StyledMapContainer>
     
    </>
  )
}