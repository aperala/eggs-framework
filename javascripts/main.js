$(document).ready(function() {
  $(".dd-button").on('click',function(){
    $(".drop-down-element").toggle();
    if($( ".dd-button-label" ).text() == 'Hide Element'){
      ShowElement();
    }else {
      HideElement();
    }
  });
});

function ShowElement(){
  $( ".dd-button-label" ).text( "Show Element" );
}

function HideElement(){
  $( ".dd-button-label" ).text( "Hide Element" );
}