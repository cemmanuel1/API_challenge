$(document).ready(function() {

	var myCenter=new google.maps.LatLng(37.792507, -122.406024);

	function initialize()
	{
		var mapOptions = {
			zoom: 8,
			center: myCenter,
			mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map=new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);
	

	var marker=new google.maps.Marker({
		position:myCenter,
	});

marker.setMap(map);
}


	function loadScript() {
		var script = document.createElement('script');
		script.type = 'text/javascript'
  	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
}


window.onload = loadScript;
});
