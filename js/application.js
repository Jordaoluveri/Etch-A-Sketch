$(document).ready(function() {
	
	var createGrid = function(rows, columns, type){
		
		$("#container").empty();
		if (isNaN(rows)){
			var rows = 16
		}
		if (isNaN(columns)){
			var columns = 16
		}
		var newHeight = ((960 - (rows*2))/rows) -2

		for (var r=0; r < columns; r++){

			var $column = $("<div class='column " + r + "'></div>")
			$("#container").append($column)

			for (var i=0; i < rows; i++){

				var $box = $("<div class='box'></div>")
				$(".column." + r).append($box)
			}
		}
		$('.box').css({"height": newHeight });
		$('.box').css({"width": newHeight });
		if (type === "trail"){
			$('.box').css({"background-color": "black" });
		}

		$('.box').hover(
			function(){

				if (type === "normal"){
					$(this).addClass("hover")
				}

				if (type === "random"){
					randomColor = ('#'+Math.floor(Math.random()*16777215).toString(16));
					$(this).css({"background-color": randomColor})
				}

				if (type === "trail"){
					$(this).animate({"background-color":"white"}, 'fast')
				}

				if (type === "grey"){
					orig = rgb2hex($(this).css("background-color")) 
					console.log(parseInt(orig.substring(1), 16))
					greyer = parseInt(orig.substring(1), 16)-2763306
					if (greyer < 200000){
						greyer = 0
					}
					
					greyer = "#" + greyer.toString(16)
					$(this).css({"background-color": greyer})
				}
			}, function(){
				if (type === "trail"){
					$(this).animate({"background-color":"black"}, 'medium')
				}
			}
		);
		
	}	
	
	$('.btn').on('click', function(){
		var newGrid = 0
		while (!(newGrid > 0 && newGrid < 65)){
			newGrid = prompt("How many squares do you want this grid to have? \n\n It must be between 1 ~ 64", "16")
			if (newGrid === null){
				break
			}
		}
		if (newGrid > 0 && newGrid < 65){
			$('.box').removeClass("hover")
			type = $(this).attr('id')
			createGrid(newGrid, newGrid, type)
		}
	})

	$('#clear').on('click', function(){
		if(type === "trail"){
			$('.box').css({"background-color":"#000"})
		}else{
			$('.box').css({"background-color":"#fff"})
		}
	})
	
	createGrid(16,16, "normal")
})

var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

//Function to convert hex format to a rgb color
function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 }
