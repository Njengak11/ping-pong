//user interface

$(document).ready(function(){
  $(".boyd form").submit(function(event){
  event.preventDefault();
  //$("#output").empty();
  var input = parseInt($("input#number").val());
  pingpong(input);
  results.forEach(function(result){
    $("ul#output").append("<li>" + result + "</li>")


  });
});
});

//back end
var results=[];
function pingpong(x){
	for(var i=1;i<=x;i++){
		if(i%3 === 0 && i%5=== 0){
			results.push("pingpong");
		} else if(i%3 === 0){
			results.push("ping");
		} else if(i%5 === 0){
			results.push("pong");
		} else {
			results.push(i);
		}
	}
}
