/*Para ver o OUTPUT do console no terminal
é preciso usar o comando (node) e colocar o nome do arquivo que se encontra o
     codigo) no terminal */ 

 function returnEvenValues(array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
      if(array[i] % 2 === 0){
        evenNums.push(array[i]);
      } else {
        console.log(`${array[i]} não é par!`)
      }
    }
    console.log('os numeros pares são:' , evenNums);
}

let array = [1,2,4,5,7,8];
 
returnEvenValues(array); 





