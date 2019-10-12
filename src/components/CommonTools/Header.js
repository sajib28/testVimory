import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import $ from 'jquery';
// import file or image
import logo from '../../assets/img/vimory-logo.png';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollingLock: false
        };
        // example how to bind object in React ES6
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        const height = document.getElementById('mainMenu').clientHeight;
        this.setState({ height });
        if ($(window).width() <= 767) {
            $("#mainMenu .navbar-nav .nav-link").click(function () {

                $(".navbar-collapse").slideToggle("slow");
            });
            $("#mainMenu .navbar-toggler").click(function () {

                $(".navbar-collapse").slideToggle("slow");
            });
        }

       
    }
    handleScroll() {
        let introSection = document.getElementById('intro').clientHeight;
        let appFeature = document.getElementById('appFeature').clientHeight;
        let secondMenu = document.getElementById('secondMenu').clientHeight;
        let template = document.getElementById('template').clientHeight;
        let photoEdit = document.getElementById('photoEdit').clientHeight;
        let slide = document.getElementById('slide').clientHeight;
        let effect = document.getElementById('effect').clientHeight;
        let frame = document.getElementById('frame').clientHeight;
        let filter = document.getElementById('filter').clientHeight;
        if ($(window).width() >= 767) {

            if (window.scrollY >= 100) {

                this.setState({
                    scrollingLock: true

                });

                if (window.scrollY >= introSection + appFeature + secondMenu) {
                    // alert("test");
                    this.setState({
                        scrollingLock: false
                    });

                    if (window.scrollY >= introSection + appFeature + secondMenu + template + photoEdit + slide + effect + frame + filter) {
                        // alert("test");
                        this.setState({
                            scrollingLock: true
                        });
                    }
                }
            }
            else{
                this.setState({
                    scrollingLock: false

                });
            }
        }

    }
    scrollToTop = () => {
        scroll.scrollToTop(300);
    };
    render() {

        let alt = "Vimory is designed to be your personal photo to video or slideshow stdio to make you a video superstar";

        return (
            <Navbar collapseOnSelect expand="md" id="mainMenu" className={this.state.scrollingLock ? 'fixedClass navbar navbar-expand-lg navbar-light header-area' : 'absoluteClass navbar navbar-expand-lg navbar-light header-area'}>
                <div className="container">
                    <a className="nav-link ds-none navbar-brand" href="#intro"><img src={logo} alt={alt} /></a>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <ul className="navbar-nav" id="main-menu">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#intro">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#appFeature">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#pricing">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#faqs">FAQs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#getInTouch">Contact Us</a>
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Header;