var counter = document.querySelector('.counter')
var increment = document.querySelector('.incrementbtn')
var decrement = document.querySelector('.decrementbtn')
var reset = document.querySelector('.resetbtn')

let numCounter = 0;

increment.addEventListener('click', () => {
    counter.innerHTML = ++numCounter
    colorChanger()
})

decrement.addEventListener('click', () => {
    counter.innerHTML = --numCounter
    colorChanger()
})

reset.addEventListener('click', () => {
    numCounter = 0;
    counter.innerHTML = numCounter;
    colorChanger()
})


function colorChanger() {
    if (numCounter > 0) {
        counter.style.color = "green";
} 
    else if (numCounter < 0) {
        counter.style.color = "red";
} 
    else {
        counter.style.color = "rgba(80, 8, 48, 0.8)"; 
}
}


