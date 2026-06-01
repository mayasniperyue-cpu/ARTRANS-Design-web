import { readFileSync } from "fs";

function findV() {
  const code = readFileSync("downloaded_js.js", "utf-8");
  
  // Search for _v variable
  const index = code.indexOf("const _v=");
  if (index !== -1) {
    console.log("Found _v at index", index);
    console.log(code.slice(index - 50, index + 300));
  } else {
    console.log("_v not declared with const _v=, searching for _v in file:");
    let pos = 0;
    while ((pos = code.indexOf("_v", pos)) !== -1) {
      if (code[pos - 1] === ' ' || code[pos - 1] === ',' || code[pos - 1] === ';') {
        console.log(code.slice(pos - 30, pos + 100));
      }
      pos += 2;
    }
  }
}

findV();
