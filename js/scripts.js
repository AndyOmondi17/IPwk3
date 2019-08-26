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
    $("#DEVELOPMENT").hide();
    $("#DEVELOPMENT2").show();

    });
});

$(document).ready(function(){
  $("#DEVELOPMENT2").click(function() {
    $("#DEVELOPMENT").show();
    $("#DEVELOPMENT2").hide();

    });
});

$(document).ready(function(){
  $("#PRODUCT").click(function() {
    $("#PRODUCT").hide();
    $("#PRODUCT2").show();

    });
});

$(document).ready(function(){
  $("#PRODUCT2").click(function() {
    $("#PRODUCT").show();
    $("#PRODUCT2").hide();

    });
});

$(document).ready(function(){
 $(".form2").submit(function(event){
   var name=$(".name").val();
 alert("How are you "+name+". Thank you.");
 event.preventDefault();
 });
});
