for (var i=0; i<=10; i++){
  console.log(i);
}

// Percorrendo Array com Loop
var clientes = ["Jack White", "Tim Bernardes", "Robert Plant"];
for (var i=0; i < clientes.length; i++){
  console.log("Cliente Nº " + i + ": " + clientes[i]);
}

// Podemos utilizar o Break para parar o Loop em determinada condição
for (var i=0; i < clientes.length; i++){
  if (clientes[i] == "Tim Bernardes"){
    console.log("Solinho de Guitarra");
    break;
  }

}
