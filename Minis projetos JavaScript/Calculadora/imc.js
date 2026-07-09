const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value; 
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorICM = (peso / (altura * altura)).toFixed(1)

        let classificacao = ''

        if (valorICM < 18.5) {
            classificacao = 'Abaixo do peso.'
        } else if (valorICM < 25) {
            classificacao = 'com o peso ideal. parabéns!!!'
        } else if (valorICM < 30) {
            classificacao = 'Levemente acima do peso'
        } else if (valorICM < 35) {
            classificacao = 'com obesidade grau I'
        } else if (valorICM < 40) {
            classificacao = 'com obesidade grau II'
        } else {
            classificacao = 'com obesidade grau III. Cauidado!!'
        }

       
        
        resultado.textContent = `${nome} seu ICM é ${valorICM} e você está ${classificacao}`

         nome.innerText = '';

       

    } else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }
    
}

calcular.addEventListener('click', imc);