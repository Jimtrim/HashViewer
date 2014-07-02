<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Instagram HashViewer</title>

	<link rel="stylesheet" type="text/css" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" >
	<link rel="stylesheet" type="text/css" href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<meta name="description" content="View images from Instagram based on tags, with no need for login">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
</head>
<body>
	<!--[if lt IE 7]>
		<p class="browsehappy">
			You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/?locale=en">upgrade your browser</a> to improve your experience.
		</p>
	<![endif]-->

	<div class="jumbotron">
		<div class="container">
			<a href="javascript:HashViewer.reset()"><h1 class="page-header">HashViewer</h1></a>
			<em>for Instagram</em>
		</div>
	</div>

	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="form-group">
					
					<div class="input-group">
						<input type="text" id="tag-text" class="form-control">
						<span class="input-group-btn">
							<button class="btn btn-default" type="button" id="tag-btn" onClick="HashViewer.updateWindowHash()">Go!</button>
						</span>
					</div>

					<span class="help-block">Input Instagram tag</span>
				</div>
			</div>
		</div>

		<div class="container">
			<div id="error-container" class="hidden alert alert-danger">			
			</div>	
			<div id="gallery" class="row">
			</div>
			<div class="col-xs-12 text-center">
				<button onclick="HashViewer.updateGallery()" class="hidden btn btn-default btn-lg" type="button" id="more-btn">Load more</button>
			</div>
		</div>

	
		<footer>
			<hr />
			<p><em>This page is made with the Instagram API.</em> <a href="https://github.com/Jimtrim/TagViewer/">GitHub</a></p>
		</footer>

	</div>

	<div class="scripts">
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
		<script src="js/main.js"></script>

		<!-- Google Analytics -->
		<script>
		    var useAnalytics = true;

		    try {
		        //Turn off analytics if 'analytics=off' is included as a request parameter.
		        var parameters = window.location.search.split('&');
		        if (parameters[0]) {
		            parameters[0] = parameters[0].replace('?', '');
		        }
		        for (var i = 0; i < parameters.length; i++) {
		            var values = parameters[i].split('=');
		            if (values[0] == 'analytics' && values[1] == 'off') {
		                useAnalytics = false;
		            }
		        }

		        //Turn off analytics if 'localhost' is the host
		        if (window.location.host == 'localhost' || window.location.host == 'dev.hashviewer.net') {
		            useAnalytics = false;
		        }
		    } catch(e) {
		        //Just in case something goes wrong...
		        useAnalytics = true;
		    }

		    if (useAnalytics) {

		    	var _gaq = _gaq || [];
		        _gaq.push(['_setAccount', 'UA-52465698-1']);
		        _gaq.push(['_trackPageview']);

		        (function() {
		            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		        })();
		        
			}
		</script>
		<!-- -->
	</div>
</body>
</html>