import React, { FC } from "react";

interface AddressFormProps {
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  address: {
    streetAndNumber: string;
    place: string;
    region: string;
    postCode: string;
    country: string;
    logitude: string;
    latitude: string;
  };
  setAddress: React.Dispatch<
    React.SetStateAction<{
      streetAndNumber: string;
      place: string;
      region: string;
      postCode: string;
      country: string;
      logitude: string;
      latitude: string;
    }>
  >;
}

const AddressForm: FC<AddressFormProps> = ({
  handleFormSubmit,
  address,
  setAddress,
}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={address.streetAndNumber}
        onChange={(e) =>
          setAddress({ ...address, streetAndNumber: e.target.value })
        }
        placeholder="Street and Number"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddressForm;
