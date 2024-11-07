import React from "react";
interface DisplayMapInterface {
  longitude: string;
  latitude: string;
  updateCoordinates: (longitude: string, latitude: string) => void;
}

const DisplayMap: React.FC<DisplayMapInterface> = ({
  longitude,
  latitude,
  updateCoordinates,
}) => {
  return <div></div>;
};

export default DisplayMap;
