import { writeFileSync, readFileSync } from "fs";

async function main() {
  try {
    console.log("Fetching JS...");
    const jsUrl = "https://artransmedia.base44.app/assets/index-CwhTzvnZ.js";
    const jsRes = await fetch(jsUrl);
    const jsText = await jsRes.text();
    console.log("JS size:", jsText.length);
    writeFileSync("downloaded_js.js", jsText);

    console.log("Fetching CSS...");
    const cssUrl = "https://artransmedia.base44.app/assets/index-BxDrOHvf.css";
    const cssRes = await fetch(cssUrl);
    const cssText = await cssRes.text();
    console.log("CSS size:", cssText.length);
    writeFileSync("downloaded_css.css", cssText);

    // Let's find some string literals in the JS code
    // Standard JS strings can be double-quoted, single-quoted, or backticked.
    // Let's do some simple searches
    console.log("Looking for human-readable content inside JS...");
    const sentences = jsText.match(/"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|`[^`\\]*(?:\\.[^`\\]*)*`/g) || [];
    console.log("Total string literals found:", sentences.length);
    
    // Let's filter for interesting larger strings (e.g., > 15 chars) and log those that contain text
    const interestingStrings = sentences
      .map(s => s.slice(1, -1).replace(/\\n/g, '\n').replace(/\\"/g, '"').trim())
      .filter(s => s.length > 20 && /[a-zA-Z\u4e00-\u9fa5]/.test(s) && !s.includes("http") && !s.includes("path") && !s.includes("<svg") && s.length < 500);

    console.log("\n--- Sample of extracted strings (length 20 to 500) ---");
    const uniqueInteresting = Array.from(new Set(interestingStrings));
    console.log("Unique text fragments count:", uniqueInteresting.length);
    console.log(uniqueInteresting.slice(0, 50).join("\n\n---\n\n"));
    
    writeFileSync("extracted_strings.txt", uniqueInteresting.join("\n\n---\n\n"));

  } catch (err) {
    console.error("Error fetching assets:", err);
  }
}

main();
