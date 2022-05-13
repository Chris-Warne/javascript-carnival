// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//console.log('Dress The Clown!')

let headIndex = 0

function changeClothes() {
  if (headIndex > 5) {
    headIndex = 0
  } else if (headIndex < 0) {
    headIndex = 5
  }
}

//make function to change clown head
function changeClownHead() {
  let head = document.getElementById('head')
  head.src = './images/head1.png'
  let headSrc = './images/head' + headIndex + '.png'
}

//calling function for arrow key
document.addEventListener('keydown', function (e) {
  switch ('right') {
    case e.key:
      changeClothes()
      changeIndexdown()
      break
  }
})
