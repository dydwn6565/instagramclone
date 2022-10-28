import React, { useEffect, useRef, useState } from "react";
import "./InstagStory.css";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";
// mapboxgl.accessToken =
//   "pk.eyJ1IjoiZHlkd242NTY1IiwiYSI6ImNrdnZ4b3kxdDAyeWwyb3FiaXF0czE3dncifQ.wy2-3OucP_ZeU3bxWiDIUA";
function InstaStory() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const mapContainerTwo = useRef(null);
  
  const [lng, setLng] = useState(-120.18718);

  const [lat, setLat] = useState(47.26321);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: 12,
    });
  
  }, []);
  return (
    <div>
  
      <div className="map-container" ref={mapContainer} />
      <div className="map-container" ref={mapContainerTwo} />
    </div>
  );
}

export default InstaStory;
