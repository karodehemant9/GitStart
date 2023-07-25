//traversing the DOM
let itemList = document.querySelector('#items')

//prentNode
console.log(itemList.parentNode)

//parentElement
console.log(itemList.parentElement)

//childNode
console.log(itemList.childNodes)

//childrens
console.log(itemList.children)


//singlechildren
console.log(itemList.children[0])
itemList.children[0].textContent = 'HELLO Item 1'

//firstChild
console.log(itemList.firstChild)

//lastChild
console.log(itemList.lastChild)

//firstElementChild
console.log(itemList.firstElementChild)


//lastElementChild
console.log(itemList.lastElementChild)

//nextSibling
console.log(itemList.nextSibling)

//previousSibling
console.log(itemList.previousSibling)

//nextElementSibling
console.log(itemList.nextElementSibling)

//previousElementSibling
console.log(itemList.previousElementSibling)

//createElement
let newDiv = document.createElement('div')
console.log(newDiv);
newDiv.className = 'hello';
newDiv.id = 'hi'; 

//setAttribute
newDiv.setAttribute('title','Hello Div');

//createTextNode
let newDivText = document.createTextNode('Hello World');

//adding textNode to Div
newDiv.appendChild(newDivText); 


let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);




itemList.previousElementSibling.previousElementSibling.previousElementSibling.textContent = 'HELLO Add Items'


itemList.children[0].textContent = 'HELLO Item 1'