
function slideBook() {
	$(document).ready(function(){
		$.ajaxSetup({cache: false});
		var images = ["imgb/1.jpg", "imgb/2.jpg", "imgb/3.jpg", "imgb/4.jpg", "imgb/5.jpg", "imgb/6.jpg", "imgb/7.jpg", "imgb/8.jpg", "imgb/9.jpg", "imgb/10.jpg", "imgb/11.jpg", "imgb/12.jpg", "imgb/13.jpg", "imgb/14.jpg", "imgb/15.jpg", "imgb/16.jpg"];
		var currentImage = 0;
		
		$("#img1").attr("src", images[currentImage]);
		$("#img2").attr("src", images[currentImage + 1]);
		$("#img3").attr("src", images[currentImage + 2]);
		$("#img4").attr("src", images[currentImage + 3]);
		$("#img5").attr("src", images[currentImage + 4]);
		$(".previous").click(function(){
			if(currentImage != 0){
				currentImage--;
				$("#img1").attr("src", images[currentImage]);
				$("#img2").attr("src", images[currentImage + 1]);
				$("#img3").attr("src", images[currentImage + 2]);
				$("#img4").attr("src", images[currentImage + 3]);
				$("#img5").attr("src", images[currentImage + 4]);
			}
		});
		$(".next").click(function(){
			if(currentImage != images.length - 5){
				currentImage++;
				$("#img1").attr("src", images[currentImage]);
				$("#img2").attr("src", images[currentImage + 1]);
				$("#img3").attr("src", images[currentImage + 2]);
				$("#img4").attr("src", images[currentImage + 3]);
				$("#img5").attr("src", images[currentImage + 4]);
			}
		});
	});
}

function slideText() {
	$(document).ready(function() {
		$("p.extend").hide();
		$(".container").click(function(e) {
			$(e.target).parent().children("p.extend").slideToggle("fast");
			return false;
			});
		});
}

function loadPage() {
	$(document).ready(function (){
		$('#main_section').load('main.html');
		
		$('ul#nav li a').click(function() {
			var page = $(this).attr('href');
			$('#main_section').load(page + ".html");
			return false;
		});
	});
}