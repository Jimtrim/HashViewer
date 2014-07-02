<?php
	// https://api.instagram.com/v1/tags/javielskerukm/media/recent?client_id=d81afea83c3f40b5a5485418e2a53aa7
	require 'vendor/autoload.php';

	error_reporting( E_ALL );
	$CLIENT_ID = "d81afea83c3f40b5a5485418e2a53aa7";

	$tag =  "#javielskerukm"; //$_GET['hashtag'];
	$uri	 = "https://api.instagram.com/v1/tags/" . $tag . "/media/recent?client_id" . $CLIENT_ID;
	echo $uri."\n";
	
	echo("HTTP: BEFORE\n");
	$response = Request::get($uri)->send();
	echo("HTTP: DONE\n");

?>

