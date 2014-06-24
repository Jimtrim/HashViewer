// https://api.instagram.com/v1/tags/javielskerukm/media/recent?client_id=d81afea83c3f40b5a5485418e2a53aa7


var TagViewer = {
	CLIENT_ID: 'd81afea83c3f40b5a5485418e2a53aa7',
	next_url: undefined,
	last_tag: '',
	no_of_pictures: 0,

	reset: function() {
		TagViewer.no_of_pictures = 0;
		TagViewer.next_url = undefined;
		jQuery("#gallery").html('');
	},

	createGalleryBlock: function(post) {
		var image = post.images;
		var user = post.user;
		var caption = post.caption;

		var out = '<div class="col-xs-6 col-md-4 col-lg-4"> <div class="gallery-image text-center">';
			out += '<div class="clearfix></div>'
			out +=		'<a href="'+post.link+'"><img class="col-sm-12" src ="'+image.low_resolution.url+'" /></a><br/>';
			out +=		'<em>Username: '+user.username+'</em>';
			if (caption) {
				out +=	'<p>'+caption.text+'</p>';
			}
			out += '</div></div>';
		
		return out;
	}, 

	displayError: function(message) {
		jQuery('#error-container').html('<span>'+message+'</span>').removeClass('hidden');
		console.log(message);
	},

	updateGallery: function(event) {
		jQuery('#error-container').addClass('hidden');
		var tag = jQuery("input[id='tag-text']").val();
		if (TagViewer.last_tag != tag) {
			TagViewer.reset();
			TagViewer.last_tag = tag;
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
				var new_i;
				jQuery.each(res.data, function(i, post) {
					if (TagViewer.no_of_pictures %2==0) jQuery("#gallery").append('<div class="clearfix visible-sm">');
					if (TagViewer.no_of_pictures %3==0) jQuery("#gallery").append('<div class="clearfix visible-md visible-lg">');
					jQuery("#gallery").append(TagViewer.createGalleryBlock(post));
					TagViewer.no_of_pictures += 1;
				});

				if (res.pagination.next_url) {
					jQuery("#more-btn").removeClass('hidden');
					TagViewer.next_url = res.pagination.next_url;
				} else {
					jQuery("#more-btn").addClass('hidden');
				}
			}

		})
		.fail(function(err) {
			console.log("error");
			TagViewer.displayError("ERROR:"+err);
		})
		
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