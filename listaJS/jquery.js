$(document).ready(function(){
  $('body button').click(function(){
      var producto = $('body input').first().val();
      var precio = $('body input').last().val();
      $('tbody').append('<tr><td>'+producto+'</td><td>'+precio+'</td><td><button>Eliminar</button></td></tr>');
  });
  $(document).on('click','td button', function(){
        $('tbody tr td').remove();
        });
});
