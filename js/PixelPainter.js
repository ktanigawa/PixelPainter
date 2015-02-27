$(function(){
  create_grid();
  create_colorPicker();
  clear_button();
  $("#controls").on("click", ".picker_square", function(){
    var colorPicked = $(this).css("background-color");
    console.log(colorPicked);
  
    $("#artboard").on("click", ".square", function(){
      $(this).css("background-color", colorPicked);      
    });
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
  var index = 0;
  for(var j = 1; j < rows+1; j++){
    var row = $row.clone();
    for(var i = 1; i < columns+1; i++){
      console.log(index);
      $square.css({"background-color" : colors[index++]});
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

//ADD BUTTON TO CLEAR 
function clear_button() {
  // DOM element creating objects
  var button_clear = $("<button>", {
    //These are setting properties and events with JSON Object shortcut
    "class" : "button_clear",
    "text" : "reset",
    "hover" : "hover",
    "click" : function (){
      $(".square").css("background-color", "#FFFFFF");
      console.log("clicked");
    }
  });
  // button_clear.wrap("<div>");
  button_clear.insertAfter("#controls");
}

// COLOR PICKER FUNCTION
// $("picker_square").click(function(){
//   var colorPicked = $(this).css("background-color");
//   console.log(colorPicked);
// });
  // $(this).css({
    // "background-color" : "rgb("+ random_r +","+ random_g +","+ random_b +")"
  // });


// function PixelPainter (width, height){
//   this.artboard = $
// }



// var pixelPainter = PixelPainter(20,20);
// $("#controls").append(pixelPainter.controls);
// $("#artboard").append(pixelPainter.artboard);