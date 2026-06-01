import { readFileSync, writeFileSync } from "fs";

function extractReactCode() {
  const code = readFileSync("extracted_app_chunk.js", "utf-8");
  
  // Let's locate the main component rendering function. In React builds, this usually ends with a default export or includes "function App" or similar.
  // Let's search for some DOM elements like "Footer" or "Header" or "Contact" inside this file.
  
  console.log("Searching for render structure...");
  const searchKeywords = [
    "ARTRANS Media Partners", "The Partnership Model", "Structuring the Ecosystem", "FROM PARTNER EXPERTISE"
  ];
  
  for (const kw of searchKeywords) {
    const idx = code.indexOf(kw);
    if (idx !== -1) {
      console.log(`Keyword "${kw}" found at position ${idx}. Let's inspect the block around it.`);
      // Print 2000 chars before and 4000 chars after this keyword
      const start = Math.max(0, idx - 1500);
      const end = Math.min(code.length, idx + 3500);
      writeFileSync(`debug_react_around_${kw.replace(/ /g, "_")}.js`, code.slice(start, end));
      console.log(`Saved chunk containing "${kw}" to debug_react_around_${kw.replace(/ /g, "_")}.js`);
    } else {
      console.log(`Keyword "${kw}" NOT found.`);
    }
  }
}

extractReactCode();
