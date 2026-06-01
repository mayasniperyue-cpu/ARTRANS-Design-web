import { readFileSync, writeFileSync } from "fs";

function formatWj() {
  const code = readFileSync("extracted_wj_array.json", "utf-8");
  // Since code is a JS array, we can wrap it in an eval to parse it as an object
  const data = eval(`(${code})`);
  const formatted = JSON.stringify(data, null, 2);
  writeFileSync("formatted_wj.json", formatted);
  console.log("Successfully formatted and saved to formatted_wj.json!");
  console.log("Number of partners:", data.length);
  for (let i = 0; i < data.length; i++) {
    console.log(`- Partner ${i + 1}: ${data[i].name} (${data[i].role})`);
  }
}

formatWj();
