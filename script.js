let myLibrary = [];

let mainContainer = document.querySelector('.main-container');

let author = document.getElementById('author');
let title = document.getElementById('title');
let pages = document.getElementById('pages');
let read = document.getElementById('read');

let bookContainer = document.querySelector('.book-container')


function readToggle() {
  let output = this.innerHTML;
  let valueOutp = this.value;
  if(output === 'Read') {
     output = 'Not Read'
     valueOutp = 'Not Read';
  } else {
    output = 'Read' 
    valueOutp = 'Read';
  }
  libraryRead = () => {
  let book = this.parentElement;
  let bookDataNum = book.getAttribute('data-number');
  let dataSync = myLibrary.findIndex(item => item.dataNumber == bookDataNum)
  myLibrary[dataSync].read = valueOutp;
  }
  
}

read.addEventListener('click', readToggle);


function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min); 
}

function removeBook() {
  let book = this.parentElement;
  let bookDataNum = book.getAttribute('data-number')
  book.remove();
  let dataSync = myLibrary.findIndex(item => item.dataNumber == bookDataNum)
  myLibrary.splice(dataSync, 1);
}

function addBookToLibrary() {
   let newBook = new Book(author.value, title.value, pages.value, read.value);
       
   let clonedBookContainer = bookContainer.cloneNode(true);
  
       clonedBookContainer.setAttribute('data-number', `${getRandomArbitrary(0, Number.MAX_SAFE_INTEGER)}`);
       
       newBook.dataNumber = `${clonedBookContainer.getAttribute('data-number')}`
       myLibrary.push(newBook)
   mainContainer.append(clonedBookContainer);

   let clonedInputs = document.querySelectorAll('.book-container[data-number] > input');
   for(inp of clonedInputs) {
    inp.setAttribute('disabled', '');
   }

   let clonedBtnAdd = document.querySelectorAll('.book-container[data-number] > #add');
   for(add of clonedBtnAdd) {
    add.setAttribute('hidden', '')
  }

  let clonedLabels = document.querySelectorAll('.book-container[data-number] > label');
  for(lab of clonedLabels) {
    lab.setAttribute('hidden', '');
   }

   let clonedBtnRemove = document.querySelectorAll('.book-container[data-number] > #remove');
   for(rem of clonedBtnRemove) {
    rem.addEventListener('click', removeBook)
    rem.removeAttribute('hidden', '')
  }

  let clonedRead = document.querySelectorAll('.book-container[data-number] > #read');
   for(red of clonedRead) {
    red.addEventListener('click', readToggle)
     }

  }

   document.getElementById('add').addEventListener('click', addBookToLibrary)  