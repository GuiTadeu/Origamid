// HOSTING - As funções declaradas vão para a memória do JS antes da execução

function areaQuadrado(pLado){
  return pLado * pLado;
}

function corPreferida(pCor){
  if (pCor == "Azul"){
    return "Você gosta do céu!";
  }
  else if (pCor == "Amarelo") {
    return "Você gosta de ouro!";
  }
  else {
    return "Você não gosta de nada!";
  }
}

console.log(areaQuadrado(4));

console.log(corPreferida("Azul"));
