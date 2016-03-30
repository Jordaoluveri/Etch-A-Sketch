$(document).ready(function() {
	var rows = 16;
	var columns = 16

	for (var r=0; r < columns; r++){

		var $column = $("<div class='column " + r + "'></div>")
		$("#container").append($column);

		for (var i=0; i < rows; i++){

			var $box = $("<div class='box'></div>")
			$(".column." + r).append($box);
			console.log($column);
		}
	}
	
});