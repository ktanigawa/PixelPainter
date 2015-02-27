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
$(".highlights .columns .highlight").click(function () {
  // console.log('hello', $(this));
  // random number between 0x000000 and 0xFFFFFF
  var random_r = Math.floor( Math.random()*256);
  var random_g = Math.floor( Math.random()*256);
  var random_b = Math.floor( Math.random()*256);

  $(this).css({
    "background" : "rgb("+ random_r +","+ random_g +","+ random_b +")"
  });

// function PixelPainter (width, height){
//   this.artboard = $
// }



// var pixelPainter = PixelPainter(20,20);
// $("#controls").append(pixelPainter.controls);
// $("#artboard").append(pixelPainter.artboard);