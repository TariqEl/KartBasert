import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import "./application.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { useGeographic } from "ol/proj";
import "ol/ol.css";
import { KommuneLayerCheckbox } from "../kommune/kommuneLayerCheckbox";
import Layer from "ol/layer/Layer";

useGeographic();

const map = new Map({
  view: new View({
    center: [10, 59],
    zoom: 8,
  }),
});

export function MapApplication() {
  function handleFocusUser(e: React.MouseEvent) {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      map.getView().animate({
        center: [longitude, latitude],
        zoom: 10,
      });
    });
  }

  const [layers, setLayers] = useState<Layer[]>([
    new TileLayer({
      source: new OSM(),
    }),
  ]);

  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    map.setTarget(mapRef.current);
  }, []);
  useEffect(() => {
    map.setLayers(layers);
  }, [layers]);
  return (
    <>
      <header>
        <h1>Kommune Kart</h1>
      </header>
      <nav>
        <a href="#" onClick={handleFocusUser}>
          Focus on me
        </a>
        <KommuneLayerCheckbox map={map} setLayers={setLayers} />
      </nav>
      <main ref={mapRef}></main>
    </>
  );
}
