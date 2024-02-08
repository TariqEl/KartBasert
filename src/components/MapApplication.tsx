import React, { MutableRefObject, useEffect, useRef } from "react";
import "./application.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { useGeographic } from "ol/proj";
import "ol/ol.css";

useGeographic();

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: [10, 59],
    zoom: 8,
  }),
});

export function MapApplication() {
  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    map.setTarget(mapRef.current);
  }, []);
  return (
    <>
      <header>
        <h1>Map</h1>
      </header>
      <nav>Actions</nav>
      <main ref={mapRef}>Here is the map</main>
    </>
  );
}
