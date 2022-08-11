    /* Atividade:

    1) Verifique de 2 maneiras diferentes entre si, se uma string é um palíndromo.
    OBS: Palíndromo é uma palavra ou frase que se pode ler,indiferentemente da esquerda para a direita ou vice-versa.
    ex: raiar, ama, ovo, radar

    Solução 1 */
    function verificaPalindromo(string) {
    if(!string) return "string inexistente";
   
     return string.split("").reverse().join("") === string;
}

// console.log(verificaPalindromo("ama"));  

    // Solução 
    // omo
    // 012
    // abba

    function verificaPalindromo2(string) {
        if (!string) return "string inexistente";

        for (let i = 0; i <string.length / 2; i++) {
          if (string[i]  !== string[string.length -1 -i]) {
            return false;
          }
            
        }
        
        return true;
    }

    console.log(verificaPalindromo("omo"));

