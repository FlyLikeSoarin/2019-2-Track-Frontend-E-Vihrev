// Removes all elements with only one entry from array
export default function nonUniqueElements(data) {
  var dict = {};
  data.forEach((value) => {
    if (dict[value] == undefined) {
      dict[value] = 0;
    } else {
      dict[value] += 1;
    }
  })

  var result = [];
  data.forEach((value) => {
    if (dict[value] > 0) {
      result.push(value);
    }
  })

  return result;
}
