num1 = Number(prompt("Digite o primeiro numero:"));
num2 = Number(prompt("Digite o segundo numero:"));
num3 = Number(prompt("Digite o terceiro numero:"));

alert(verificaMaior(num1, num2, num3))

function verificaMaior(){
    if (num1>num2 && num1>num3) {
        return `O primeiro número é o maior: ${num1}`;
    } else {
        if (num2>num1 && num2>num3) {
            return `O segundo número é o maior: ${num2}`;
        } else {
            return `O terceiro número é o maior: ${num3}`;            
        }        
    }
}