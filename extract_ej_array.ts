import { readFileSync, writeFileSync } from "fs";

function extractEj() {
  const code = readFileSync("downloaded_js.js", "utf-8");
  
  const searchStr = "const Ej=";
  const index = code.indexOf(searchStr);
  
  if (index !== -1) {
    let bracketCount = 0;
    let endIndex = -1;
    const arrayStart = index + searchStr.length;
    
    for (let i = arrayStart; i < code.length; i++) {
      if (code[i] === '[') {
        bracketCount++;
      } else if (code[i] === ']') {
        bracketCount--;
        if (bracketCount === 0) {
          endIndex = i + 1;
          break;
        }
      }
    }
    
    if (endIndex !== -1) {
      const arrayText = code.slice(arrayStart, endIndex);
      console.log("Found Ej array length:", arrayText.length);
      writeFileSync("extracted_ej_array.json", arrayText);
      console.log("Saved extracted_ej_array.json");
    }
  } else {
    // Search for img or scenario structure
    const idx2 = code.indexOf('title:"IP & Entertainment Extensions"');
    if (idx2 !== -1) {
      console.log("Found IP & Entertainment index at:", idx2);
      const start = code.lastIndexOf('[', idx2);
      let bracketCount = 0;
      let endIndex = -1;
      for (let i = start; i < code.length; i++) {
        if (code[i] === '[') {
          bracketCount++;
        } else if (code[i] === ']') {
          bracketCount--;
          if (bracketCount === 0) {
            endIndex = i + 1;
            break;
          }
        }
      }
      if (endIndex !== -1) {
        const arrayText = code.slice(start, endIndex);
        writeFileSync("extracted_ej_array.json", arrayText);
        console.log("Saved extracted_ej_array as extracted_ej_array.json from index:", start);
      }
    }
  }
}

extractEj();
