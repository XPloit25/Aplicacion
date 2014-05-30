// JavaScript Document
	var panel ='<div data-role="panel" id="mipanel" data-theme="a" data-display="push"><div class="panel-content" align="center"> <h3>Menu</h3> <div data-role="controlgroup"> <a data-role="button" href="#Principal">Principal</a> <a data-role="button" href="#Armas">Armas Biologicas</a>  <a data-role="button" href="#Armas_Tipos">Tipos De Armas</a> <a data-role="button" href="#Un_Poco" >Un Poco De...</a><a data-role="button" href="#Segunda" >2da Guerra Mundial</a> </div> </div> </div>';
		
		$(document).on('pagebeforecreate', '[data-role=page]', function () {
  if ($(this).find('[data-role=panel]').length === 0) {
    $('[data-role=header]').before(panel);
  }
});



$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
  $('#B_Vibrar').tap(function(){
    navigator.notification.vibrate(500);
  });
 },false); //deviceready
}); //document ready

