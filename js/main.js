// https://api.instagram.com/v1/tags/javielskerukm/media/recent?client_id=d81afea83c3f40b5a5485418e2a53aa7

var CLIENT_ID = 'd81afea83c3f40b5a5485418e2a53aa7'


jQuery(document).ready(function($) {
	$("button[name='tag-btn']").bind('click', function() {
		var tag = jQuery("input[name='tag-text']").val();
		console.log(tag);


		jQuery.ajax({
			url: 'https://api.instagram.com/v1/tags/'+tag+'/media/recent?client_id='+CLIENT_ID,
			type: 'get',
			/*
			dataType: 'jsonp',
			jsonp: 'callback',
 	    	jsonpCallback: "jsonpcallback",
 	    	*/
 	    	dataType: 'jsonp'
		})
		.done(function(res) {

			jQuery("#gallery").html('');
			jQuery.each(res['data'], function(i, post) {
				console.log(post);
				var image = post['images']['low_resolution'];
				var user = post['user'];
				var caption = post['caption'];

				var out = '<div class="image col-xs-6 col-md-4 col-lg-3">';
				out += '<a href="'+post.link+'"><img src ="'+image.url+'" /></a><br/>';
				// if (caption) out += '<span>'+caption.text+'</span><br/>';
				out += '<em>Username: '+user.username+'</em><div class="clearfix></div></div>';

				jQuery("#gallery").append(out);
			});
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	});
});