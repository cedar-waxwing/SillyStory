/* For learning purposes, I've accompanied the JavaScript with the instructions followed in https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Silly_story_generator so that I can follow along with what the JavaScript means more easily. */

/* This gives you three variables that store references to the "Enter custom name" text field (customName), the "Generate random story" button (randomize), and the <p> element at the bottom of the HTML body that the story will be copied into (story), respectively. */

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

/*In addition you've got a function called randomValueFromArray() that takes an array, and returns one of the items stored inside the array at random."*/

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

/* Store the first, big long, string of text inside a variable called storyText.*/

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

/*Store the first set of three strings inside an array called insertX.*/

let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"]

/*Store the second set of three strings inside an array called insertY.*/

let insertY = ["the soup kitchen", "Disneyland", "the White House"]

/*Store the third set of three strings inside an array called insertZ.*/

let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]

/* This adds a click event listener to the randomize variable so that when the button it represents is clicked, the result() function is run.*/

randomize.addEventListener('click', result);

/*This adds a partially-completed result() function definition to your code. */

function result() {
/* This is needed so we can create a new random story each time the button is pressed and the function is run. If we made changes directly to storyText, we'd only be able to generate a new story once.*/

  var newStory = storyText;

/*Create three new variables called xItem, yItem, and zItem, and make them equal to the result of calling randomValueFromArray() on your three arrays (the result in each case will be a random item out of each array it is called on). For example you can call the function and get it to return one random string out of insertX by writing randomValueFromArray(insertX)*/

  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

/*Next we want to replace the three placeholders in the newStory string — :insertx:, :inserty:, and :insertz: — with the strings stored in xItem, yItem, and zItem. There is a particular string method that will help you here — in each case, make the call to the method equal to newStory, so each time it is called, newStory is made equal to itself, but with substitutions made. So each time the button is pressed, these placeholders are each replaced with a random silly string. As a further hint, the method in question only replaces the first instance of the substring it finds, so you might need to make one of the calls twice.
*/

newStory = newStory.replace(":insertx:", xItem);
newStory = newStory.replace(":inserty:", yItem);
newStory = newStory.replace(":insertz:", zItem);
newStory = newStory.replace(":insertx:", xItem);

/*Inside the first if block, add another string replacement method call to replace the name 'Bob' found in the newStory string with the name variable. In this block we are saying "If a value has been entered into the customName text input, replace Bob in the story with that custom name."*/

  if(customName.value !== "") {
    let name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  /*Inside the second if block, we are checking to see if the uk radio button has been selected. If so, we want to convert the weight and temperature values in the story from pounds and Fahrenheit into stones and centigrade. What you need to do is as follows:
  Look up the formulae for converting pounds to stone (Pounds/14 = Stone), and Fahrenheit to centigrade ((X°F − 32) × 5/9 = Y°C).*/

  /*Inside the line that defines the weight variable, replace 300 with a calculation that converts 300 pounds into stones. Concatenate ' stone' onto the end of the result of the overall Math.round() call.*/
  
  if(document.getElementById("uk").checked) {
    let weight = Math.round(300/14) + " stone";

  /*Inside the line that defines the temperature variable, replace 94 with a calculation that converts 94 Fahrenheit into centigrade. Concatenate ' centigrade' onto the end of the result of the overall Math.round() call.*/
    let temperature = Math.round((94 - 32) * (5/9)) + " centigrade";

  /*Just under the two variable definitions, add two more string replacement lines that replace '94 fahrenheit' with the contents of the temperature variable, and '300 pounds' with the contents of the weight variable.*/
    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);

  }

/*Finally, in the second-to-last line of the function, make the textContent property of the story variable (which references the paragraph) equal to newStory.*/

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
