import Layer from "ol/layer/Layer";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Feature, Map, MapBrowserEvent } from "ol";
import { Polygon } from "ol/geom";

type KommuneProperties = {
  kommunenummer: string;
  navn: {
    sprak: string;
    navn: string;
  }[];
};

type KommuneFeature = Feature<Polygon> & {
  getProperties(): KommuneProperties;
};

const kommuneSource = new VectorSource<KommuneFeature>({
  url: "/KartBasert/kommuner.json",
  format: new GeoJSON(),
});

const kommuneLayer = new VectorLayer({
  source: kommuneSource,
});

export function KommuneLayerCheckbox({
  map,
  setLayers,
}: {
  map: Map;
  setLayers: Dispatch<SetStateAction<Layer[]>>;
}) {
  const [checked, setChecked] = useState(false);
  const [selectedKommune, setSelectedKommune] = useState<
    KommuneFeature | undefined
  >();

  function handleClick(e: MapBrowserEvent<MouseEvent>) {
    const clickedKommune = kommuneSource?.getFeaturesAtCoordinate(
      e.coordinate,
    ) as KommuneFeature[];
    if (clickedKommune.length === 1) {
      setSelectedKommune(clickedKommune[0]);
    } else {
      setSelectedKommune(undefined);
    }
  }

  useEffect(() => {
    if (checked) {
      setLayers((old) => [...old, kommuneLayer]);
      map.on("click", handleClick);
    }
    return () => {
      map.un("click", handleClick);
      setLayers((old) => old.filter((l) => l != kommuneLayer));
    };
  }, [checked]);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        {checked ? "Hide" : "Show"} Kommune layer
      </label>
      {selectedKommune && (
        <div>
          Selected kommune:{" "}
          {
            selectedKommune
              .getProperties()
              .navn.find((n: { sprak: string }) => n.sprak === "nor")!.navn
          }
        </div>
      )}
    </div>
  );
}
