import Layer from "ol/layer/Layer";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import React, { Dispatch, SetStateAction, useEffect, useMemo } from "react";
import { useState } from "react";
import { GeoJSON } from "ol/format";
import { Map, MapBrowserEvent } from "ol";

interface KommuneProperties {
  kommunenummer: string;
  navn: { sprak: string; navn: string }[];
}

export function KommuneLayerCheckBox({
  setLayers,
  map,
}: {
  setLayers: Dispatch<SetStateAction<Layer[]>>;
  map: Map;
}) {
  const [checked, setChecked] = useState(false);

  function handleClick(e: MapBrowserEvent<MouseEvent>) {
    const features = kommuneLayer
      .getSource()
      ?.getFeaturesAtCoordinate(e.coordinate);
    const firstFeature = features?.length ? features[0] : undefined;
    if (firstFeature) {
      const kommuneProperties =
        firstFeature.getProperties() as KommuneProperties;
      alert(kommuneProperties.navn.find((n) => n.sprak == "nor")!.navn);
    }
  }

  const kommuneLayer = useMemo(
    () =>
      new VectorLayer({
        source: new VectorSource({
          url: "/KartBasert/kommuner.json",
          format: new GeoJSON(),
        }),
      }),
    []
  );

  useEffect(() => {
    if (checked) {
      setLayers((old) => [...old, kommuneLayer]);
      map.on("click", handleClick);
    }
    return () => {
      map.un("click", handleClick);
      setLayers((old) => old.filter((l) => l !== kommuneLayer));
    };
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
