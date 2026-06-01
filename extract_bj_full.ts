import { readFileSync, writeFileSync } from "fs";

function extractBjFull() {
  const code = readFileSync("downloaded_js.js", "utf-8");
  const index = code.indexOf("function bj(");
  console.log("Index of function bj:", index);
  if (index !== -1) {
    const start = index;
    // Walk to find matching curly brace of function bj
    let braceCount = 0;
    let endIndex = -1;
    let foundBrace = false;
    for (let i = start; i < code.length; i++) {
      if (code[i] === '{') {
        braceCount++;
        foundBrace = true;
      } else if (code[i] === '}') {
        braceCount--;
        if (foundBrace && braceCount === 0) {
          endIndex = i + 1;
          break;
        }
      }
    }
    if (endIndex !== -1) {
      const body = code.slice(start, endIndex);
      writeFileSync("comp_bj.js", body);
      console.log("Written comp_bj.js from index", start, "to", endIndex);
    }
  }
}

extractBjFull();
