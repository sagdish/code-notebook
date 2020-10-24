/* 
                    Head ... 
Document -> Root -> 
                    Body ...

*/



// commont used ones: 
/*

document.all -> returns array like elements (html collections) of all elements
document.title - title

** selectors: 
let id = document.getElementById("id-here")
let elements = document.getElementsByClassName('class name here') -> returns html collection
let tags = document.getElementsByTagName('tags names')
let qSelector = document.querySelector(".class #id") -> return one element
let qSelectorAll = document.querySelectorAll(".class #id") -> return html collection


** apply methods:
id.textContent = 'changed text goes here' // respects styles such as display: none
id.innerText = "text" 
id.innerHTML = <h2>Hello</h2> // puts html inside
id.style.-css properties here-  = 
id.style.borderBottom = "solid 1px red"

// loop throug collection: 
for (let i = 0; i < elements.length; i++) {
  elements[i].style.backgroundColor = '#323424';
}



** changing, selecting DOM:
var id = document.querySelector("#id");

//parent node property
id.parentNode > returns parent element
id.parentNode.style.backgroundColor = 'fdasfd'
id.parentNode.parentNode -> parent of parent

// parent elements:
id.parentElement -> for the most part can be interchangeble with parentNode

// childs:
bad: id.childNotes -> node list ! not used commonly

id.children -> collection of element ! better method
id.firstElementChild -> element
id.lastElementChild -> element

// siblings:
id.nextElementSibling -> element
id.previousElementSibling -> element


** create elements:

const newElem = document.createElement("div"); -> creates new div

newElem.className = "class-name"
newElem.id = "id-name"

// add atribute
newElem.setAttribute('title', 'hello div');

// create text node:
cosnt newDivText = document.createTextNode("Hello World");
newElem.appendChild(newDivText);

// insert element:
someElem.insertBefore('what we insert ie div', 'before what ie h1');



*/