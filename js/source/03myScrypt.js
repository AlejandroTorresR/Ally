//Close #bs-example-navbar-collapse-1
$("#bs-example-navbar-collapse-1 .ally-menu li").click(function(){
    $('#bs-example-navbar-collapse-1').collapse('hide');
});

$('.panel-ally .panel-heading .panel-title a').each(function(){
    $(this).attr('href', 'ng-href');
});

$('.panel-ally .panel-collapse').each(function(){
	var $colapse = $(this).attr("ng-class");
    $(this).attr('id', $colapse);
});

//Cambio de imagen en Modal
$("#sab01").click(function(){
	var img = $(".modal-body img");
	img.attr("src","ally-assets/big_sab01.jpg");	
});

$("#sab02").click(function(){
	var img = $(".modal-body img");
	img.attr("src","ally-assets/big_sab02.jpg");	
});