import { readFileSync, writeFileSync } from "fs";

function extractFhPj() {
  const code = readFileSync("downloaded_js.js", "utf-8");
  
  const compNames = ["fj", "hj", "pj", "Sj"];
  
  console.log("Locating newer components...");
  
  for (const name of compNames) {
    const searchPatterns = [
      `function ${name}(`,
      `function ${name} `
    ];
    let found = false;
    for (const p of searchPatterns) {
      const idx = code.indexOf(p);
      if (idx !== -1) {
        console.log(`Found component ${name} at index ${idx}`);
        const block = code.slice(idx, idx + 6000);
        writeFileSync(`comp_${name}.js`, block);
        found = true;
        break;
      }
    }
    if (!found) {
      console.log(`Component ${name} NOT found.`);
    }
  }
}

extractFhPj();
