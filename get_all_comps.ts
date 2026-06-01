import { readFileSync, writeFileSync } from "fs";

function extractAllComponents() {
  const code = readFileSync("extracted_app_chunk.js", "utf-8");
  
  const compNames = ["Cj", "kj", "Tj", "Pj", "Aj", "_j", "App", "main"];
  
  console.log("Analyzing each component's code...");
  
  for (const name of compNames) {
    // We search for `function name(` or `const name =`
    const searchPatterns = [
      `function ${name}(`,
      `function ${name} `
    ];
    let found = false;
    for (const p of searchPatterns) {
      const idx = code.indexOf(p);
      if (idx !== -1) {
        console.log(`Found component ${name} at index ${idx}`);
        // Let's print out 2500 characters
        const block = code.slice(idx, idx + 4500);
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

extractAllComponents();
