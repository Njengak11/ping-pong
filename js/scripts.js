//user interface

$(document).ready(function(){
  $("form #inputnumber").submit(function(event){
  $("#output").empty();
  var input = parseInt($("input#number").val());
  $("#result ul").text("");
  numbers.forEach(function(output){
    $("output").append("<li>" + output + "</li>");
    event.preventDefault();
  });
});
});

//back end
function pingpong(){
	for(var i=1;i<=100;i++){
		if(i%5 === 0 && i%3 === 0){
			print('pingpong');
		} else if(i%3 === 0){
			print('Ping');
		} else if(i%5 === 0){
			print('pong');
		} else {
			print(i);
		}
	}
}
