window.addEventListener('scroll', function(e) {

    const target = document.querySelectorAll('.scroll');

    var index = 0, length = target.length;
    for (index; index < length; index++) {
        var pos = window.pageYOffset * target[index].dataset.rate;

        if(target[index].dataset.direction === 'vertical') {
            target[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
        } else {
            var posX = window.pageYOffset * target[index].dataset.ratex;
            var posY = window.pageYOffset * target[index].dataset.ratey;
            
            target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
        }
    }
    });


    var track = document.getElementById('track');

    var controlBtn = document.getElementById('play-pause');
    
    function playPause() {
        if (track.paused) {
            track.play();
            //controlBtn.textContent = "Pause";
            controlBtn.className = "pause";
        } else { 
            track.pause();
             //controlBtn.textContent = "Play";
            controlBtn.className = "play";
        }
    }
    
    controlBtn.addEventListener("click", playPause);
    track.addEventListener("ended", function() {
      controlBtn.className = "play";
    });

const maire = document.querySelector('#track2');
const audioo = document.querySelectorAll("#audiochar").forEach(function(element) {
    element.addEventListener("click", function(){
        if (maire.paused) {
            maire.play();
            track.pause();
        } else { 
            maire.pause();
            track.play();
        }
    });
});