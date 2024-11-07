/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface AutoCompleteInputInterface {
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
  handleMaunalChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    stateProperty: any
  ) => void;
  streetAndNumber: string;
}

const AutoCompleteInput: React.FC<AutoCompleteInputInterface> = ({
  setAddress,
  handleMaunalChange,
  streetAndNumber,
}) => {
  return <div></div>;
};

export default AutoCompleteInput;
