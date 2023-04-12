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
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;
  bookList.push(new Book(title, author, pages, read));
}

function addEntry(book, id) {
  const newBook = document.createElement("div");
  newBook.classList.add("book");

  const title = document.createElement("h2");
  title.textContent = book.title;
  newBook.appendChild(title);

  const author = document.createElement("p");
  author.textContent = `By: ${book.author}`;
  newBook.appendChild(author);

  const pages = document.createElement("p");
  pages.textContent = book.pages;
  newBook.appendChild(pages);

  const checkDiv = document.createElement("div");
  const check = document.createElement("input");
  check.type = "checkbox";
  check.id = `read-book-${id}`;
  check.checked = book.haveRead;
  const label = document.createElement("label");
  label.textContent = "Have read";
  label.htmlFor = `read-book-${id}`;
  checkDiv.appendChild(check);
  checkDiv.appendChild(label);
  newBook.appendChild(checkDiv);

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  newBook.appendChild(removeButton);

  document.querySelector("main").appendChild(newBook);
}

function addBook(bookList) {
  addToBookList(bookList);
  addEntry(bookList[bookList.length - 1], bookList.length - 1);
}

const bookList = [];
const addBookButton = document.querySelector(".addBook");
addBookButton.addEventListener("click", openModal);
const bookForm = document.querySelector(".bookForm");
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addBook(bookList);
  document.querySelector(".modal").style.display = "none";
});
