import { readFileSync, writeFileSync } from "fs";

function locatePartnersComponent() {
  const code = readFileSync("extracted_app_chunk.js", "utf-8");
  
  // Let's search for "wj.map" or similar
  const index = code.indexOf("wj.map");
  console.log("Index of 'wj.map':", index);
  if (index !== -1) {
    const start = Math.max(0, index - 2000);
    const end = Math.min(code.length, index + 4000);
    writeFileSync("debug_partners_component.js", code.slice(start, end));
    console.log("Saved debug_partners_component.js!");
  } else {
    // Search for wj inside functions
    const index_wj = code.indexOf("wj");
    console.log("Index of 'wj' occurrences:");
    let pos = 0;
    let occurrences = [];
    while ((pos = code.indexOf("wj", pos)) !== -1) {
      occurrences.push(pos);
      pos += 2;
    }
    console.log(occurrences.slice(0, 10));
    // Let's print around the last occurrences
    if (occurrences.length > 0) {
      const lastPos = occurrences[occurrences.length - 1];
      writeFileSync("debug_partners_component.js", code.slice(lastPos - 2000, lastPos + 2000));
    }
  }
}

locatePartnersComponent();
