$(function(){
  console.log("hello");
  create_grid();
  create_colorPicker();

  $('.square').click(function(){
    $(this).addClass("square_color");
  });
});

//PIXEL GRID
function create_grid (){
  var row = 20;
  var column = 20;
  var $row = $("<div>", {
    class : 'row'
  });
  var $square = $("<div>",{
    class: 'square'
  });
  for(var i = 0; i < column; i++){
    $row.append($square.clone());
  }

  for(var j = 0; j < row; j++){
    $("#artboard").append($row.clone());
  }
}

// COLOR PICKER GRID
function create_colorPicker (){
  var rows = 10;
  var columns = 3;
  var $row = $("<div>", {
    class : 'row'
  });
  var $square = $("<div>",{
    class: 'picker_square'
  });
  for(var j = 0; j < rows; j++){
    var row = $row.clone();
    for(var i = 0; i < columns; i++){
      var index = i*(j+1)-1;
      $square.css("background-color" : colors[index]);
      row.append($square.clone());
    }

    $("#controls").append(row);
  }
}
var colors = [
  "#FFFFFF",
  "#FFFFCC",
  "#A369AF",
  "#E52325",
  "#FD8E2F",
  "#2EB7ED",
  "#6CCCF2",
  "#FFDFE5",
  "#91E374",
  "#B1EB9C",
  "#AE323B",
  "#032149",
  "#1C375B",
  "#91E374",
  "#BAB3B2",
  "#6F8197",
  "#FBDB65",
  "#000033",
  "#303030",
  "#E0E0E0",
  "#484848",
  "#A00000",
  "#CCFF00",
  "#FF0099",
  "#FF6600",
  "#FF9966",
  "#CC66CC",
  "#CC0033",
  "#9999CC",
  "#999999",    
  // 30 times
];

// COLOR PICKER
// $(".highlights .columns .highlight").click(function () {
//   // console.log('hello', $(this));
//   // random number between 0x000000 and 0xFFFFFF
//   var random_r = Math.floor( Math.random()*256);
//   var random_g = Math.floor( Math.random()*256);
//   var random_b = Math.floor( Math.random()*256);

//   $(this).css({
//     "background" : "rgb("+ random_r +","+ random_g +","+ random_b +")"
//   });

// function PixelPainter (width, height){
//   this.artboard = $
// }



// var pixelPainter = PixelPainter(20,20);
// $("#controls").append(pixelPainter.controls);
// $("#artboard").append(pixelPainter.artboard);