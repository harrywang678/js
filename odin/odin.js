function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  if ((this.read = true)) {
    this.read = "read";
  } else {
    this.read = "not read yet";
  }

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

const TheJungleBook = new Book("The Jungle Book", "Harry Wang", 300, false);

console.log(TheJungleBook.info());

console.log(Object.getPrototypeOf(TheJungleBook) === Book.prototype);

Book.prototype.sayHello = function () {
  // prototype is basically the parent of the object which is also an object. You can define anything in the prototype so it can still be inherited in any Object.
  console.log("Hello, I am a book!");
};

TheJungleBook.sayHello();
