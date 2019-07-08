(function($) {
    "use strict";

    // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
    
})(jQuery);

var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var player;
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                height: getHeight(),
                width: getWidth(),
                videoId: 'c1sl64AHDjE',
                events: {
                    'onReady': onPlayerReady,
                }
            });
        }

        function onPlayerReady(event) {
            $('#play_vid').click(function() {
                event.target.playVideo();
            });
        }

        $(document).ready(function() {
            $('#player').hide();
            $('#play_vid').click(function() {
                $('#player').show();
                $('#play_vid').hide();
            });
        });

function getWidth(argument) {
var img = document.getElementById('play_vid');
return img.width;
}


function getHeight(argument) {
var img = document.getElementById('play_vid');
return img.height;
}