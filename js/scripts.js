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
  $("#img1").mouseover(function(){
    $("#project1").show();
  });

});
$(document).ready(function(){
  $("#img2").mouseover(function(){
    $("#project2").show();
  });

});
$(document).ready(function(){
  $("#img3").mouseover(function(){
    $("#project3").show();
  });

});
$(document).ready(function(){
  $("#img4").mouseover(function(){
    $("#project4").show();
  });

});
$(document).ready(function(){
  $("#img5").mouseover(function(){
    $("#project5").show();
  });

});
$(document).ready(function(){
  $("#img6").mouseover(function(){
    $("#project6").show();
  });

});
$(document).ready(function(){
  $("#img7").mouseover(function(){
    $("#project7").show();
  });

});
$(document).ready(function(){
  $("#img8").mouseover(function(){
    $("#project8").show();
  });

});
$(document).ready(function(){
  $("#img1").mouseover(function(){
    $("#project1").hide();
  });

});
$(document).ready(function(){
  $("#img2").mouseover(function(){
    $("#project2").hide();
  });

});
$(document).ready(function(){
  $("#img3").mouseleave(function(){
    $("#project3").hide();
  });
});
$(document).ready(function(){
  $("#img4").mouseleave(function(){
    $("#project4").hide();
  });
});
$(document).ready(function(){
  $("#img5").mouseleave(function(){
    $("#project5").hide();
  });
});
$(document).ready(function(){
  $("#img6").mouseleave(function(){
    $("#project6").hide();
  });
});
$(document).ready(function(){
  $("#img7").mouseleave(function(){
    $("#project7").hide();
  });
});
$(document).ready(function(){
  $("#img8").mouseleave(function(){
    $("#project8").hide();
  });
});

  $(document).ready(function(){
   $(".form2").submit(function(event){
     var name=$(".name").val();

   alert("How are you "+name+". Thank you for contacting us.");
   event.preventDefault();
   });
  });
