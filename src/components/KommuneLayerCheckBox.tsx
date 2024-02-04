import React from "react";
import { useState } from "react";

export function KommuneLayerCheckBox() {
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