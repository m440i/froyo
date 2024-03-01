//Prompt that asks for flavors
const froyoFlavors = prompt("Enter a list of comma seperated froyo flavors.");
// Split the flavors into an array of strings

const froyoArray = ["vanilla, vanilla, vanilla, strawberry, coffee, coffee"];

// const numbers = [];
// for (let i = 0; i < stringArray.length; i++) {
//   const str = stringArray[i];
//   const number = parseInt(str);
//   numbers.push(number);
// }

function countFreq(array) {
  const froyoObject = {};

  for (let i = 0; i < array.length; i++) {
    if (froyoObject[array[i]] === undefined) {
      froyoObject[array[i]] = 1;
    } else {
      froyoObject[array[i]] += 1;
    }
  }

  console.log(froyoObject);
}

countFreq(froyoArray);
