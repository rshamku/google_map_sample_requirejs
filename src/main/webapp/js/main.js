//require.config({
//	paths:{
//		jquery: "libs/jquery-1.6.2",
//		async: "libs/async",
//		google: "mapme/google"
//	}
//});

require.config({
    baseUrl: 'js/libs',
    paths: {
        mapme: '../mapme'
    }
});

//require(
//	[ "jquery", "google" ],
//	function( $, google ) {
//
//		var mapCanvas = $( "#map_canvas" ).get( 0 );
//
//		google.addMapToCanvas( mapCanvas );
//	}
//);

