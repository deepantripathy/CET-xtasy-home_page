$(init);

function init() {
	setTimeout(function(){
        var w = $('#cen').width()/2;
    var h = $('#cen').height()/2;
    console.log(h);
    var sty = {'margin-left':-w, 'margin-top':-h, 'top': '50%', 'left': '50%'}
    $("#cen").css(sty);
    // $('#cen').animate({'-webkit-filter':'brightness('+150+'%)'}, 500);
    $('#content').width($(window).width());
    $('#content').height($(window).height());
    $("#band").delay(500).animate({opacity: '1'}, 200);
    $("#cen").delay(1000).animate({opacity: '1'}, 200);
    $('#goButton').delay(3000).animate({opacity: '1'}, 200);

}, 1000);
    }

	
$("#goButton").click(function () {
 	
    // // Set the effect type
    // var effect = 'slide';

 	
    // // Set the options for the effect type chosen
    // var options = { direction: 'top' };
 
    // // Set the duration (default: 400 milliseconds)
    // var duration = 700;
 	
    // // $('#body_div').toggle(effect, options, duration);
    // $('#body_div').slideUp(5000, 'easeInOutQuad');
    
    $('#content').animate({backgroundColor: '#fff'}, 2000);
    // $('#content').load("hello.html")
    
    setTimeout(
    	function(){
    		$(location).attr('href',"/home.html");

    	},2000);
    $('#goButton').css("z-index", "7");
});