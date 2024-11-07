/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import AutoCompleteInput from "./AutoCompleteInput";

interface AddressFormProps {
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  address: {
    streetAndNumber: string;
    place: string;
    region: string;
    postCode: string;
    country: string;
    longitude: number;
    latitude: number;
  };
  setAddress: React.Dispatch<
    React.SetStateAction<{
      streetAndNumber: string;
      place: string;
      region: string;
      postCode: string;
      country: string;
      longitude: number;
      latitude: number;
    }>
  >;
}

const AddressForm: FC<AddressFormProps> = ({
  handleFormSubmit,
  address,
  setAddress,
}) => {
  const handleManualInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    stateProperty: any
  ) => {
    const newAddress = { ...address, [stateProperty]: event.target.value };
    setAddress(newAddress);
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <label htmlFor="address">Address</label>
        <AutoCompleteInput
          handleMaunalChange={handleManualInputChange}
          streetAndNumber={address.streetAndNumber}
          setAddress={setAddress}
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="place">City</label>
        <input
          type="text"
          id="place"
          value={address.place}
          onChange={(e) => handleManualInputChange(e, "place")}
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="region">Region</label>
        <input
          type="text"
          id="region"
          value={address.region}
          onChange={(e) => handleManualInputChange(e, "region")}
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="postCode">PostCode</label>
        <input
          type="text"
          id="postCode"
          value={address.postCode}
          onChange={(e) => handleManualInputChange(e, "postCode")}
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          value={address.country}
          onChange={(e) => handleManualInputChange(e, "country")}
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="longitude">longitude</label>
        <input
          type="number"
          id="longitude"
          value={address.longitude}
          onChange={(e) => handleManualInputChange(e, "longitude")}
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="latitude">latitude</label>
        <input
          type="number"
          id="latitude"
          value={address.latitude}
          onChange={(e) => handleManualInputChange(e, "latitude")}
        />
      </div>
      <button type="submit" className="bg-green-500">Submit</button>
    </form>
  );
};

export default AddressForm;
