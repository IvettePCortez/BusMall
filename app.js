'use strict';

function Pictures(number) {
  this.name = number;
  this.source = 'images/' + this.name + '.jpg';
  this.amountOfShows = 0;
  Pictures.all.push(this);
}
Pictures.totalClicks = 0;
Pictures.all = [];
Pictures.allNames = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

var previouslyShown = [];

for(var i = 0; i < Pictures.allNames.length; i++){
  new Pictures(Pictures.allNames[i]);
}

Pictures.leftImage = document.getElementById('left');
Pictures.centerImage = document.getElementById('center');
Pictures.rightImage = document.getElementById('right');
Pictures.container = document.getElementById('imageContainer');

function makeRandomNumber(){
  return Math.floor(Math.random() * Pictures.all.length);
}

function displayImages(){
  var numbers = [];
  numbers[0] = makeRandomNumber();
  numbers[1] = makeRandomNumber();

  while(numbers[0] === numbers[1]) {
    numbers[1] = makeRandomNumber();
  }
  numbers[2] = makeRandomNumber();
  while(numbers[2] === numbers[1] || numbers[2] === numbers[0]) {
    numbers[2] = makeRandomNumber();
  }
  Pictures.leftImage.src = Pictures.all[numbers[0]].source;
  Pictures.centerImage.src = Pictures.all[numbers[1]].source;
  Pictures.rightImage.src = Pictures.all[numbers[2]].source;
  Pictures.leftImage.alt = Pictures.all[numbers[0]].name;
  Pictures.centerImage.alt = Pictures.all[numbers[1]].name;
  Pictures.rightImage.alt = Pictures.all[numbers[2]].name;
  Pictures.all[numbers[0]].amountOfShows += 1; Pictures.all[numbers[1]].amountOfShows += 1;
  Pictures.all[numbers[2]].amountOfShows += 1;
  previouslyShown = numbers;
}

Pictures.container.addEventListener('click', handleClick);

function showList(){
  var ulEl = document.getElementsById('theList');

  for(var i = 0; i < Pictures.all.length; i++){
    var liEl = document.createElement('li');

    liEl.textContent = Pictures.all[i].name + ' was shown ' + Pictures.all[i].amountOfShows + ' times and was clicked ' + Pictures.all[i].timesClicked + ' times.';

    ulEl.appendChild(liEl);
  }
}
function handleClick(e){
  Pictures.totalClicks += 1;
  console.log(Pictures.totalClicks, 'total clicks');
  for (var i = 0; i < Pictures.all.length; i++){
    if (e.target.alt === Pictures.all[i].name){
      Pictures.all[i].timesClicked += 1;
    }
  }
  if (Pictures.totalClicks === 3){
    Pictures.container.removeEventListener('click', handleClick);
    return showList();
  }
  displayImages();
}





// document.getElementById('left').addEventListener('click', randomPictures1);
// document.getElementById('center').addEventListener('click', randomPictures2);
// document.getElementById('right').addEventListener('click', randomPictures3);

// randomPictures1();
// randomPictures2();
//randomPictures3();
