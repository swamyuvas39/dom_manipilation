//console.dir(document);// it gives complete details of the document
//console.log(document.URL);// it gives URL of the document
//console.log(document.title);//it gives title of the document
//document.title='swamyuvas';// changing title of the document
//console.log(document.doctype);// <!DOCTYPE html>
//console.log(document.head); //checking head
//console.log(document.body);//checking body
//console.log(document.all);// it gives all the element tags 
//console.log(document.all[6])//accessing particular element tag
// If u want to add some text to the element 
//document.all[10].textContent='Hello Swamyuvas';
//console.log(document.forms);// if want to get all the forms
//console.log(document.links);//if want to get all the links
// we can access forms by using []
//console.log(document.forms[0]);
//console.log(document.images);//it gives images that we used

//GET ELEMENT BY ID
//console.log(document.getElementById('items'));
// we can place inside a variable
//var items = document.getElementById('items');
//console.log(items);
//var headerTitle = document.getElementById('header-title');
//var head = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent="Hello";
// headerTitle.innerText="Good bye";
// headerTitle.innerHTML='</h3>hello</h3>';
// changes  style 
//head.style.borderBottom='solid black 3px';

//GET ELEMENTS BY CLASS NAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);//gives list of items
// console.log(items[2]);//accessing items
// items[2].textContent="Hello";// changing text in the item
// items[2].style.fontWeight='bold';//changing style
// items[2].style.backgroundColor = 'green';
// //items.style.backgroundColor="green";// we cannot apply to all the items, we need to use for loop
// for (var i=0; i<items.length; i++)
// {
//     items[i].style.fontWeight='bold'; // it bold all the items
// }

//GET ELEMENT BY TAGNAME//

// var li = document.getElementsByTagName('li');
// console.log(li);//gives list of items
// console.log(li[2]);//accessing items
// li[2].textContent="Hello";// changing text in the item
// li[2].style.fontWeight='bold';//changing style
// li[2].style.backgroundColor = 'green';
// li[4].textContent="Hello 5";
// for (var i=0; i<li.length; i++)
// {
//      li[i].style.fontWeight='bold'; // it bold all the items
// }

//QUERY SELECTOR//

// // when we want to use more than one items then we use query selector

// var head = document.querySelector("#main-header");// we can use anything like Id,className,TagName
// //instead of using document.querySelector, we can replace with $ symbol
// //var head = $('#main-header');
// head.style.borderBottom = 'solid black 4px';

// // grab input 
// var input = document.querySelector('input');
// input.value = "Hello!, Swamyuvas";
// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";
// var item = document.querySelector('.list-group-item');//class of list 
// item.style.color = 'green';
// // change style to last item
// var LastItem = document.querySelector('.list-group-item:last-child');
// LastItem.style.color = 'red';
// // change style to nth child
// var SecondItem = document.querySelector('.list-group-item:nth-child(2)');
// SecondItem.style.color = 'blue';

// // second item background color green
 var secondItem = document.querySelector('li:nth-child(2)');
// secondItem.style.backgroundColor = 'green';
// // Using display property
// // var thirdItem = document.querySelector('li:nth-child(2)');
// //thirdItem.style.display = 'none';

// // Using visibility property
// const thirdItem = document.querySelector('li:nth-child(3)');
// thirdItem.style.visibility = 'hidden';

// second item font color changed to green

// secondItem.style.color = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for (var i=0; i<odd.length; i++)
// {
//     odd[i].style.backgroundColor = 'green';
// }

// TRAVERSING THE DOM //

// var itemList = document.querySelector('#items');
// console.log(itemList);

// //parentNode

// console.log(itemList.parentNode); // gives parentNode of the itemList
// itemList.parentNode.style.backgroundColor = 'pink';// changes the background color of parentNode
// console.log(itemList.parentNode.parentNode);// gives parentNode of ParentNode
// itemList.parentNode.parentNode.style.backgroundColor='yellow';

//parentElement

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'pink';// changes the background color of parentElement
// console.log(itemList.parentElement.parentElement);// gives parentElement of ParentElemet

//childNodes

// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].textContent="Hello";
// itemList.children[1].style.backgroundColor='yellow';

// firstChild

//console.log(itemList.firstChild); //it icludes white spaces as text, dont prefere this

//firstElementChild

// console.log(itemList.firstElementChild); // it gives the first element 
// itemList.firstElementChild.textContent="Hello";

// lastChild

//console.log(itemList.lastChild);

//lastElementChild

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="Hello";

//nextSibling

//console.log(itemList.nextSibling); // it gives next sibling whether it is white space or element
//itemList.nextSibling.textContent="Hello";// it insert at the end of the list

//nextElementSibling

//console.log(itemList.nextElementSibling);// it gives next sibling element, if there is no element it retuns null

//previousSibling

//console.log(itemList.previousSibling);

//previousElementSibling

//console.log(itemList.previousElementSibling);

//createElement

//lets create a newDiv

// var newDiv = document.createElement('div');
// //add className
// newDiv.className="hello";
// //add Id 
// newDiv.id="newdiv";
// newDiv.textContent= "Swamyuvas";
// //setAttribute
// newDiv.setAttribute ('title', 'hello div');
// //create text node
// var newDivText = document.createTextNode('Hello world');
// //add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header.container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);
// container.insertBefore(newDiv,h1);

// /// Access the <head> element
// var headElement = document.head;

// // Create a new text node
// var newText = document.createTextNode('Hello');

// // Access the <title> element
// var titleElement = headElement.querySelector('title');

// // Insert the new text node before the <title> element
// headElement.insertBefore(newText, titleElement);

// //Access the item1 li element
// var items = document.getElementById('items');
// console.log(items);
// var list = items.querySelector('li');
// console.log(list);
// items.insertBefore(newText,list);




































