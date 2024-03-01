//Prompt that asks for flavors and already has them
const froyoPrompt = prompt(
  "Enter a list of comma seperated froyo flavors.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Split the prompt into an array of strings
const flavors = froyoPrompt.split(",");

//Create a function
function countFreq(flavors) {
  const froyoObject = {};
  //Loops through flavors
  for (let i = 0; i < flavors.length; i++) {
    //If the the flavor is counted once leave the same but if its counted again add +1
    if (froyoObject[flavors[i]] === undefined) {
      froyoObject[flavors[i]] = 1;
    } else {
      froyoObject[flavors[i]] += 1;
    }
  }
  //Logs it in console
  console.log(froyoObject);
}

//Executes the function
countFreq(flavors);
