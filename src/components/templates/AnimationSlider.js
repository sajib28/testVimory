import React, { Component } from 'react';
// import LazyLoad from 'react-lazyload';
import Carousel from 'react-spring-3d-carousel';
import uuidv4 from "uuid";
import { config } from "react-spring";
import $ from 'jquery';
import prev from '../../assets/img/icon/prev.png';
import next from '../../assets/img/icon/next.png';
import templatePic from '../../assets/img/template-mobile.jpg';
import Poster1 from '../../assets/img/videoPoster/love.jpg';
import Poster2 from '../../assets/img/videoPoster/girls.jpg';
import Poster3 from '../../assets/img/videoPoster/love2.jpg';
import Poster4 from '../../assets/img/videoPoster/spring.jpg';
import Poster5 from '../../assets/img/videoPoster/kids.jpg';
// import Poster4 from '../../assets/media/template/spring.webm';
// import Poster5 from '../../assets/media/template/kids.webm';
import Template1 from '../../assets/media/template/love.mp4';
import Template2 from '../../assets/media/template/girls.mp4';
import Template3 from '../../assets/media/template/love2.mp4';
import Template4 from '../../assets/media/template/spring.mp4';
import Template5 from '../../assets/media/template/kids.mp4';
import pentagon from '../../assets/img/icon/pentagon.png';
import triangleIndigo from '../../assets/img/icon/triangle-indigo.png';

let slides = [
    {
        key: uuidv4(),
        content: <div className="video-template mb-none">
            <video autoPlay muted loop playsInline preload="none" poster={Poster1} width="600" height="600">
                {/* <source src={Templatewebm1} preload="auto" type="video/webm" /> */}
                <source data-src={Template1} preload="auto" type="video/mp4" />
            </video>
        </div>
    },

    {
        key: uuidv4(),
        content: <div className="video-template mb-none">
            <video autoPlay muted loop playsInline preload="none" poster={Poster2} width="600" height="600">
                {/* <source src={Templatewebm2} preload="auto" type='video/webm' /> */}
                <source data-src={Template2} preload="auto" type="video/mp4" />
            </video>
        </div>
    },
    {
        key: uuidv4(),
        content: <div className="video-template mb-none">
            <video autoPlay muted loop playsInline preload="none" poster={Poster3} width="600" height="600">
                {/* <source src={Templatewebm3} preload="auto" type='video/webm' /> */}
                <source data-src={Template3} type="video/mp4" />
            </video>
        </div>
    },

    {
        key: uuidv4(),
        content: <div className="video-template mb-none">
            <video autoPlay muted loop playsInline preload="none" poster={Poster4} width="600" height="600">
                {/* <source src={Templatewebm4} preload="auto" type="video/webm" /> */}
                <source data-src={Template4} type="video/mp4" />
            </video>
        </div>
    },
    {
        key: uuidv4(),
        content: <div className="video-template mb-none">
            <video autoPlay muted loop playsInline preload="none" poster={Poster5} width="600" height="600">
                {/* <source src={Templatewebm5} preload="auto" type="video/webm" /> */}
                <source data-src={Template5} type="video/mp4" />
            </video>
        </div>
    }
];
class AnimationSlider extends Component {
    componentDidMount() {
        $(".css-1fzpoyk .video-template video").trigger('pause');
        $('div[style*="z-index: 0"]').css({ opacity: 0 });
        $('div[style*="z-index: 0"]').css({ opacity: 0 });
        $('.css-1qzevvg img:first-child').attr("src", prev);
        $('.css-1qzevvg img:last-child').attr("src", next);
        $('div[style*="left: 50%"]').addClass('active');
        $('div.active video').trigger('play');

        $(".css-1qzevvg img:last-child").click(function () {
            $('div[style*="z-index: 0"]').css({ opacity: 0 });
            $('div[style*="z-index: 0"]').css({ opacity: 0 });
            $("div.active video").trigger('pause');
            $("div.active").next().addClass('active');
            $("div.active").first().removeClass('active');
            $("div.active video").trigger('play');

        });
        $(".css-1qzevvg img:first-child").click(function () {
            $('div[style*="z-index: 0"]').css({ opacity: 0 });
            $('div[style*="z-index: 0"]').css({ opacity: 0 });
            $("div.active video").trigger('pause');
            $("div.active").prev().addClass('active');
            $("div.active:eq(1)").removeClass('active');
            $("div.active video").trigger('play');

        });
    }
    state = {
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: true,
        autoPlay: true,
        play: true,
        autoplay: true,
        loop: true,
        config: config.slow
    };
    render() {
        let alt = "Vimory is designed to be your personal photo to video or slideshow stdio to make you a video superstar";
        return (
                <div className="slider-section">
                    <div className="circle-position two-circle bottom-left mb-none">
                        <div className="circle-wrapper">
                            <div className="orbit circle-spin">
                                <div className="first-circle">
                                    <div className="outer-orbit-small">
                                        <div className="small">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vimory-animation animation-type-4 top-right mb-none">
                        <img className="pentagon" src={pentagon} alt={alt} />
                        <div className="brk-animated-circle__container">
                            <img src={triangleIndigo} alt={alt} />
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div id="threedSlider">
                                    <Carousel
                                        slides={slides}
                                        goToSlide={this.state.goToSlide}
                                        offsetRadius={this.state.offsetRadius}
                                        showNavigation={this.state.showNavigation}
                                        animationConfig={this.state.config}
                                        autoPlay={this.state.autoPlay}
                                        loop={this.state.loop} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2 text-center">
                                <div className="mobile-content">
                                    <img className="onlyMobile" src={templatePic} alt={alt} />
                                </div>
                                <p className="wow fadeInUp" data-wow-delay="0.2s" animation-delay="0.2s">Create and share your memory more easily with the help of lots of templates. We have created so many templates for many purposes, just select a template and some photos and vimory will make it ready for you.</p>
                            </div>
                        </div>
                    </div>
                </div >
        )
    }
}
export default AnimationSlider;