import { readFileSync, writeFileSync } from "fs";

function looksLikeContent(str: string): boolean {
  if (str.length < 15) return false;
  // If it's a CSS class string or svg, ignore
  if (str.includes("class=") || str.startsWith("<svg") || str.startsWith("M") && /[0-9]/.test(str)) return false;
  if (/^m\d/.test(str) && str.length < 50) return false; // likely svg path
  if (str.includes("text-decoration") || str.includes("box-shadow") || str.includes("mask-image")) return false;
  if (str.includes("react-mount") || str.includes("dangerouslySetInnerHTML") || str.includes("suppressHydration")) return false;
  
  // High-value content indicators:
  // - contains multiple words
  // - contains punctuation or Chinese
  // - has typical corporate/health terms
  const spaceCount = (str.match(/ /g) || []).length;
  const hasChinese = /[\u4e00-\u9fa5]/.test(str);
  
  if (hasChinese) return true;
  
  const keywords = ["longevity", "biological", "medicine", "health", "sanctuary", "clinical", "science", "premium", "wellness", "exclusive", "experience", "reserve", "treatment", "care", "therapy", "doctor", "specialist", "contact", "about", "services", "program", "consultation", "address", "phone", "email"];
  const lower = str.toLowerCase();
  if (keywords.some(kw => lower.includes(kw))) return true;

  if (spaceCount > 2 && /[a-zA-Z]/.test(str) && !str.includes(":") && !str.includes(";")) return true;
  
  return false;
}

function extract() {
  const fileContent = readFileSync("downloaded_js.js", "utf-8");
  
  // Match string literals
  const pattern = /"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|`[^`\\]*(?:\\.[^`\\]*)*`/g;
  const matches = fileContent.match(pattern) || [];
  
  const results: string[] = [];
  for (const m of matches) {
    const rawStr = m.slice(1, -1).replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'").trim();
    if (looksLikeContent(rawStr)) {
      results.push(rawStr);
    }
  }
  
  const unique = Array.from(new Set(results));
  console.log("Filtered content strings count:", unique.length);
  writeFileSync("filtered_content_strings.txt", unique.join("\n\n===\n\n"));
  
  // Print some matched items
  console.log("\nRepresentative matches:");
  console.log(unique.slice(0, 80).join("\n---\n"));
}

extract();
