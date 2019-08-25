$(document).ready(function(){
  $("#DESIGN").click(function() {
    $("#DESIGN").toggle();
    $("#DESIGN2").toggle();

    });
});

$(document).ready(function(){
  $("#DESIGN2").click(function() {
    $("DESIGN").toggle();
    $("#DESIGN").toggle();

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

/*$(document).ready(function(){
 $("form").submit(function(event){
   var name=$("input#name").val();
 alert("Hello "+name+" Thank you for contacting us");
 event.preventDefault();
 });
});*/
