import Layer from "ol/layer/Layer";
import React, { useMemo } from "react";

export function KommuneAside({ layers }: { layers: Layer[] }) {
  const kommuneLayer = useMemo(
    () => layers.find((l) => l.getClassName() === "kommune"),
    [layers],
  );

  return <aside>{kommuneLayer && <h2>Kommuner</h2>}</aside>;
}
