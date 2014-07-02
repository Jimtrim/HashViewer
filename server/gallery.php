<?php
	error_reporting( E_ALL );
	$CLIENT_ID = "d81afea83c3f40b5a5485418e2a53aa7";

	$tag =  "#javielskerukm"; //$_GET['hashtag'];
	$url = "https://api.instagram.com/v1/tags/" . $tag . "/media/recent";
	echo $url;
	
	echo("HTTP: BEFORE<br>");
	$req = new HttpRequest($url);
	echo("HTTP: DONE");

	$req->addQueryData( array('client_id' => $CLIENT_ID));

	echo("lol1");
	try {
	    $r->send();
	    echo("lol2");
	    if ($r->getResponseCode() == 200) {
	    	echo("lol3");
	        echo($r->getResponseBody());
	    }
	} catch (HttpException $ex) {
	    echo $ex;
	}

?>

