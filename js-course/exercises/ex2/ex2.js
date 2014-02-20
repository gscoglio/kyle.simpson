//$("#p1 > em, .p > strong > em").each(function(){
//	$(this)
//	.addClass("highlighted")
//	.attr({
//		title: "Look at me!"
//	});
//});

//$("em", "p").each(function () {
//    $(this)
//	.addClass("highlighted")
//	.attr({
//	    title: "Look at me!"
//	});
//});

//$("em", "#p1, .p strong").each(function () {
//    $(this)
//	.addClass("highlighted")
//	.attr({
//	    title: "Look at me!"
//	});
//});

$("em", "#p1, #p1+.p").each(function () {
    $(this)
	.addClass("highlighted")
	.attr({
	    title: "Look at me!"
	});
});
