/*  creare una todo list che permatta di aggiungere (tramite campo input) e rimuovere gli elementi!
 */

 // 1. inizializzo array lista della spesa
var listaSpesa = [
  "Comprare il latte",
  "Comprare la pasta",
  "Comprare i pomodori",
  "Comprare i salumi"
];

// 2. clono il template per aggiungere le altre voci alla lista
for ( var i = 0; i < listaSpesa.length; i++){
  var template = $(".template li").clone();
  // aggiungo i vari elementi della lista nei li
  template.prepend(listaSpesa[i]);
  $(".todo-list").append(template);
}


// 3. inizializzo una funzione per aggiungere elementi alla lista attravero l'input
$("#add").keydown(function(event){
  if (event.which == 13){
    var element = $(this).val();
    if (element != " "){
      var template = $(".template li").clone();
      template.prepend(element);
      $(".todo-list").append(template);
      $(this).val(" ");  
    }
  }
}
);
