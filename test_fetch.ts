import { writeFileSync } from "fs";

async function main() {
  try {
    const res = await fetch("https://artransmedia.base44.app/");
    const text = await res.text();
    console.log("HTML length:", text.length);
    console.log("HTML Preview (first 4000 characters):");
    console.log(text.slice(0, 4000));
    console.log("HTML Preview (last 2000 characters):");
    console.log(text.slice(-2000));
    writeFileSync("downloaded_index.html", text);
  } catch (err) {
    console.error("Error fetching:", err);
  }
}

main();
