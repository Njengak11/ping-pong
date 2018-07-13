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
function fizzbuzz(){
  for (i=1, i<=100;i++){
    if(i % 3 === 0){
      console.log("ping");
    }else if(i % 5 ===0 ){
      console.log("pong");
    } else if (i % 15 === 0) {
      console.log("pingpong");
    }else {
      console.log("");}
    }
  }
}
