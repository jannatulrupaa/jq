function textChange(){

 document.getElementById('p').innerHTML = "Welcome";


}


$(document).ready(function(){
    $('button').click(function(){
        alert("Hello World!");
    });
    $( "#draggable").draggable();
});


$(document).ready(function(){
    
    $( "#droppable").droppable();
});

$(document).ready(function(){

    var availableTags = ["Html", "CSS", "Bootstrap"];
      $( "#tags" ).autocomplete({
        source: availableTags
        });
      });