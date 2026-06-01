import { readFileSync, writeFileSync } from "fs";

function extractAppData() {
  const fileContent = readFileSync("downloaded_js.js", "utf-8");
  
  // Let's find the start of the user content
  // Since we saw some JSON-like structures and custom definitions around 475000 and 483000,
  // let's grab the tail end of the bundle which usually contains the main React App component.
  // Vite puts the vendor chunk first and the entry main.tsx code at the end of the compiled JS bundle!
  console.log("File length:", fileContent.length);
  
  // Let's look for known keys like "IMMERSIVE EXTREMES" or "specialist partner"
  const targetIndex = fileContent.indexOf("IMMERSIVE EXTREMES");
  console.log("Target index of 'IMMERSIVE EXTREMES':", targetIndex);
  
  if (targetIndex !== -1) {
    const start = Math.max(0, targetIndex - 20000);
    const end = Math.min(fileContent.length, targetIndex + 30000);
    console.log(`Extracting chunk around target: index ${start} to ${end}`);
    const chunk = fileContent.slice(start, end);
    writeFileSync("extracted_app_chunk.js", chunk);
    console.log("Saved extracted_app_chunk.js!");
  } else {
    // If not found, dump the last 80KB which typically contains the App component
    const start = Math.max(0, fileContent.length - 80000);
    const chunk = fileContent.slice(start);
    writeFileSync("extracted_tail_chunk.js", chunk);
    console.log("Saved last 80KB to extracted_tail_chunk.js!");
  }
}

extractAppData();
