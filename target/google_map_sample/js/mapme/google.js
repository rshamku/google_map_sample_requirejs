define(
	[ "async!http://maps.google.com/maps/api/js?key=AIzaSyCN472KIjZq-0yZiyYnFAVWZQa-PMCH4o0&sensor=true!callback" ],
	function() {
		return {
			addMapToCanvas: function( mapCanvas ) {
				var myOptions = {
					center: new google.maps.LatLng( 41.884777, -87.630611 ),
					zoom: 18,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};

				var map = new google.maps.Map( mapCanvas, myOptions );			
			}		
		}
	}
);