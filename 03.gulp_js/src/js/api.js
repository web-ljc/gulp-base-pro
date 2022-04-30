const xhr = new XMLHttpRequest()

xhr.open('GET', '/api')

xhr.send()

xhr.onload = function() {
  console.log(JSON.parse(JSON.stringify(xhr.responseText)))
}