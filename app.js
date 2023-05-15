var counter = document.querySelector('.counter')
var increment = document.querySelector('.incrementbtn')
var decrement = document.querySelector('.decrementbtn')
var reset = document.querySelector('.resetbtn')



increment.addEventListener('click', () => {
    counter.textContent = +counter.textContent + 1
})

decrement.addEventListener('click', () => {
    counter.textContent = +counter.textContent - 1
})

reset.addEventListener('click', () => {
    counter.textContent = 0
})


if(counter.textContent > 0){
    counter.style.color = "green";
}