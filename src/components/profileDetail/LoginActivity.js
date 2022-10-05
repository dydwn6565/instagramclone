import React, { useEffect, useRef, useState } from "react";


import Header from "../Header";
import ProfileFooter from "../profilePage/ProfileFooter";
import AccountEditSide from "./AccountEditSide";
import "./LoginActivity.css";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiZHlkd242NTY1IiwiYSI6ImNrdnZ4b3kxdDAyeWwyb3FiaXF0czE3dncifQ.wy2-3OucP_ZeU3bxWiDIUA";
function LoginActivity() {
  const [latAndLong, setLatAndLong] = useState({});

 const map = useRef(null);
 const mapContainer = useRef(null);
  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  
  useEffect(() => {
    const getLoginLocation = async () => {
      const userLocationJson = await fetch(
        "http://localhost:8080/get/user/activity",
        {
          method: "GET",
        }
      );
      if (userLocationJson.status === 201) {
        const userLocation = await userLocationJson.json();

        console.log(userLocation.loginActivity[0].long);
        setLatAndLong(userLocation.loginActivity);

        if (map.current) return; // initialize map only once

        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [
            userLocation.loginActivity[0].long,
            userLocation.loginActivity[0].lat,
          ],
          zoom: 11,
        });
          // new mapboxgl.Marker()
          //   .setLngLat([
          //     userLocation.loginActivity[0].long,
          //     userLocation.loginActivity[0].lat,
          //   ])
          //   .addTo(map.current);
      }
    };
    getLoginLocation();
  }, []);

  return (
    <div>
      
      <Header />
      <div className="login-activity">
        <AccountEditSide />
        <div className="login-activity-main">
          <h2>Login Activity</h2>

          <h4>is it your login?</h4>
          <div ref={mapContainer} className="map-container" />
        </div>
      </div>
      <div className="resize-footer">
        <ProfileFooter />
      </div>
    </div>
  );
}

export default LoginActivity;
