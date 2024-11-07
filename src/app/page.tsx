"use client";
import AddressForm from "@/components/AddressForm";
import DisplayMap from "@/components/Map";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";

export default function Home() {
  const [address, setAddress] = useState({
    streetAndNumber: "",
    place: "",
    region: "",
    postCode: "",
    country: "",
    logitude: "",
    latitude: "",
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(address);
  };

  const updateCoordinates = (logitude: string, latitude: string) => {
    setAddress({ ...address, logitude, latitude });
  };

  return (
    <div className="bg-blue-400 min-h-screen w-full flex items-center justify-center ">
      <div className="grid grid-cols-2 gap-4">
        <AddressForm
          handleFormSubmit={handleFormSubmit}
          address={address}
          setAddress={setAddress}
        />
        <DisplayMap
          longitude={address.logitude}
          latitude={address.latitude}
          updateCoordinates={updateCoordinates}
        />
      </div>
    </div>
  );
}
