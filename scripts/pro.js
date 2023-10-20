import brand from "../data/product_listing.json" assert { type: "json" };

function findDuplicatesByProperty(arr, property) {
  const propertyOccurrences = {};
  const duplicates = [];

  arr.forEach((obj) => {
    const propertyValue = obj.attributes[property];

    if (propertyOccurrences[propertyValue]) {
      if (propertyOccurrences[propertyValue] === 1) {
        // This is the second occurrence, so mark as duplicate
        duplicates.push(obj);
      }
      propertyOccurrences[propertyValue]++;
    } else {
      propertyOccurrences[propertyValue] = 1;
    }
  });

  return duplicates;
}

// Example usage
const arrayOfObjects = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Apple" }, // Duplicate
  { id: 4, name: "Cherry" },
  { id: 5, name: "Banana" }, // Duplicate
];

const propertyName = "name";
const duplicateObjects = findDuplicatesByProperty(brand, "name");
console.log(duplicateObjects);
// Output: [ { id: 1, name: 'Apple' }, { id: 2, name: 'Banana' } ]
