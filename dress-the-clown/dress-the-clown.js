// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
//push left and right arrow keys , so that it changes the clowns clothes and shoes
//also push up and down to select what parts of the clothing you want to change.
console.log('Dress The Clown!')
//check key function is called when onkeydown function is used
document.onkeydown = checkKey
//the checkKey function takes the argument e,(event) which details the properties.
//function that executes and checks the keycode based on what arrow you push
function checkKey(e) {
  if (e.keyCode == '38') {
    changeVertical(-1)
    //selects arrow up
  } else if (e.keyCode == '40') {
    changeVertical(1)
    //selects arrow down
  } else if (e.keyCode == '37') {
    changeHorizontal(-1)
    //selects arrow left
  } else if (e.keyCode == '39') {
    changeHorizontal(1)
    //selects arrow right
  }
}
//make head,body and shoes index into an array
let indexes = [0, 0, 0]
//pass main Index into index array so that it will return either head/body/shoes
let mainIndex = 0
//create references for the head body and shoes objects
// which point back to the images in Html
let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')
//create an image variable array that contains or "plucks out" head,body and shoes
let imgs = [head, body, shoes]
//create a variable array of the strings head, body and shoes
let strings = ['head', 'body', 'shoes']

function changeHorizontal(shift) {
  //create new variable which passes indexes through main index to check what part of the body it is.
  let index = indexes[mainIndex]
  //create a new variable that passes images through main index
  let image = imgs[mainIndex]
  //create a new variable which passes strings through main index
  let str = strings[mainIndex]
  //increase index which allows to go horizontal or vertical
  index += shift
  //creating if statements so that index goes through the array of different clothes then goes back to the beginning
  if (index < 0) index = 5
  if (index > 5) index = 0

  indexes[mainIndex] = index
  //finds the images in the index to acces the items of the array in the string and index.
  image.src = './images/' + str + index + '.png'
}
//function that changes each part of the body you want to change
//and moves up and down tha main index which
//goes through the array of each seperate body part
//0= head, 1= body, 2 = shoes
function changeVertical(shift) {
  mainIndex += shift

  if (mainIndex < 0) mainIndex = 2
  if (mainIndex > 2) mainIndex = 0
}
a
