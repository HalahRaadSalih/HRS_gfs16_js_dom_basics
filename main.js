console.log('******** getElementById *********');
var firstParagraph = document.getElementById('main');
console.log(firstParagraph);

console.log('Sanity check!');

console.log('******** getElementsByTagName *********');

var getAllElements = document.getElementsByTagName('ul');
console.log(getAllElements);

var getSingleElement = document.getElementsByTagName('ul')[0];
console.log(getSingleElement);

allListItems = document.getElementsByTagName('li');

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i]);
}

console.log('******** getElementByClassName *********');
var evenElements = document.getElementsByClassName('even');
console.log(evenElements);


var oddElements = document.getElementsByClassName('odd');
console.log(oddElements);

var firstEvenElement = document.getElementsByClassName('even')[0];
console.log(firstEvenElement)

var firstOddElement = document.getElementsByClassName('odd')[0];
console.log(firstOddElement);

console.log('******** QuerySelector *********');
var main = document.querySelector('#main');
console.log(main);

var firstOddElement = document.querySelector('.odd');
console.log(firstOddElement);


console.log('************* querySelectorAll *****************');
var oddAndEvenElements = document.querySelectorAll('.odd, .even');
console.log(oddAndEvenElements);


console.log('************** Traversing the DOM ***************');
console .log('************* Modifying DOM Nodes ***************');

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText);
}

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText = i);
}
console.log(allListItems);


console.log('*********** Manipulation ****************');
document.getElementById('main').style.backgroundColor = "goldenrod";

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].style.backgroundColor = 'red');
}


console.log('******* Creating new elements ********');
var li = document.createElement('li');
  console.log(li);

 var newElement = li.innerText = "another list item";
 console.log(newElement);
 console.log(li);

 getSingleElement.appendChild(li);
  console.log(allListItems);


  var anotherListElement = document.createElement('li');
anotherListElement.innerText = "prepend";
console.log(anotherListElement);
getSingleElement.insertBefore(anotherListElement, getSingleElement.firstChild);
console.log(allListItems);