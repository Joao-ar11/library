class Book {
  constructor(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
  }
}

function openModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "flex";
  document
    .querySelector(".bookForm > button:first-child")
    .addEventListener("click", () => {
      modal.style.display = "none";
    });
}

function addToBookList(bookList) {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const read = document.querySelector("#read");
  bookList.push(
    new Book(title.value, author.value, +pages.value, read.checked)
  );
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
}

function addEntry(bookList, id) {
  const book = bookList[bookList.length - 1];
  const newBook = document.createElement("div");
  newBook.classList.add("book");

  const title = document.createElement("h2");
  title.textContent = book.title;
  newBook.appendChild(title);

  const author = document.createElement("p");
  author.textContent = `By: ${book.author}`;
  newBook.appendChild(author);

  const pages = document.createElement("p");
  pages.textContent = `Pages: ${book.pages}`;
  newBook.appendChild(pages);

  const checkDiv = document.createElement("div");
  const check = document.createElement("input");
  check.type = "checkbox";
  check.id = `read-book-${id}`;
  check.checked = book.haveRead;
  check.addEventListener("change", () => {
    book.haveRead = check.checked;
  });
  const label = document.createElement("label");
  label.textContent = "Have read";
  label.htmlFor = `read-book-${id}`;
  checkDiv.appendChild(check);
  checkDiv.appendChild(label);
  newBook.appendChild(checkDiv);

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => {
    newBook.remove();
    bookList.splice(bookList.length - 1, 1);
  });
  newBook.appendChild(removeButton);

  document.querySelector(".library").appendChild(newBook);
}

function addBook(bookList, id) {
  addToBookList(bookList);
  addEntry(bookList, id);
}

const bookList = [];
let id = 1;
const addBookButton = document.querySelector(".addBook");
addBookButton.addEventListener("click", openModal);
const bookForm = document.querySelector(".bookForm");
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addBook(bookList, id);
  id += 1;
  document.querySelector(".modal").style.display = "none";
});
