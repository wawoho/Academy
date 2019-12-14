// new fullpage('#fullpage', {
//   sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6']
// });
$(".menu-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});

$(document).ready(function() { 
	$('#fullpage').fullpage({
	  sectionsColor: ['#fffff', '#F2F1F1', '#fffff', '#F2F1F1'],
	}); 
});

$(document).on('click', '#moveUp', function(){
  $('#fullpage').moveSectionUp();
});

