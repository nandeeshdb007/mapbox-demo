import React, { useState, useEffect } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import Lottie from "react-lottie";
import animationData from "@/data/icon.json"; // Replace with your animation JSON file

interface DisplayMapInterface {
  longitude: number;
  latitude: number;
  updateCoordinates: (longitude: number, latitude: number) => void;
}

const DisplayMap: React.FC<DisplayMapInterface> = ({
  longitude,
  latitude,
  updateCoordinates,
}) => {
  const [viewPort, setViewPort] = useState({
    latitude,
    longitude,
    zoom: 16,
  });

  const [marker, setMarker] = useState({
    latitude,
    longitude,
  });

  useEffect(() => {
    setViewPort((oldViewPort) => ({
      ...oldViewPort,
      latitude,
      longitude,
    }));
    setMarker({
      latitude,
      longitude,
    });
  }, [latitude, longitude]);

  const handleMarkerChange = (event: any) => {
    const newLatitude = event.lngLat.lat;
    const newLongitude = event.lngLat.lng;
    setMarker({ latitude: newLatitude, longitude: newLongitude });
    updateCoordinates(newLongitude, newLatitude); // Pass coordinates as strings
  };

  const lottieOptions = {
    loop: true,
    autoplay: true, // Start animation automatically
    animationData: animationData, // Your animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="w-[300px] h-[500px]">
      <ReactMapGl
        {...viewPort}
        mapboxAccessToken={''}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        onMove={(event) => {
          setViewPort(event.viewState);
        }}
      >
        <Marker
          latitude={marker.latitude}
          longitude={marker.longitude}
          draggable={true}
          onDragEnd={handleMarkerChange}
        >
          <div style={{ transform: "translate(-50%, -50%)" }}>
            <Lottie options={lottieOptions} height={100} width={100} />
          </div>
        </Marker>
      </ReactMapGl>
    </div>
  );
};

export default DisplayMap;
