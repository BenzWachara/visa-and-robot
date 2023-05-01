import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Visaiconsvg from "../img/visa-svgrepo-com.svg";
import Goldplan from "../img/gold-leaf.png";
import Restaurant from "../img/restuarant.png";
import Menuhamburger from "../img/nemu-hamburger.png";
import Iconcalendar from "../img/icon-calendar.png";
import Iconmoneyhand from "../img/hand-hold-money.png";
import Iconshopbag from "../img/shop-bag.png";
import Iconcoins from "../img/icon-coins.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function visa(){

    const numbers = [1, 2, 3];
    const listItems = numbers.map((number) =>
    <Link to={"/visadetail1"}>
    <div className="array-test">
    <div className="card-visa">
                
                <div className="card-section1">
                    <div className="section1-left">
                        <img className="visa-svg" src={Visaiconsvg}/>
                        <img className="gold-plan" src={Goldplan} />
                    </div>
                    <div className="section1-right">
                        <p className="available">{number}<a href="#"></a>Available Balance</p>
                        <div className="count-money">
                            <p className="dollar">$</p>
                            <p>7,392.00</p>
                        </div>
                    </div>
                </div>
                <div className="card-section2">
                    <div className="number-card"><p>42012</p> <p>3049</p> <p>2800</p> <p>9815</p></div>
                </div>
                <div className="card-section3">
                    <div className="section3-left">
                        <p className="code-number">EXPIRE</p>
                        <p className="triangle">▶</p>
                        <p className="ex-code">02/22</p>
                    </div>
                    <div className="section3-right">
                        <p className="code-number">CVC CODE</p>
                        <p className="triangle">▶</p>
                        <p className="ex-code">230</p>
                    </div>
                </div>
            </div>
    </div>
    </Link>
    );

    //setting slide
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        nextArrow: false,
        prevArrow: false,
        centerPadding: 0,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
        };

    return(
        
        <div className="screen-container">
            <div className="header-account">
                <div className="name-account">

                    <h1 className="title-account">All my accounts</h1>
                    <p className="date-under">June 10, 2018</p>
                </div>
                <div className="nav-icon">
                    <Link to={"/visadetail1"}>
                        <img className="icon-hamhurger" src={Menuhamburger}/>
                    </Link>
                    
                </div>
            </div>

            
            <Slider {...settings} className="slider-card">
            {listItems}
            </Slider>

            {/* <div className="card-visa">
                <div className="card-section1">
                    <div className="section1-left">
                        <img className="visa-svg" src={Visaiconsvg}/>
                        <img className="gold-plan" src={Goldplan} />
                    </div>
                    <div className="section1-right">
                        <p className="available">Available Balance</p>
                        <div className="count-money">
                            <p className="dollar">$</p>
                            <p>7,392.00</p>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="card-section2">
                    <div className="number-card"><p>42012</p> <p>3049</p> <p>2800</p> <p>9815</p></div>
                </div>
                <div className="card-section3">
                    <div className="section3-left">
                        <p className="code-number">EXPIRE</p>
                        <p className="triangle">▶</p>
                        <p className="ex-code">02/22</p>
                    </div>
                    <div className="section3-right">
                        <p className="code-number">CVC CODE</p>
                        <p className="triangle">▶</p>
                        <p className="ex-code">230</p>
                    </div>
                </div>
            </div> */}

            <div className="in-ex">
                <div className="income">
                        <p className="title-income">Income</p>
                        <div className="income-number">
                            <i class="gg-arrow-down"></i>
                            <p>$9,302.00</p>
                        </div>
                </div>
                <div className="expense">
                        <p className="title-expense">Expense</p>
                        <div className="expense-number">
                        <i class="gg-arrow-up"></i>
                            <p>$2,790.00</p>
                        </div>
                </div>
            </div>

            <div className="detail-container">
                <div className="detail-header">
                    <div className="detail-left">
                        <p className="detail-moments">Detail of movements</p>
                    </div>
                    <div className="detail-right">
                        <img className="icon-calendar" src={Iconcalendar}/>
                    </div>
                </div>

                <div className="detail-body">
                    <div className="detail-box">
                        <div className="detail-icon">
                            <img className="icon-detail" src={Restaurant} />
                        </div>
                        <div className="detail-and-date">
                            <h3 className="title-detail">Restaurant Manhattan</h3>
                            <p className="detail-date">June 10, 2018</p>
                        </div>
                        <div className="expense-number">
                            <p>$170</p>
                            <i class="gg-arrow-up"></i>
                        </div>
                    </div>

                    <div className="detail-box">
                        <div className="detail-icon">
                            <img className="icon-detail" src={Iconmoneyhand} />
                        </div>
                        <div className="detail-and-date">
                            <h3 className="title-detail">Salary Deposit</h3>
                            <p className="detail-date">June 1, 2018</p>
                        </div>
                        <div className="income-number">
                            <p>$1,200</p>
                            <i class="gg-arrow-down"></i>
                        </div>
                    </div>

                    <div className="detail-box">
                        <div className="detail-icon">
                            <img className="icon-detail" src={Iconshopbag} />
                        </div>
                        <div className="detail-and-date">
                            <h3 className="title-detail">Central Market</h3>
                            <p className="detail-date">May 28, 2018</p>
                        </div>
                        <div className="expense-number">
                            <p>$50</p>
                            <i class="gg-arrow-up"></i>
                        </div>
                    </div>

                    <div className="detail-box">
                        <div className="detail-icon">
                            <img className="icon-detail" src={Iconcoins} />
                        </div>
                        <div className="detail-and-date">
                            <h3 className="title-detail">Salary Deposit</h3>
                            <p className="detail-date">May 1, 2018</p>
                        </div>
                        <div className="income-number">
                            <p>$1,200</p>
                            <i class="gg-arrow-down"></i>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default visa;