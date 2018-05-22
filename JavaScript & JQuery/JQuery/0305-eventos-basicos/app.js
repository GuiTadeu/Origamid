$('a').on('click', function(){
  // This pega o objeto A que acabou de ser clicado
  // É bem diferente de utilizar o $('a').text("Clicou!");
  // Pois no exemplo acima ele irá alterar todos os elementos <a>
  $(this).text("Clicou!");
});

$('a').on('mouseenter', function(){
  $(this).text("Passou o mouse!");
});

$('a').on('mouseleave', function(){
  $(this).text("Tirou o mouse!");
});

$(document).on('scroll', function(){
  $('#disTop').text($(document).scrollTop());
});

$(window).on('resize', function(){
  $('#sizeBody').text($('body').width());
});
