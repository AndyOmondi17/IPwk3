$(document).ready(function() {
  $("#DESIGN").click(function() {
    $("#DESIGN").toggle();
    $("#DESIGN2").toggle();
  });
});
$(document).ready(function(){
  $("#DESIGN2").click(function() {
    $("#DESIGN").toggle();
    $("#DESIGN2").toggle();

  });
});

$(document).ready(function(){
  $("#DEVELOPMENT").click(function() {
    $("#DEVELOPMENT").toggle();
    $("#DEVELOPMENT2").toggle();

    });
});

$(document).ready(function(){
  $("#DEVELOPMENT2").click(function() {
    $("#DEVELOPMENT").toggle();
    $("#DEVELOPMENT2").toggle();

    });
});

$(document).ready(function(){
  $("#PRODUCT").click(function() {
    $("#PRODUCT").toggle();
    $("#PRODUCT2").toggle();

    });
});

$(document).ready(function(){
  $("#PRODUCT2").click(function() {
    $("#PRODUCT").toggle();
    $("#PRODUCT2").toggle();

    });
});

$(document).ready(function(){
 $(".form2").submit(function(event){
   var name=$(".name").val();
 alert("How are you "+name+". Thank you for contacting us.");
 event.preventDefault();
 });
});
