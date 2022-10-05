import React, { useEffect, useRef, useState } from "react";
import "./InstagStory.css";
// import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import mapboxgl from "mapbox-gl";

// import "./Map.css";
// import geoJson from "./chicago-parks.json";

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
    //  mapTwo.current = new mapboxgl.Map({
    //    container: mapContainerTwo.current,
    //    style: "mapbox://styles/mapbox/streets-v11",
    //    center: [lng, lat],
    //    zoom: 12,
    //  });
    // new mapboxgl.Marker().setLngLat({ lng, lat }).addTo(map.current);
    // const marker = new mapboxgl.Marker()
    //   .setLngLat([49.26321, -113.18718])
    //   .addTo(map);
    // geoJson.features.map((feature) =>
    //   new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(map)
    // );

    // Add navigation control (the +/- zoom buttons)
    // map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    // return () => map.remove();
  }, []);
  return (
    <div>
      {/* {console.log(process.env.REACT_APP_MAP_KEY)}
      <h1>Mapbox tutorial</h1>
      <Map
        mapboxAccessToken={
          "pk.eyJ1IjoiZHlkd242NTY1IiwiYSI6ImNrdnZ4b3kxdDAyeWwyb3FiaXF0czE3dncifQ.wy2-3OucP_ZeU3bxWiDIUA"
        }
        style={{
          width: "50vw",
          height: "20vh",
          borderRadius: "15px",
          border: "2px solid red",
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 10,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={lng} latitude={lat} />
        <NavigationControl position="bottom-right" />
        <FullscreenControl />

        <GeolocateControl />
      </Map> */}
      <div className="map-container" ref={mapContainer} />
      <div className="map-container" ref={mapContainerTwo} />
    </div>
  );
}

export default InstaStory;
