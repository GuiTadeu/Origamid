// INSIDE

// Insere depois
$('h2').append("Isso é um H2");
// Insere antes
$('h1').prepend("Isso é um H1");


// OUTSIDE

// Coloca na mesma linha
$('p').before("<span> @ </span>");
// Insere o conteudo dentro
$('p').wrap('<div class="azul"></div>');
// Remove o elemento pai do item selecionado
// No caso, será removida a tag li
$('li p').unwrap()
