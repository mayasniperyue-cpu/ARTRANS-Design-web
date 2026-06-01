import { readFileSync } from "fs";

function analyzeCss() {
  const css = readFileSync("downloaded_css.css", "utf-8");
  
  // Let's look for @theme or color declarations in CSS
  console.log("Analyzing CSS contents...");
  
  // Find typical colors. Standard base44 pages often use custom navy, gold, silver colors.
  // Let's see some colors:
  const matches = css.match(/--[a-zA-Z0-9-]+:\s*[^;]+/g) || [];
  console.log("Found variables in CSS:", matches.length);
  console.log(matches.slice(0, 80));
  
  // Let's search for "navy", "gold", "silver" in the CSS
  const searchTerms = ["navy", "gold", "silver", "font-family", "url("];
  for (const term of searchTerms) {
    let index = 0;
    let count = 0;
    console.log(`\n=== CSS Search: ${term} ===`);
    while ((index = css.indexOf(term, index)) !== -1) {
      count++;
      console.log(`Occurrence ${count}:`, css.slice(index - 50, index + 100).replace(/\s+/g, ' ').trim());
      index += term.length;
      if (count >= 5) break;
    }
  }
}

analyzeCss();
