const fs = require("fs");

fs.copyFileSync("./index.html", "./dist/index.html");
fs.copyFileSync("./README.md", "./dist/README.md");
fs.copyFileSync("./manifest.json", "./dist/manifest.json");
fs.cpSync("./styles", "./dist/styles", { recursive: true });
fs.cpSync("./public", "./dist/public", { recursive: true });
