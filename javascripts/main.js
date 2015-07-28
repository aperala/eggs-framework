function ToggleElement(){
  var isVisible = $( ".drop-down-element" ).is( ":visible" );
  var isHidden = $( ".drop-down-element" ).is( ":hidden" );

  $(".dd-button").on('click', function(){
    $(".drop-down-element").toggle();
    if(isHidden === true) {
      isVisible = true;
    } else {
      isHidden = true;
    }
  });
}

$(document).ready(function() {
  ToggleElement();
});
