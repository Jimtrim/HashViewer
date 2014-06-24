// https://api.instagram.com/v1/tags/javielskerukm/media/recent?client_id=d81afea83c3f40b5a5485418e2a53aa7


var TagViewer = {
	CLIENT_ID: 'd81afea83c3f40b5a5485418e2a53aa7',
	next_url: '',
	last_tag: '',

	createGalleryBlock: function(post) {
		var image = post.images;
		var user = post.user;
		var caption = post.caption;

		var out = '<div class="image col-xs-6 col-md-4 col-lg-3">';
		out += '<a href="'+post.link+'"><img src ="'+image.low_resolution.url+'" /></a><br/>';
		out += '<em>Username: '+user.username+'</em><div class="clearfix></div></div>';
		
		return out;
	}, 

	displayError: function(message) {
		console.log(message);
	},

	updateGallery: function(event) {
		var tag = jQuery("input[id='tag-text']").val();
		console.log(tag);
		if (TagViewer.last_tag != tag) {
			TagViewer.last_tag = tag;
			TagViewer.next_url = undefined;
			jQuery("#gallery").html('');
		}

		url = TagViewer.next_url || 'https://api.instagram.com/v1/tags/'+tag+'/media/recent?client_id='+TagViewer.CLIENT_ID;
		
		jQuery.ajax({
			url: url,
			type: 'get',
			dataType: 'jsonp'
		})
		.done(function(res) {
			if (res.meta.code >= 400) { // if requests responds with HTTP error codes
				TagViewer.displayError("ERROR: "+res.meta.error_message);
			} else {
				TagViewer.next_url = res.pagination.next_url;
				jQuery.each(res.data, function(i, post) {
					jQuery("#gallery").append(TagViewer.createGalleryBlock(post));
				});
				if (TagViewer.next_url) {
					console.log(TagViewer.next_url);
					jQuery("#more-btn").show();
				} else {
					jQuery("#more-btn").hide();
				}
			}

		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
		return this;
	}
};

jQuery(document).ready(function($) {
	$("button[id='tag-btn']").bind('click', TagViewer.updateGallery); 

	$("input[id='tag-text']").keypress(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            $("button[id='tag-btn']").click();
            $(this).blur();	
            return false;
        } else {
            return true;
        }
    });
});