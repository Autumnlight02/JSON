import jsonFile from "./large-file.json";

console.log("Hello via Bun!");

const start2 = performance.now();
const stringified = JSON.stringify(jsonFile);
const stop2 = performance.now();

console.log("timeStringify: ", stop2 - start2, "ms");

const start = performance.now();
JSON.parse(stringified);
const stop = performance.now();

console.log("timeParse: ", stop - start, "ms");
