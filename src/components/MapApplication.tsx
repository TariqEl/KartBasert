import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import "./application.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { useGeographic } from "ol/proj";
import "ol/ol.css";
import { KommuneLayerCheckBox } from "./KommuneLayerCheckBox";
import Layer from "ol/layer/Layer";


useGeographic();

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: [10, 60],
    zoom: 8,
  }),
});



export function MapApplication() {


  const [layers, setLayers] = useState<Layer[]>([
    new TileLayer({
      source: new OSM()
    })
  ]);


  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(()=>{
    map.setLayers(layers);
  },[layers]);

  useEffect(() => {
    map.setTarget(mapRef.current);
  }, []);

  return (
    <>
      <header>
        <h1>Map</h1>
      </header>
      <nav>
        <KommuneLayerCheckBox setLayers={setLayers}/>
      </nav>
      <main ref={mapRef}>Here is the map</main>
    </>
  );
}
