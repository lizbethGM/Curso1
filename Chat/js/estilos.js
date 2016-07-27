$(document).ready(function(){
		$("button").click(function(){
			var mensaje = $("textarea").val();
			var old = $("#contenido").html();
			
			$("#contenido").html(old+ "<p>" + mensaje + "</p>")
        });
	});