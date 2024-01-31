import React, { MutableRefObject, useEffect, useMemo, useRef } from 'react';
import "./App.css"
import "ol/ol.css";
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from "ol/source/OSM";
import { useGeographic } from 'ol/proj';

useGeographic();



const App = () => {
  
  const map = useMemo(()=> new Map({
    layers: [
      new TileLayer({source: new OSM()})
    ],
    view: new View({
      center: [10, 60], zoom: 9
    })
  }), []);

  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(()=>{
    map.setTarget(mapRef.current)
  },[]);

  function handleZoomToUser(e: React.MouseEvent) {
    e.preventDefault();

    navigator.geolocation.getCurrentPosition((result) => {
      const {longitude, latitude } = result.coords

      map.getView().animate({
        center: [longitude, latitude], zoom: 14
      })
    } )
  }

  function handleZoomToMorocco(e : React.MouseEvent) {
    e.preventDefault();

    map.getView().animate({
      center: [-5, 35.3], zoom: 7
    })
  
  }

  return (
      <>
      <header><h1>BS</h1></header>
      <nav>
        <a href="#" onClick={handleZoomToUser}>Zoom to my location</a>
        <a href="#" onClick={handleZoomToMorocco}>Zoom to Morocco</a>
      </nav>
    <div className='map' ref={mapRef}>
      I am a map
    </div>
    </>
  );
};

export default App;
