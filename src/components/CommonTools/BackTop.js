import React, { Component } from 'react';
import $ from 'jquery';
class BackTop extends Component {
    
    componentDidMount() {
       // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#backTop').fadeIn('slow');
    } else {
      $('#backTop').fadeOut('slow');
    }
  });
    }

    render() {
        return (
            <div id="backTop">
                <a href="#intro" className="back-top"><i className="fas fa-chevron-up"></i></a>
            </div>

        )
    }
}
export default BackTop;

