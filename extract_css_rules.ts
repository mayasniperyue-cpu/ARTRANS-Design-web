import { readFileSync, writeFileSync } from "fs";

function extractCss() {
  const css = readFileSync("downloaded_css.css", "utf-8");
  
  const rules = [
    ".noise", ".grid-bg", ".glass", ".gold-glow", "@import", "Barlow"
  ];
  
  console.log("Searching for specific CSS classes:");
  
  for (const rule of rules) {
    let index = 0;
    console.log(`\n=== Rule: ${rule} ===`);
    while ((index = css.indexOf(rule, index)) !== -1) {
      const start = Math.max(0, index - 100);
      const end = Math.min(css.length, index + 300);
      console.log(css.slice(start, end).replace(/\s+/g, ' ').trim());
      index += rule.length;
      break; // just need one occurrence
    }
  }
}

extractCss();
