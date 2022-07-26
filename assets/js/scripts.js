var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
function increment() {
    currentNumber = currentNumber +1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber == 10){
        console.log(document.getElementsByName('adicionar'))
        document.getElementsByName('adicionar')[0].setAttribute('disabled','disabled');
    } 
}

function decrement() {
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber <= 10){
        console.log(document.getElementsByName('subtrair'))
        document.getElementsByName('subtrair')[0].setAttribute('enable', 'enable');
    
} 
}
    