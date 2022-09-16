const form = document.getElementById('form')
const username =  document.getElementById('username')
const email =  document.getElementById('email')
const password =  document.getElementById('password')
const password2 =  document.getElementById('password2')


// VALID Email
function isValidEmail(email){
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase())
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
  if (username.value === '')
  {
    showError(username, 'Username is required')
  }
  else {
    showSuccess(username)
  }

  if (email.value === '') {
    showError(email, 'Email is required')
  }
  else if (!isValidEmail(email.value)) {
    showError(email, 'Email is not valid')
  }
  else {
    showSuccess(email)
  }
  if (password.value === '') {
    showError(password, 'password is required')
  }
  else {
    showSuccess(password)
  }
  if (password2.value === '') {
    showError(password2, 'Re-enter the password')
  }
  else {
    showSuccess(password2)
  }
})
