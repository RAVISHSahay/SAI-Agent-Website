const fs = require('fs');
const path = require('path');

const partsDir = path.join(__dirname, 'html_parts');
const outputFile = path.join(__dirname, 'function_focused_website.html');

let finalHtml = '';
for (let i = 1; i <= 5; i++) {
    const partPath = path.join(partsDir, `part_${i}.html`);
    if (fs.existsSync(partPath)) {
        finalHtml += fs.readFileSync(partPath, 'utf8') + '\n';
    }
}

fs.writeFileSync(outputFile, finalHtml);
console.log('Successfully generated function_focused_website.html');

// Cleanup
for (let i = 1; i <= 5; i++) {
    const partPath = path.join(partsDir, `part_${i}.html`);
    if (fs.existsSync(partPath)) {
        fs.unlinkSync(partPath);
    }
}
if (fs.existsSync(partsDir)) {
    fs.rmdirSync(partsDir);
}
console.log('Cleanup complete');
