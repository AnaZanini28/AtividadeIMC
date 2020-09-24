var btnCalcular = document.getElementById('calcular');
var inputPeso = document.getElementById('peso');
var inputAltura = document.getElementById('altura');
var pResultado = document.getElementById('resultado');
  
btnCalcular.addEventListener('click', calcula);

    function calcula(){ 
        var peso = parseFloat(inputPeso.value);
        var altura = parseFloat(inputAltura.value);
 
        pResultado.classList.remove('vermelho'); 
        pResultado.classList.remove('laranja');
        pResultado.classList.remove('cinza');
        pResultado.classList.remove('verde');

        if (isNaN(altura)){
            alert('Altura inválida');
        } else if (isNaN(peso)){
            alert('Peso inválido');
        } else {  
            var calc1 =  altura *altura ;
            var calc2 = peso/calc1; 

            if(calc2 < 16){
                pResultado.classList.add('vermelho');
                pResultado.innerText = 'IMC: < 16 | Magreza grave';
            }else if( calc2 >= 16 && calc2 < 17 ) {
                pResultado.classList.add('laranja');
                pResultado.innerText = 'IMC: 16 a < 17 | Magreza moderada';
            }else if( calc2 >= 17 && calc2 < 18.5 ) {
                pResultado.classList.add('cinza');
                pResultado.innerText = 'IMC: 17 a < 18,5 | Magreza leve';
            }else if( calc2 >= 18.5 && calc2 < 25 ) {
                pResultado.classList.add('verde');
                pResultado.innerText = 'IMC: 18,5 a < 25 | Saudável';
            }else if( calc2 >= 25 && calc2 < 30 ) {
                pResultado.classList.add('cinza');
                pResultado.innerText = 'IMC: 25 a < 30 | Sobrepeso';
            }else if( calc2 >=30 && calc2 < 35 ) {
                pResultado.classList.add('laranja');
                pResultado.innerText = 'IMC: 30 a < 35 | Obesidade Grau I ';
            }else if( calc2 >=35 && calc2 < 40 ) {
                pResultado.classList.add('vermelho');
                pResultado.innerText = 'IMC: 35 a < 40 | Obesidade Grau II (severa)';
            }else if( calc2 >= 40 ) {
                pResultado.classList.add('vermelho');
                pResultado.innerText = 'IMC: ≥ 40 | Obesidade Grau III (mórbida)';
            }

 
    }
        
} 