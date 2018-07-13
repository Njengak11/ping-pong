//user interface

$(document).ready(function(){
  $("form #pingpong").submit(function(event){
  $("#output").empty();
  var input = parseInt($("input#number").val());
  numbers.forEach(function(output){
    $("output").append("<li>" + output + "</li>")
    event.preventDefault();

  });
});
});

//back end
var result=[]
function pingpong(){
	for(var i=1;i<=100;i++){
		if(i%3 === 0 %% 5 === 0){
			result.push("pingpong");
		} else if(i%3 === 0){
			result.push("pong");
		} else if(i%5 === 0){
			result.push("ping");
		} else {
			result.push("");
		}
	}
}
