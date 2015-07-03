
	 
	
$(function () {
 
 $('.toggle-btn').click(function(){
	$('.wrap').toggleClass('open');
	
 });
 $('.toggle-overlay, .menu-list a').click(function(){
	$('.wrap').removeClass('open note-open');
	
 });
 
$('.notification').click(function(){
	$('.wrap').toggleClass('note-open');
	
 });
 $('.all').click(function(){
	$('.header-All').toggleClass('down');
	
 });
 
});

 