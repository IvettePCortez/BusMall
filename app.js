'use strict';

function Pictures(name) {
  this.name = name;
  this.source = 'images/' + this.name + '.jpg';
  this.amountOfShows = 0;
  this.timesClicked = 0;
  // this.pics = [
  //   document.getElementById('left'),
  //   document.getElementById('center'),
  //   document.getElementById('right'),
  // ];
  Pictures.all.push(this);
}
Pictures.totalClicks = 0;
Pictures.all = [];
Pictures.allNames = ['banana', 'ipad', 'boots', 'breakfast', 'meatballGum', 'chair', 'greenMonster', 'dog-duck', 'dragonMeat', 'pen', 'petSweep', 'r2d2Bag', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicornMeat', 'usb', 'watercan', 'wine'];

Pictures.leftImage = document.getElementById('left');
Pictures.centerImage = document.getElementById('center');
Pictures.rightImage = document.getElementById('right');
Pictures.container = document.getElementById('imageContainer');
Pictures.previouslyShown = [];

for(var i = 0; i < Pictures.allNames.length; i++){
  new Pictures(Pictures.allNames[i]);
}

function makeRandomNumber(){
  return Math.floor(Math.random() * Pictures.all.length);
}


// while(previouslyShown === number[0] ||
//   number[0] === number[1] ||
//   number[0] === number[1] ||
//   [1] === number[2]) {
//   makeRandomNumber();
// }

// while(currentlyShowing === number[0] ||
//   number[0] === number[1] ||
//   number[0] === number[1] ||
//   [1] === number[2]) {
//   makeRandomNumber();
// }
//
// while(currentlyShowing === previouslyShown) {
//   makeRandomNumber();
// }


function displayImages(){
  var currentlyShowing = [];
  currentlyShowing[0] = makeRandomNumber();
  currentlyShowing[1] = makeRandomNumber();
  currentlyShowing[2] = makeRandomNumber();

  while(currentlyShowing[0] === currentlyShowing[1]) {
    currentlyShowing[1] = makeRandomNumber();
  }
  while(currentlyShowing[2] === currentlyShowing[1] ||
     currentlyShowing[2] === currentlyShowing[0]) {
    currentlyShowing[2] = makeRandomNumber();
  }
  Pictures.leftImage.src = Pictures.all[currentlyShowing[0]].source;
  Pictures.centerImage.src = Pictures.all[currentlyShowing[1]].source;
  Pictures.rightImage.src = Pictures.all[currentlyShowing[2]].source;

  Pictures.leftImage.id = Pictures.all[currentlyShowing[0]].name;
  Pictures.centerImage.id = Pictures.all[currentlyShowing[1]].name;
  Pictures.rightImage.id = Pictures.all[currentlyShowing[2]].name;

  Pictures.all[currentlyShowing[0]].amountOfShows += 1;
  Pictures.all[currentlyShowing[1]].amountOfShows += 1;
  Pictures.all[currentlyShowing[2]].amountOfShows += 1;

  Pictures.previouslyShown[0] = currentlyShowing[0];
  Pictures.previouslyShown[1] = currentlyShowing[1];
  Pictures.previouslyShown[2] = currentlyShowing[2];
}
displayImages();

function showList(){
  var ulEl = document.getElementById('theList');

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
    if (e.target.id === Pictures.all[i].name){
      Pictures.all[i].timesClicked++;
      console.log(Pictures.all[i].timesClicked, 'TIMES CLICKED');
    }
  }
  if(Pictures.totalClicks === 3){
    Pictures.container.removeEventListener('click', handleClick);
    showList();
  }
  displayImages();
}

Pictures.container.addEventListener('click', handleClick);




// document.getElementById('left').addEventListener('click', randomPictures1);
// document.getElementById('center').addEventListener('click', randomPictures2);
// document.getElementById('right').addEventListener('click', randomPictures3);

// randomPictures1();
// randomPictures2();
//randomPictures3();
