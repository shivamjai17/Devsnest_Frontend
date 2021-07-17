function myclick(){
    console.log('hello');
}
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }
const btn = document.getElementById('color');
function random(number) {
  return Math.floor(Math.random() * (number+1));
}
function change(){
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}
btn.addEventListener('click',()=>{
  change()
});
function mouseOverEvents(){
    console.log('the color is green');
}

function mouseOutEvents(){
    console.log('the color is white');
}
function keyUp(){
    console.log('You Pressed up key');
} 
function keydown(){
    console.log("Ypu Pressed down key")
}
