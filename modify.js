const fs = require('fs');

let content = fs.readFileSync('src/constants/appData.ts', 'utf8');

// Update GlossaryItem interface
content = content.replace(
  /export interface GlossaryItem {.*?\n}/s,
  (match) => {
    return match.replace('}', '  tip?: string;\n}');
  }
);

// We want to safely update the GLOSSARY_DATA definition strings inside appData.ts
// The definition string looks like: definition: "Some text. Tip: Some tip here.",
content = content.replace(
  /definition:\s*"([^"]*(?:Tip:|Tip :)[^"]*)"/g,
  (match, p1) => {
    // p1 contains the content inside the quotes
    let tipIndex = p1.lastIndexOf("Tip:");
    if (tipIndex === -1) {
        tipIndex = p1.lastIndexOf("Tip :");
    }
    
    if (tipIndex !== -1) {
      let definitionPart = p1.substring(0, tipIndex).trim();
      let tipPart = p1.substring(tipIndex + 4).trim(); // Skip 'Tip:'
      if (tipPart.startsWith(':')) {
          tipPart = tipPart.substring(1).trim();
      }
      return `definition: "${definitionPart}",\n    tip: "${tipPart}"`;
    }
    return match;
  }
);

fs.writeFileSync('src/constants/appData.ts', content);
console.log('Modification complete.');
