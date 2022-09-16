const form = document.getElementById('form')
const username =  document.getElementById('username')
const email =  document.getElementById('email')
const password =  document.getElementById('password')
const password2 =  document.getElementById('password2')


// VALID Email
function checkEmail(input){
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(input.value.trim())) {
      showSuccess(input)
  }
  else {
    showError(input,'Email is not valid')
  }
}
//CheckRequired
function CheckRequired(inputArr)
{
  inputArr.forEach(function(input){
    console.log(input.value)
    if(input.value.trim() ===''){
      showError(input,`${getFieldName(input)} is required`)
    }
    else {
      showSuccess(input)
    }
  })

}
//check input length

function checkLength(input, min, max)
{
  if(input.value.length < min)
  {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    )
    }
      else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
      }
      else {
        showSuccess(input)
    }
  }
//check password match
function checkPasswordMatch(input1,input2){
  if(input1.value !=input2.value){
    showError(input2,'Passwords do not match')
  }
}


// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//Show input error messaage
function showError(input, message)
{
  const i  = input
  i.className = 'form-control error'
  const fix = input.parentElement
  const small = fix.querySelector('small')
  small.innerText = message
}

//Show input sucess messaage
function showSuccess(input, message)
{
  const i  = input
  i.className = 'form-control success'
  const fix = input.parentElement
  const small = fix.querySelector('small')
  small.innerText = message
}

//Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault()
  console.log(username.value)
  CheckRequired([username,email,password,password2])
  checkLength(username, 3, 15)
  checkLength(password, 6, 25)
  checkEmail(email)
  checkPasswordMatch(password,password2)
})
