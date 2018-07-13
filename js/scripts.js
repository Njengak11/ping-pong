//user interface

$(document).ready(function(){
  $("form #inputnumber").submit(function(event){
  $("#output").empty();
  var number = parseInt($("input#number").val());
  var numbers = output(number);
  numbers.forEach(function(output){
    $("output").append("<li>" + output + "</li>");
    event.preventDefault();
  });
});
});

//business end
