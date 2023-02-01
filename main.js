//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS

let storyTxt = "It was 94 fahrenheit outside, so" + xItem + " went for a walk. When they got to" + yItem + " , they stared in horror for a few moments, then" + zItem + ". Bob saw the whole thing, but was not surprised — " + xItem + " weighs 300 pounds, and it was a hot day."

let insertX = [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas",
];

let insertY = [
    "the soup kitchen",
    "Disneyland",
    "the White House"
];
let insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"
]; 

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

const newStory = storyTxt;
const xItem = randomValueFromArray();
const yItem = randomValueFromArray();
const zItem = randomValueFromArray();


function result() {

  if(customName.value !== '') {
    const name = customName.replace("Bob");

  }
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}