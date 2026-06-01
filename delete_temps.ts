import { unlinkSync, existsSync } from "fs";

const filesToDelete = [
  "analyze_css.ts",
  "comp_Aj.js",
  "comp_Cj.js",
  "comp_Pj.js",
  "comp_Sj.js",
  "comp_Tj.js",
  "comp__j.js",
  "comp_fj.js",
  "comp_hj.js",
  "comp_kj.js",
  "comp_pj.js",
  "comp_bj.js",
  "debug_modal_component.js",
  "debug_partners_component.js",
  "debug_react_around_ARTRANS_Media_Partners.js",
  "debug_react_around_FROM_PARTNER_EXPERTISE.js",
  "debug_react_around_Structuring_the_Ecosystem.js",
  "debug_react_around_The_Partnership_Model.js",
  "describe_page.ts",
  "downloaded_css.css",
  "downloaded_index.html",
  "downloaded_js.js",
  "extract_content.ts",
  "extract_css_rules.ts",
  "extract_ej_array.ts",
  "extract_fh_pj.ts",
  "extract_variables.ts",
  "extract_bj_full.ts",
  "find_v.ts",
  "format_wj.ts",
  "get_all_comps.ts",
  "get_components.ts",
  "get_modal.ts",
  "get_partners_component.ts",
  "extracted_app_chunk.js",
  "extracted_ej_array.json",
  "extracted_num_array.json",
  "extracted_strings.txt",
  "extracted_wj_array.json",
  "filtered_content_strings.txt",
  "formatted_wj.json",
  "test_fetch.ts",
  "test_fetch_assets.ts"
];

for (const file of filesToDelete) {
  if (existsSync(file)) {
    try {
      unlinkSync(file);
      console.log(`Deleted temp file: ${file}`);
    } catch (e) {
      console.error(`Failed to delete: ${file}`, e);
    }
  }
}
