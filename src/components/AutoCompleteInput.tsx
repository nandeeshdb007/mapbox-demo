/* eslint-disable @typescript-eslint/no-explicit-any */
import getPlaces from "@/api/getPlaces";
import React, { useState } from "react";

interface AutoCompleteInputInterface {
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
  handleMaunalChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    stateProperty: string
  ) => void;
  streetAndNumber: string;
}

const AutoCompleteInput: React.FC<AutoCompleteInputInterface> = ({
  setAddress,
  handleMaunalChange,
  streetAndNumber,
}) => {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleMaunalChange(event, "streetAndNumber");
    handleInputChange(event.target.value);
  };

  const handleInputChange = async (query: string) => {
    if (query.length > 2) {
      const places = await getPlaces(query);
      setSuggestions(places || []); 
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (suggestion: any) => {
    const streetAndNumber: string = suggestion.place_name.split(",")[0];
    const latitude: string = suggestion.center[1];
    const longitude: string = suggestion.center[0];
    const address: any = {
      streetAndNumber,
      place: "",
      region: "",
      postCode: "",
      country: "",
      longitude,
      latitude,
    };

    suggestion.context.forEach((element: any) => {
      const identifier = element.id.split(".")[0];
      address[identifier] = element.text;
    });

    setAddress(address);
    setSuggestions([]);
  };

  console.log(suggestions);

  return (
    <div className="relative w-full">
      <input
        id="address"
        type="text"
        placeholder="Enter address"
        value={streetAndNumber || ""}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSelectSuggestion(suggestion)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {suggestion.place_name}
            </li>
          ))}
        </ul>
      )}

      {!showSuggestions && suggestions.length < 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-y-auto">
          no suggestion found
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteInput;
