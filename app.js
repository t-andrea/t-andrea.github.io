// JavaScript Document
var isOpen = false;

var main = function() {
  /* Push the body and the nav over by 285px over */
   
  $('.icon-menu').click(function() {
	  if( isOpen == false ) {
		  openMenu;
		  isOpen = true;
	  } else {
		  closeMenu;
		  isOpen = false;
	  }
    
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    closeMenu;
  });
};

var openMenu = function() {
	$('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
}
var closeMenu = function() {
	$('.menu').animate({
		left: "-285px"
	}, 200);
	
	$('body').animate({
		left: "0px"
	}, 200);
}


$(document).ready(main);