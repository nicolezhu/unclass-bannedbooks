$(document).ready(function () {
	// title page graphic
	$("#intro-image2").delay(1000).fadeTo(2000, 1);


	// chapter 2 image slider
	$('#checkbox').change(function(){
		setInterval(function () {
			moveRight();
		}, 3000);
	});
			  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
				
	$('#slider').css({ width: slideWidth, height: slideHeight });
				
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
				
	$('#slider ul li:last-child').prependTo('#slider ul');

	function moveLeft() {
		$('#slider ul').animate({
			left: + slideWidth
		}, 200, function () {
		$('#slider ul li:last-child').prependTo('#slider ul');
			$('#slider ul').css('left', '');
		});
	};

	function moveRight() {
		$('#slider ul').animate({
			left: - slideWidth
		}, 200, function () {
		$('#slider ul li:first-child').appendTo('#slider ul');
			$('#slider ul').css('left', '');
		});
	};

	$('a.control_prev').click(function () {
		moveLeft();
	});

	$('a.control_next').click(function () {
		moveRight();
    });
				

	// intro and conclusion blackout
	$('.blackout').click(function() {
		$(this).css('background-color', '#fcefcc');
	});


	// book carousel initialization
	$(function() {
		$('#ca-container').contentcarousel({
			// speed for the sliding animation
			sliderSpeed : 500,
			// easing for the sliding animation
		    sliderEasing : 'easeOutExpo',
		    // speed for the item animation (open / close)
		    itemSpeed : 500,
		    // easing for the item animation (open / close)
		    itemEasing : 'easeOutExpo',
		    // number of items to scroll at a time
			scroll : 1
		});
	});
}); 