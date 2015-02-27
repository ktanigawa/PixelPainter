$(function(){
  console.log("hello");
  create_grid();

  $('.square').click(function(){
    console.log("square color");
    $(this).addClass("square_color");
  });
});

var row = 20;
var column = 20;
var $row = $("<div>", {
  class : 'row'
});
var $square = $("<div>",{
  class: 'square'
});

function create_grid (){
  for(var i = 0; i < column; i++){
    $row.append($square.clone());
  }

  for(var j = 0; j < row; j++){
    $("#artboard").append($row.clone());
  }
}


// COLOR PICKER
var color = "#f00";

$("#colorpicker").spectrum({ //spectrum config
    color: "#f00",
    showPalette: true,
    showInput: true,
    showAlpha: true,
    chooseText: "Pick",
    cancelText: "X",
    togglePaletteOnly: true,
    showPaletteOnly: true,
    togglePaletteMoreText: "More Colors...",
    togglePaletteLessText: "Less Colors...",
    palette: [
            //color palettes for Spectrum
    ],
    change: function(colorSelected) {
        color = colorSelected.toHexString();
    }
});

$('.pixel').click(function(){

    $(this).css('background-color' , color);

});
  

// function PixelPainter (width, height){
//   this.artboard = $
// }



// var pixelPainter = PixelPainter(20,20);
// $("#controls").append(pixelPainter.controls);
// $("#artboard").append(pixelPainter.artboard);