import { Layer } from "ol/layer";
import React, { SetStateAction } from "react";
import { Dispatch } from "react";

export const MapContext = React.createContext<{
  setLayers: Dispatch<SetStateAction<Layer[]>>;
}>({
  setLayers: () => {},
});
