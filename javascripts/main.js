function HideElement(){
  $( ".dd-button-label" ).text( "Hide" );
}

function ShowElement(){
  $( ".dd-button-label" ).text( "Show" );
}

function ToggleElement(){
  $(".dd-button").on('click', function(){
    $(".drop-down-element").toggle();
      if($( ".dd-button-label" ).text() == 'Hide'){
      ShowElement();
    }else {
      HideElement();
    }
  });
}

$(document).ready(function() {
  ToggleElement();
});
