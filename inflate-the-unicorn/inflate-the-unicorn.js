// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')
//create onclick button for each unicorn

let unicorn = document.getElementsByClassName('inflate-an-image')

for (let i = 0; i < unicorn.length; i++) {
  unicorn[i].onclick = unicornClick
}
//changing the unicorn image
let balloonInflate = 0

function unicornClick(e) {
  let unicorn = e.target

  if (unicorn.id == 'unicorn-1') {
    balloonInflate++

    unicorn.src = './images/unicorn-' + balloonInflate + '.png'
    console.log(unicorn)

    if (balloonInflate > 3) {
      balloonInflate = 0
      unicorn.src = './images/unicorn-' + balloonInflate + '.png'
      console.log('whoosh')
      alert('i am full of hot air')
    }
  }

  if (unicorn.id == 'unicorn-2') {
    balloonInflate++

    unicorn.src = './images/unicorn-' + balloonInflate + '.png'
    console.log(unicorn)

    if (balloonInflate > 3) {
      balloonInflate = 0
      unicorn.src = './images/unicorn-' + balloonInflate + '.png'
      console.log('whoosh')
      alert('i am full of hot air')
    }
  }

  if (unicorn.id == 'unicorn-3') {
    balloonInflate++

    unicorn.src = './images/unicorn-' + balloonInflate + '.png'
    console.log(unicorn)

    if (balloonInflate > 3) {
      balloonInflate = 0
      unicorn.src = './images/unicorn-' + balloonInflate + '.png'
      console.log('whoosh')
      alert('i am full of hot air')
    }
  }
  console.log('you clicked me ;-)')
}
