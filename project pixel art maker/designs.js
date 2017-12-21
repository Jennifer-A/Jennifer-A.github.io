// Check if the value typed in height is below 25
$('#input_height').focusout(function(){
  var height=$('#input_height').val();
  if(height>25){
     $("#input_height").val("25");
     $(".note").css("display", "block");
  };
});

// Check if the value typed in width is below 25
$('#input_width').focusout(function(){
  var width=$('#input_width').val();
  if(width>25){
     $("#input_width").val("25");
     $(".note").css("display", "block");
  };
});

// When size is submitted by the user, call makeGrid()
$('#button').on( "click", function makeGrid() {
  var righe=$('#input_height').val();
  var colonne=$('#input_width').val();
  // here we create the grid
  for (var r=1; r<=righe; r++){
    $('#pixel_canvas').append('<tr></tr>');
  };
  $('tr').each(function (){
    for (var c=1; c<=colonne; c++){
      $(this).append('<td></td>');
      };
    });
  /* after creating the grid the option about customizing the size
  of the grid will hide and some options will appear */
  $('#color').css('display','block');
  $('#grid').css('display','none');
  $('#tableGrid').css('display','block');
  $('#sizePicker').css('display','none');
  $(".note").css("display", "none");
  $(".optional").css("display", "block");
});

// When you click the cells, they become colored
$('#pixel_canvas').on("click", "td", function() {
  var color=$('#colorPicker').val();
  $(this).css('background-color', color);
  });

// On doubleclick you delete the color of a single cell
$('#pixel_canvas').on("dblclick","td", function(){
  $(this).css('background-color', '');
});

// Makes the grid disappear
$('#gridAway').on("mousedown", function(){
  $('td').css('border-color', '#00000000');
  $('.optional button').on("mouseup mouseleave", function(){
    $('td').css('border-color', 'black');
  });
});

// Delete the color of all the cells
$('#allWhite').on("click", function(){
  $('td').css('background-color', '');
  });

// Prints the drawing
$('#print').click(function(){
  $('td').css('border-color', '#00000000');
  $('.optional').css('display', 'none');
  $('h2').css('display', 'none');
  $('#colorPicker').css('display', 'none');
  $('body').css('background-color', 'white');
  window.print()
  $(".optional").css('display', 'block');
  $('td').css('border-color', 'black');
  $('#color h2').css('display', 'visible');
  $('#colorPicker').css('display', 'visible');
  $('body').css('background-color', '#E5E4E4');
});
