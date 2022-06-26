var input=prompt("Which operation you want to perform [add|del|list|exit]")
var books=[]
while (input!="exit") {

  if (input=="add") {
    add()
  }
  else if (input=="del") {
    del()
  }
  else if (input=='list') {
    list()
  }
  else if (input==exit) {}
  else {
    console.log("Please enter a valid option & try again");
  }
  input=prompt("Which operation you want to perform [add|del|list|exit]")
}

function add()
{
  var name = prompt("Please enter the name of book you want to add")
  books.push(name)
}
function del(){
  var del=prompt("Please enter the name of book you want to remove from list")
  var index=books.indexOf(del)
  books.splice(index,1)
}
function list()
{
  console.log(books);
}
