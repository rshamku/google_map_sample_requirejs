require(['../main'], function () {
//	require(
//			[ "jquery", "mapme/google" ],
//			function( jquery, google ) {
//				var mapCanvas = jquery( "#map_canvas" ).get( 0 );
//
//				google.addMapToCanvas( mapCanvas );
//			}
//		);
	//This is better/cleaner for multiple deps
	require(function(require) {
				//This is better/cleaner for multiple deps
				var jquery = require("jquery"),
					google = require("mapme/google");
				
				var mapCanvas = jquery( "#map_canvas" ).get( 0 );
				google.addMapToCanvas( mapCanvas );
			}
		);
});
