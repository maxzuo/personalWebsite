

function scrollTo() {
	var id = null;
	var arg = arguments[0];
	switch(arg) {
		case 1: id = "#contactMe";
			break;
		case 2: id = "#resume";
			break;
		case 3: id = "#music";
			break;
		case 4: id = "#art";
			break;
		case 5: id = "#programming";
			break;
		case 6: id="#aboutMe";
			break;
	}
	console.log(id);
	$("html, body").animate({
		scrollTop: ($(id).offset().top - 96)
	}, 600);

}



$(document).ready(function() {

});


$(window).resize(function() {
	$("#welcome").css("height", $(window).height());
});

window.addEventListener("scroll", function(event) {
	// console.log(document.body.scrollTop);
	if (document.documentElement.scrollTop || document.body.scrollTop >= $(window).height()) {
		$(".navbar").attr("class", "navbar navbarFixed");
		$("#navbarSpacer").css("height", 48);
	}
	else {
		$(".navbar").attr("class", "navbar navbarDefault");
		$("#navbarSpacer").css("height", 0);
	}
});