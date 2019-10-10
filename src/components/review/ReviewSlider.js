import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ReviewSlider extends Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:true
        };
        return (

            <Slider {...settings}>
                <div>
                    <h3 className="wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">Awesome App</h3>
                    <ul className="list-unstyled list-inline review-icon wow fadeInUp" animation-delay="0.5s" data-wow-delay="0.5s">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                    </ul>
                    <p className="wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.6s">What a way to make video memories using my photos. Keep updating with new slides, effects, frames, filters. I love this app.</p>
                    <span className="author-name wow fadeInUp" animation-delay="0.7s" data-wow-delay="0.7s">MikeMattarocciBook</span>
                </div>
                <div>
                    <h3>Unique App</h3>
                    <ul className="list-unstyled list-inline review-icon">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>

                    </ul>
                    <p>Only app to create awesome profile video for Facebook.</p>
                    <span className="author-name">EHTerritory</span>
                </div>
                <div>
                    <h3>Love it</h3>
                    <ul className="list-unstyled list-inline review-icon">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                    </ul>
                    <p>I love it I can make videos for my friends and family it is amazing.</p>
                    <span className="author-name">Izy09</span>
                </div>
                <div>
                    <h3>Awesome App</h3>
                    <ul className="list-unstyled list-inline review-icon">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                    </ul>
                    <p>I absolutely love this app as I used it to make a beautiful video of memories of my daughter for her funeral.</p>
                    <span className="author-name">GeorgiaRebel1437</span>
                </div>
            </Slider>

        );

    }
}
export default ReviewSlider;