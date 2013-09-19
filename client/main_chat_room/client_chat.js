PairPal = {
	init: function(){
		var self = this;
		// self.enableGetUserMedia();
	},

	// Set up webcam on user's machine
	// enableGetUserMedia: function(){
	// 	navigator.getUserMedia = navigator.getUserMedia ||
	// 	navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

	// 	var constraints = {video: true};

	// 	navigator.getUserMedia(constraints, 
	
	// 		//success callback
	// 		function(localMediaStream){ 
	// 			window.stream = localMediaStream; // stream available to console
	// 			var video = document.querySelector("video");
	// 			video.src = window.URL.createObjectURL(localMediaStream);
	// 			video.play();
			
	// 		//error callback
	// 		},function(error){ 
	// 			console.log("navigator.getUserMedia error: ", error);
	// 		}
	// 	);
	// }
}

PairPal.init();
