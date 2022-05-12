// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')
//store references into cells so that you can put the mole in!
let cells = document.getElementsByTagName('TD')
let moleImage = document.createElement('img')
moleImage.classList.add('mole')
moleImage.src = 'mole.PNG'
moleImage.onclick = whackaMole

//create a function that will randomly pop mole in cell
function putMoleInHole() {
  let randomIndex = Math.floor(Math.random() * 24)
  let randomCell = cells[randomIndex]

  randomCell.appendChild(moleImage)
}
putMoleInHole()
function whackaMole() {
  console.log(putMoleInHole)
  putMoleInHole()
  let audio = new Audio()
  audio.src = `whack-audio.wav`
  audio.play()
}
