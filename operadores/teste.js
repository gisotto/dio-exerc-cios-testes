function comparaNumeros(num1, num2) {
    if(!num1 || !num2) return 'Defina dois números!';
    const primeiraFrase = criePrimeiraFrase(num1,num2);
    const segundaFrase = crieSegundaFrase(num1,num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criePrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if(num1 !== num2) {
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais. `
};

function crieSegundaFrase(num1, num2){
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const comparacao10 = soma > 10;
    const comparacao20 = soma > 20;

    if(comparacao10) {
        resultado10 = 'maior';
    }

    if(comparacao20) {
        resultado20 = 'maior';
    }
     

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(0));
