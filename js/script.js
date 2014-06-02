var slides = ['images/slides/Title.jpg', 'images/slides/1.jpg', 'images/slides/2.jpg', 'images/slides/3.jpg', 'images/slides/4.jpg', 'images/slides/5.jpg', 'images/slides/6.jpg'];
var counter = 0;

$(document).ready(function(){
	$('#prev').click(function() {
		if (counter > 0) {
			counter--;
		} else {
			counter = 6;
		}
		console.log(counter);
		$('#slide').fadeOut(function() {
			$('#slide').attr('src', slides[counter]);
			$('#slide').fadeIn();
		});
	});

	$('#next').click(function() {
		if (counter < 6) {
			counter++;
		} else {
			counter = 0;
		}
		console.log(counter);
		$('#slide').fadeOut(function() {
			$('#slide').attr('src', slides[counter]);
			$('#slide').fadeIn();
		});
	});
});