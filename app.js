'use strict'

function Pictures(number) {
  this.name = number;
  this.source = 'images/' + this.name + '.jpg';
  this.amountOfShows = 0;
  Pictures.all.push(this);
}
var pictures = [];
Pictures.all = [];
Pictures.allNames = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

for(var i = 0; i < Pictures.allNames.length; i++){
  new Pictures(Pictures.allNames[i]);
}

Pictures.imageElement = document.getElementById('randomPictures1');
Pictures.imageElement = document.getElementById('randomPictures2');
Pictures.imageElement = document.getElementById('randomPictures3');

function randomPictures1(){
  var randomIndex = Math.floor(Math.random() * Pictures.all.length);
  Pictures.imageElement.src = Pictures.all[randomIndex].source;
  Pictures.imageElement.alt = Pictures.all[randomIndex].name;
  Pictures.all[randomIndex].amountOfShows += 1;
}

function randomPictures2(){
  var randomIndex = Math.floor(Math.random() * Pictures.all.length);
  Pictures.imageElement.src = Pictures.all[randomIndex].source;
  Pictures.imageElement.alt = Pictures.all[randomIndex].name;
  Pictures.all[randomIndex].amountOfShows += 1;
}

function randomPictures3(){
  var randomIndex = Math.floor(Math.random() * Pictures.all.length)
  Pictures.imageElement.src = Pictures.all[randomIndex].source;
  Pictures.imageElement.alt = Pictures.all[randomIndex].name;
  Pictures.all[randomIndex].amountOfShows += 1;
}
document.getElementById('randomPictures1').addEventListener('click', randomPictures1);
document.getElementById('randomPictures2').addEventListener('click', randomPictures2);
document.getElementById('randomPictures3').addEventListener('click', randomPictures3);

randomPictures1();
randomPictures2();
randomPictures3();
