import React, { Component } from 'react';
import $ from 'jquery';
class Preloader extends Component {
    componentDidMount() {
        // var device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
        // if (device) {
        //     // $("video").remove();
        //     // it is mobile browser
        // }
        // else {
            // no mobile browser
            var sources = document.querySelectorAll('video source');
            // Define the video object this source is contained inside
            var video = document.querySelector('video');
            for (var i = 0; i < sources.length; i++) {
                sources[i].setAttribute('src', sources[i].getAttribute('data-src'));
            }
            // If for some reason we do want to load the video after, for desktop as opposed to mobile (I'd imagine), use videojs API to load
            video.load();
            video.muted = "muted";

        // }
        if ($(window).width() <= 991) {
            $(".react-tabs").remove();
            $("video").remove();
        }
        else{
            
        }
        $(".allDevice video").trigger('play');

        // Preloader
        if ($(window).width() >= 667) {
        setTimeout(function () {
            $('#preloader').fadeOut();
        }, 5000);
    }

        // Preloader
        
        // End Preloader
        // video hide From Mobile

    }
    render() {
        return (
            <div id="preloader">
                <div className="sk-wave">
                    <div className="sk-rect sk-rect1"></div>
                    <div className="sk-rect sk-rect2"></div>
                    <div className="sk-rect sk-rect3"></div>
                    <div className="sk-rect sk-rect4"></div>
                    <div className="sk-rect sk-rect5"></div>
                </div>
            </div>
        );
    }
}
export default Preloader;