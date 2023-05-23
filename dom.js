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
var items = document.getElementsByClassName('list-group-item');
console.log(items);//gives list of items
console.log(items[2]);//accessing items
items[2].textContent="Hello";// changing text in the item
items[2].style.fontWeight='bold';//changing style
items[2].style.backgroundColor = 'green';
//items.style.backgroundColor="green";// we cannot apply to all the items, we need to use for loop
for (var i=0; i<items.length; i++)
{
    items[i].style.fontWeight='bold'; // it bold all the items
}


























