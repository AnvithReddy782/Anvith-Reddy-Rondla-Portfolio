const fs = require('fs');
try {
    const content = fs.readFileSync('init_output.json', 'utf16le');
    console.log(content);
} catch (e) {
    console.error(e);
}
