import Layer from "ol/layer/Layer";
import React, { Dispatch, SetStateAction } from "react";
import { useState } from "react";

export function KommuneLayerCheckBox({setLayers} : {setLayers: Dispatch<SetStateAction<Layer[]>>}) {
    const [checked, setChecked] = useState(false);
  
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