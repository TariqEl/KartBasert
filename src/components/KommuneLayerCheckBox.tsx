import Layer from "ol/layer/Layer";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import React, { Dispatch, SetStateAction, useEffect, useMemo } from "react";
import { useState } from "react";
import { GeoJSON } from "ol/format";
import { Map, MapBrowserEvent } from "ol";

export function KommuneLayerCheckBox({
  setLayers,
  map,
}: {
  setLayers: Dispatch<SetStateAction<Layer[]>>;
  map: Map;
}) {
  const [checked, setChecked] = useState(false);

  function handleClick(e: MapBrowserEvent<MouseEvent>) {
    alert(e.coordinate);
  }

  const kommuneLayer = useMemo(
    () =>
      new VectorLayer({
        source: new VectorSource({
          url: "/kommuner.json",
          format: new GeoJSON(),
        }),
      }),
    []
  );

  useEffect(() => {
    if (checked) {
      setLayers((old) => [...old, kommuneLayer]);
      map.on("click", handleClick);
    } else {
      setLayers((old) => old.filter((l) => l !== kommuneLayer));
    }
  }, [checked]);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <>{checked ? "Hide" : "Show"} Kommuner</>
      </label>
    </>
  );
}
