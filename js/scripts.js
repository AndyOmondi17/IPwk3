$(document).ready(function() {
  $("#DESIGN").click(function() {
    $("#DESIGN").hide();
    $("#DESIGN2").show();
  });
});
$(document).ready(function(){
  $("#DESIGN2").click(function() {
    $("#DESIGN").show();
    $("#DESIGN2").hide();

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
 alert("How are you "+name+". Thank you.");
 event.preventDefault();
 });
});*/
