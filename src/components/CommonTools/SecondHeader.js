import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import $ from 'jquery';
import logo from '../../assets/img/vimory-logo.png';
class SecondHeader extends Component {
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
        $(".topMenu-icon").click(function () {
            $("body").toggleClass("sidebarActive");
            $("#sidebar-wrapper").css({"width": "320"});
            $(".topMenu-icon .fa-bars").css({"opacity": "0"});
            
        });
        if ($(window).width() <= 767) {
            $("#secondMenu .navbar").addClass('d-none');
        }
      
    }

    handleScroll() {
        $(".dropdown-menu-right").hide();
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
    
                    if (window.scrollY >= introSection + appFeature + secondMenu) {
                        // alert("test");
                        this.setState({
                            scrollingLock: true
                        });
    
                        if (window.scrollY >= introSection + appFeature + secondMenu + template + photoEdit + slide + effect + frame + filter) {
                            // alert("test");
                            this.setState({
                                scrollingLock: false
                            });
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
            <div id="secondMenu" className={this.state.scrollingLock ? 'fixedClass second-menu mb-none':'absoluteClass second-menu  mb-none'}>
                <Navbar collapseOnSelect expand="md">
                    <div className="container">
                    
                        <a className="nav-link ds-none navbar-brand" href="#intro"><img src={logo} alt={alt} /></a>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <a className="nav-link" href="#template">Templates</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#photoEdit">Photo Edit</a>  
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#slide">Slide</a>    
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#effect">Effect</a> 
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#frame">Frame</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#filter">Filter</a>
                                    </li>
                                </ul>
                            </Nav>
                            <Nav className="ml-auto topMenu-icon">
                                <li>   <i className="fas fa-bars"></i></li>
                            </Nav>

                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
            );
        }
    }
export default SecondHeader;