import { readFileSync } from "fs";

function extractHeadingsAndMore() {
  const code = readFileSync("extracted_app_chunk.js", "utf-8");
  
  // Let's look for UI strings. For example:
  // "Core Alignment"
  // Let's write a regex to find all strings in code that resemble page text, (e.g. capitalized strings longer than 15 chars, or headings)
  console.log("=== HEADINGS AND HERO TEXT SEARCH ===");
  
  const keywords = [
    "artransmedia", "art", "media", "transmedia", "alliance", "consortium", 
    "ecosystem", "partner", "digital", "clinical", "medicine", "coproduction",
    "infrastructure", "commercialization", "experience", "cooperation"
  ];
  
  // Search for strings containing these words or typical page headings
  const strings = code.match(/"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|`[^`\\]*(?:\\.[^`\\]*)*`/g) || [];
  
  const filtered = Array.from(new Set(strings.map(s => s.slice(1, -1).trim())))
    .filter(s => s.length > 20 && s.length < 200 && /[a-zA-Z]/.test(s) && !s.includes("<svg") && !s.includes("path") && !s.includes("class="));
    
  console.log("Found", filtered.length, "useful text fragments. Let's print some of them:");
  console.log(filtered.slice(0, 100).join("\n---\n"));
}

extractHeadingsAndMore();
