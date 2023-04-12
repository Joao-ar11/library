class Book {
  constructor(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead === "on";
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

function addBook(bookList) {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").value;
  bookList.push(new Book(title, author, pages, read));
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
