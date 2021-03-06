import { stringToSlug, capitalizeString } from "./string.js";
import { pickRandomFag, sortArray } from "./array.js";

export default { stringToSlug, capitalizeString, pickRandomFag, sortArray };

console.log(capitalizeString("hello world"));

console.log(pickRandomFag([1, 2, 3]));

console.log(sortArray(["T", "A", "C"]));

console.log(stringToSlug("heéèlloôö wöoôrld"));
