// Questão 1
function numPrimo(numero) {
    if (numero <= 1) {
      return numero + ' não é um número primo';
    }
  
    for (var i = 2; i * i <= numero; i++) {
      if (numero % i === 0) {
        return numero + ' não é um número primo';
      }
    }
    
    return numero + ' é um número primo';
  }
  
  for (var j = 1; j <= 1000; j++) {
    if (numPrimo(j) === j + ' é um número primo') {
      console.log(j);
    }
  }
//Questão 2
function validarSenha(senha) {
    if (senha.length < 8) {
        alert('Senha não contem o minimo de 8 caracteres');
    }
  
    else if (!/[A-Z]/.test(senha)) {
        alert('Não contem letra maiuscúla');
    }
  
    else if (!/[a-z]/.test(senha)) {
        alert('Não contem letra minuscúla');
    }

    else if (!/\d/.test(senha)) {
        alert('Não contem número');
    }
    
    else{
        alert('Senha aprovada');
    }
  }

// Questão 3
function fatorial(numero) {
    var fatorial = 1;
    var operacao = `${numero}! = `;
    
    for (var i = numero; i >= 1; i--) {
      fatorial *= i;
      
      if (i === 1) {
        operacao += `${i}`;
      } else {
        operacao += `${i} * `;
      }
    }
    
    operacao += ` = ${fatorial}`;
    return operacao;
  }

// Questão 4
function quadrado(numero) {
    if (numero < 0) {
      return `${numero} não é um quadrado perfeito.`;
    }
    
    const raiz = Math.sqrt(numero);
    if (Number.isInteger(raiz)) {
      return `${numero} é um quadrado perfeito.`;
    } else {
      return `${numero} não é um quadrado perfeito.`;
    }
  }