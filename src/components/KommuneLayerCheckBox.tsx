import Layer from "ol/layer/Layer";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import React, { Dispatch, SetStateAction, useEffect, useMemo } from "react";
import { useState } from "react";
import { GeoJSON } from "ol/format";

export function KommuneLayerCheckBox({
  setLayers,
}: {
  setLayers: Dispatch<SetStateAction<Layer[]>>;
}) {
  const [checked, setChecked] = useState(false);

  const kommuneLayer = useMemo(
    () =>
      new VectorLayer({
        source: new VectorSource({
          url: "./kommuner.json",
          format: new GeoJSON(),
        }),
      }),
    []
  );

  useEffect(() => {
    setLayers((old) => [...old, kommuneLayer]);
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
