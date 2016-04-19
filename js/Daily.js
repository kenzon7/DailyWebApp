$(document).ready(function () {});

var $counter = 0;
$(document).on('click', '#add', function () {
	var x = $(this).find("div>div>h3").text();
	$(this).find("div>div>h3").text(Number(x) + 1);
	return false;
});


$('.nh').click(function () {
	var nhtxt = $('#nhtxt').val();
	$counter = $counter + 1;
	$('div#bigbox').append($("<a/>", {
		href: "#",
		id: "add"
	}).append($('<div/>', {
			'class': 'row'
		})
		.append($('<div/>', {
				'class': 'col-xs-10'
			})
			.append($('<h2/>', {
				text: nhtxt
			})))

		.append($('<div/>', {
				'class': 'col-xs-2'
			})
			.append($('<h3/>', {
				'class': "count",
				"id": "hab" + $counter,
				text: '0'
			})))
	));

});
