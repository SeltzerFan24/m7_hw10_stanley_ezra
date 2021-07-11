// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')
var save = document.querySelector('#save')

// Retrieve name and note content from cookies and localstorage
var cookieValue = document.cookie.split('=')
console.log(cookieValue[1])
nameSpan.innerHTML = cookieValue[1]
textarea.value = localStorage.getItem("note")
// Then apply them to elements on the page
// YOUR CODE HERE



formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  console.log("textarea",textarea.value)
  document.cookie = `note = ${nameSpan.innerHTML}`
  // save textarea's content to localstorage
  localStorage.setItem('note', textarea.value)
  // YOUR CODE HERE

  // triggers thumbs up animation
  console.log(this.elements)
  this.elements.save.classList.add('emoji')
  // save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  textarea.value = ""
  // Clear localstorage's content
  localStorage.removeItem('note')
  // YOUR CODE HERE

  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp