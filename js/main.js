window.onload = function() {
	var timesboroimhe = ['06:31','06:34','07:18','07:19','07:24','07:31','07:34','07:44','08:00','07:54','08:05','08:06','08:10','08:14','08:24','08:31',
	                     '08:49','08:44','08:52','09:04','09:09','09:34','10:04','10:05','10:34','11:04','11:34','12:04','12:34','13:04','13:34','14:04',
	                     '14:34','15:04','15:34','16:04','16:34','20:24'];
	
	var timescity = ['18:05','18:07','18:10','18:15','18:20','18:25','18:30','18:45','18:50','19:00','19:15','19:30','19:45','20:15','20:45','21:45',
	                     '22:15','23:00','23:30','23:45'];

	function calcTime(timetable) {
		var actualTime = new Date().getHours() + ':' + new Date().getMinutes();
		actualTime = actualTime.replace(/:/g,'');

		var newar=[]

		for(i=0;i<timetable.length;i++){
			timesstring = String(timetable).replace(/:/g,'');
			times = timesstring.split(',').map(Number);
<<<<<<< HEAD
			newar.push(actualTime-times[i]); //newar.push(math.abs(actualTime-times[i])) for buses before the time;
		}

		
		var i = newar.indexOf(Math.min.apply(Math, newar));
console.log(newar);
		var closestTime = times[i] < actualTime ? times[0] : times[i]; //Check if actual time is greater than last bus
		var closestTimeString = String(closestTime);
		// Add 0 for hours before 12 am
		closestTimeString = (closestTimeString.length === 3) 
							? '0' + closestTimeString.substring(0,1) + ':' + closestTimeString.substring(1)
							: closestTimeString.substring(0,2) + ':' + closestTimeString.substring(2);
		return closestTimeString;
		
	}
	
//	console.log(calcTime(timesboroimhe));
//	
	console.log(calcTime(timescity));
	

//	$('#time-container').find('#content-text-boroimhe').text(calcTime(timesboroimhe));
//	
//	$('#boroimhetocity').click(function () {
//		$('#boroimhetocity').css('display','none');
//		$('#citytoboroimhe').css('display','block');
//		$('#content-text-city').text(calcTime(timescity));
//	})
//	
//	$('#citytoboroimhe').click(function () {
//		$('#citytoboroimhe').css('display','none');
//		$('#boroimhetocity').css('display','block');
//		$('#content-text-boroimhe').text(calcTime(timesboroimhe));
//	})
=======
			
			newar.push(actualTime-times[i]); //newar.push(math.abs(actualTime-times[i])) for buses before the time;
			
		}

		var i = newar.indexOf(Math.min.apply(Math, newar));
		var closestTime = times[i];
		var closestTimeString = String(closestTime);
		closestTimeString = closestTimeString.substring(0,2) + ':' + closestTimeString.substring(2);
		return closestTimeString;
	}
	
	console.log(calcTime(timescity));
	$('#time-container').find('#content-text-boroimhe').text(calcTime(timesboroimhe));
	
	$('#boroimhetocity').click(function () {
		$('#boroimhetocity').css('display','none');
		$('#citytoboroimhe').css('display','block');
		$('#content-text-city').text(calcTime(timescity));
	})
	
	$('#citytoboroimhe').click(function () {
		$('#citytoboroimhe').css('display','none');
		$('#boroimhetocity').css('display','block');
		$('#content-text-boroimhe').text(calcTime(timesboroimhe));
	})
>>>>>>> 65f132480ef5bd616c3a3a2f8020c6677cc27003
	

	

	
	var map = document.getElementById('map');
	var time = document.getElementById('main');
	
	$('#show-map').click(function(){
		$('#main').css('display','none');
		$('#map').css('display','block');
	});
	
	$('#back-btn').click(function(){
		$('#main').css('display','block');
		$('#map').css('display','none');
	});
	
	var scroller = document.querySelector(".content");
    
    if(scroller) {
        scroller.setAttribute("tizen-circular-scrollbar", "");
    }
    
    
//	function showMap() {
//		map.className('ui-page-active');
//		main.className('');
//	};
//	
//	function showTime() {
//		main.style.display = "block";
//		map.style.display = "none";
//	};
	
//	window.addEventListener( 'tizenhwkey', function( ev ) {
//		if( ev.keyName === "back" ) {
//		    var page = document.getElementsByClassName( 'ui-page-active' )[0],
//			openDrawer = page.querySelector('.ui-drawer-open'),
//			pageid = page ? page.id : "";
//		    if( !openDrawer && (pageid === "main") ) {
//			try {
//			    tizen.application.getCurrentApplication().exit();
//			} catch (ignore) {
//			}
//		    } else {
//			window.history.back();
//	            }
//		}
//	    } );

	
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });

    // Sample code
//    var mainPage = document.querySelector('#main');
//    document.querySelector('#content-text').innerHTML = closestTimeString;
//    mainPage.addEventListener("onclick", function() {
//        var contentText = document.querySelector('#map');
//
//        contentText.style.display = "block";
//    });
};