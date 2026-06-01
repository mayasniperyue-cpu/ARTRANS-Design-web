import { readFileSync } from "fs";

function search() {
  const fileContent = readFileSync("downloaded_js.js", "utf-8");
  
  const keywords = ["longevity", "sanctuary", "medicine", "biological", "cellular", "clinical", "exclusive", "experience", "reserve", "treatment", "doctor", "specialist"];
  
  console.log("Searching for components and application content in JS:");
  
  for (const kw of keywords) {
    let index = 0;
    console.log(`\n=== KEYWORD: ${kw} ===`);
    let matchCount = 0;
    while ((index = fileContent.indexOf(kw, index)) !== -1) {
      matchCount++;
      // Print context of 300 characters around the match
      const start = Math.max(0, index - 200);
      const end = Math.min(fileContent.length, index + 350);
      console.log(`Match ${matchCount} at index ${index}:`);
      console.log("...");
      console.log(fileContent.slice(start, end).trim());
      console.log("...");
      index += kw.length;
      if (matchCount >= 8) {
        console.log(`(Truncated further matches for "${kw}")`);
        break;
      }
    }
  }
}

search();
