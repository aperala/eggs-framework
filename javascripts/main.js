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

$(function() {
  var page_url = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
    $(".fixed-top-nav li a").each(function(){
      if($(this).attr("href") === page_url || $(this).attr("href") === '' )
      $(this).parent().addClass("selected");
    });
});


var $select = $("<select></select>");
$("nav").append($select);

$("nav a").each(function(){
  var $anchor = $(this);
  var $option = $("<option></option>");

  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }

  $option.val($anchor.attr("href"));
  $option.text($anchor.text());
  $select.append($option);
});

$select.change(function() {
  window.location = $select.val();

});

$(document).ready(function() {
  ToggleElement();

});
