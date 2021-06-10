import Image from 'next/image'
import { useState, useEffect } from 'react'
import ReactMapGl, {Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Geocode from 'react-geocode'

export default function EventMap({evt}) {
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [loading, setLoading] = useState(true)
  const [viewport, setViewport] = useState({
    latitude: 41.34440380234907, 
    longtitude: 69.31312093704767,
    width: '100%',
    height: '500px',
    zoom: 12
  })

  Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY)

  return (
    <div>
      <h2>Map</h2>
    </div>
  )
}
