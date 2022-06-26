var name = prompt("Please enter your name :")
alert("Hii " + name + ", Welcome to our library")
var input = prompt("Please let us know your choice [ADD|LIST|EXIT]")
var books=[]
while (input != "EXIT") {
  if (input == "ADD") {
    var book_name = prompt("Please enter the book name you want to add")
    books.push(book_name)
  }
  else if (input == "LIST") {
    console.log("Here is the list of books :" +books)
  }
    input = prompt("Please let us know your choice [ADD|LIST|EXIT]")
}
