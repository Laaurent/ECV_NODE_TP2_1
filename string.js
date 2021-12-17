export const stringToSlug = (str) => {
   str = str.replace(/^\s+|\s+$/g, ""); // trim
   str = str.toLowerCase();

   // remove accents, swap ñ for n, etc
   var from = "åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
   var to = "aaaaaaeeeeiiiioooouuuunc------";

   for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
   }

   str = str
      .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
      .replace(/\s+/g, "-") // collapse whitespace and replace by -
      .replace(/-+/g, "-"); // collapse dashes

   return str;
};
export const capitalizeString = (str) => {
   var splitStr = str.toLowerCase().split(" ");
   for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   // Directly return the joined string
   return splitStr.join(" ");
};
