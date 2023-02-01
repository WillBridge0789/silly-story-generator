//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS

const storyTxt = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised —:insertx: weighs 300 pounds, and it was a hot day."

const insertX = [
    'Danny Devito', 'Will Smith', 'The Trans Siberian Orchestra',
];

const insertY = [
    'Maddison Square Garden', 'Oblivion', '100 Acre Wood'
];

const insertZ = [
    'grew wings and flew away', 'parkoured through traffic to get away from bill collectors', 'fell through the ground and melted in the earths core'
]; 


//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
    let newStory = storyTxt;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);
  
    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll('Bob', name);

    }
  
    if(document.getElementById("us").checked) {
        const weight = Math.round(300);
        const temperature =  Math.round(94);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(21.428) + ' stone';
        const temperature =  Math.round(34.4444) + ' centigrade';
    }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}