var sno=4
num = Number(prompt("Enter a number in between 1 to 9"))
if (num > sno) {
  alert("ohh ! entered number is too high guess again")
  console.log("your entered number is : " +num)
}
else if (num < sno) {
  alert("ohh entered number is too small guess try again")
  console.log("your entered number is : " +num);
}
else {
  alert("Yes, your number matched")
  console.log("your entered number is : " +num);
}
