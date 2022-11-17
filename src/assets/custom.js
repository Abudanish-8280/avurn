$(function () {
	var filterList = {
		init: function () {
			$('.portfolio').mixItUp({
				selectors: {
  			  target: '.mix',
  			  filter: '.filter'	
  		  },
  		  load: {
    		  filter: '.design, .print, .video, .branding'
    		}     
			});								
		}
	};
	filterList.init();
});	


// function called(){
//   alert('Hello World');
// };