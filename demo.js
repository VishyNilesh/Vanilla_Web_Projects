var name=prompt("Enter your name")
var age=prompt("Enter you age")
agedays=age*365.25
remainingdays=(60-age)*365.25
alert("Hello "+name+"\n your current age is "+agedays+"days \n You will be their on earth for "+remainingdays+"days.No can change it until I want to")

//sum function
function sum(num1,num2){
  return num1+num2
}
var num1 = Number(prompt("Enter the first number for sum :"))
var num2 = Number(prompt("Enter the second number for sum :"))
alert("The sum of your given numbers is :" + sum(num1,num2))
//sum function
function sum(num1,num2){
  return num1+num2
}
var num1 = prompt("Enter the first number for sum :")
var num2 = prompt("Enter the second number for sum :")
alert("The sum of your given numbers is :" + sum(num1,num2))
//sqaure
function square(num){
  return num**2
}
var num = Number(prompt("Enter the number whose square you want :"))
alert("The square of your given number is :" + square(num))
//capitalize
function capitalize(input)
{
  input=input.toLowerCase()
  alert("Capitalized form for your entered string is " + input[0].toUpperCase()+input.slice(1))
}
var data = prompt("Enter the string you want to capitalize")
capitalize(data)
//even or not
function evenornot(num)
{
  if (num%2==0) {
    alert("Entered number is even")
  }
  else {
    alert("Not an even number please try again")
  }
}
var val = prompt("Enter your number to check whetehr it is even or not")
evenornot(val)
//factorial
function fact(num)
{
  var result = 1
  for (var i = 1; i <=num; i++) {
  result = result * i
  }
  return result
}
var num = Number(prompt("Enter the number whose factorial you want"))
fact(num)

//snake case to kebab case expression
function toKebab(string)
{
var result=""
for (var i = 0; i <string.length; i++)
{

  if (string[i] === "_")
  {
    result[i]="-"
  }
else {
   result += result[i]
}
}
return result
}
var string = prompt("Enter your string : ")
toKebab(string)

//local scope tricky

var x = 10

function f1()
{
    x = 777
  console.log(x)
}
function f2(){
  console.log(x);
  x = 50
}
function f3()
{
  console.log(x);
}
f1()
f2()
f3()
// set setInterval(function ()

setInterval(singASong,3000)
function singASong(){
  console.log("Rangama mangama");
  console.log("jigel jigel rani");
}
setInterval(function(){  console.log("Rangama mangama");
  console.log("jigel jigel rani");},3000)



// retrieving array elements using concept of loops
//while loop
var num=[10,20,30,40]
var i=0
while(i<num.length)
{
  console.log(num[i]);
  i++;
}

//for loops

var num =[10,20,'nilesh',null,true,50]
for (var i = 0; i < num.length; i++) {
  console.log(num[i]);
}

//for -of loop

var color = ['red','blue','green','yellow']
for (x of color) {
  console.log(x);
}

//for -each loop
var heroine =["Mallika","deepika","hartalika","kavita"]
function printData(heroine)
{
  console.log(heroine);
}
heroine.forEach(printData)
// passing functions as an argument to forEach
var heroine =["Mallika","deepika","hartalika","kavita"]

heroine.forEach(function printData(heroine)
{
  console.log(heroine);
})

//directly printing without using functions - console.log
var heroine =["Mallika","deepika","hartalika","kavita"]
heroine.forEach(console.log)

//directly printing without using functions - alert
var heroine =["Mallika","deepika","hartalika","kavita"]
heroine.forEach(alert)

//splice method is used to delete array elemts based on index
var heroines=["Mallika","deepika","hartalika","kavita"]
heroines.splice(2,1) //"Mallika","deepika","kavita"

heroines.splice(1,2)

// javascript function to print elements of array in reverse order

function reverse(array)
{
  for (var i = array.length-1; i >=0; i--) {
  console.log(array[i]);
  }
}
var array = [10,20,30,40,50]
reverse(array)

//javascript function to check whether all elements are identical or // NOT

function identical(array)
{
  for (var i = 1; i < array.length-1; i++) {
    if (array[0]===array[i])
    {
    console.log("matched index till "+ i+" "+i--);
    }
  }
}
var array = [10,10,10,10]
identical(array)
// FINDING MAximum element in a given array
function max (array)
{
  var first=array[0]
  for (var i = 1; i < array.length; i++)
  {
    if (array[i]>=first)
    {
      first=array[i]
    }
    else
    { }
  }
  console.log("maximum element in array :" + first)
  }
var array = [220,40,60,20,80,20,400]
max (array)

//identical function
function identical (array)
{
  var first=array[0]
  for (var i = 0; i < array.length; i++)
  {
    if(array[i]==first)
    {    }
    else
    {
      return console.log("All items are not equal");
      i=array.length+1
    }
  }
  console.log("ALL items are identical")
}
var array = [20,20,20,20,20,20,60]
identical (array)
//sum of the array
function sum (array)
{
  var first=array[0]
  for (var i = 1; i < array.length; i++)
  {
    first+=array[i]
  }
  console.log("Sum of elements in the array :" +first)
}
var array = [200,200,200,200,200,200,600]
sum (array)
//
