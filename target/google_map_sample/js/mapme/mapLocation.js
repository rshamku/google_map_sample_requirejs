require(['../main'], function (main) {
	require(
			[ "jquery", "mapme/google" ],
			function( jquery, google ) {

				var mapCanvas = jquery( "#map_canvas" ).get( 0 );

				google.addMapToCanvas( mapCanvas );
			}
		);
});
