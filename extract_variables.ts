import { readFileSync, writeFileSync } from "fs";

function extract() {
  const code = readFileSync("downloaded_js.js", "utf-8");
  
  // Find where const wj= or const w= or other lists are declared.
  // In our previous output, we saw `const wj=[{id:"timeaxis"` and then another definition.
  // Let's search for "const wj" and grab the entire array assignment.
  // Since wj represents the array, we can find its index, and match the opening bracket `[` to its closing bracket `]`.
  
  console.log("Analyzing variables...");
  const searchStr = "const wj=";
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
      console.log("Found wj array length:", arrayText.length);
      writeFileSync("extracted_wj_array.json", arrayText);
      console.log("Saved extracted_wj_array.json");
    }
  }

  // Let's also look for other lists in the file!
  // In the previous output we saw:
  // `{num:"04",title:"IP & Entertainment Extensions",tags:["Co-production",...`
  // This looks like another array. Let's search for `[{num:"01"` or similar pattern.
  const numIndex = code.indexOf('{num:"01"');
  if (numIndex !== -1) {
    console.log("Found num index at:", numIndex);
    const start = code.lastIndexOf('[', numIndex);
    // Find closing bracket
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
      console.log("Found num array length:", arrayText.length);
      writeFileSync("extracted_num_array.json", arrayText);
      console.log("Saved extracted_num_array.json");
    }
  }
}

extract();
