import React from "react";
import { Link } from "react-router-dom";

import Visaiconsvg from "../img/visa-svgrepo-com.svg";
import Goldplan from "../img/gold-leaf.png";
import Restaurant from "../img/restuarant.png";
import Menuhamburger from "../img/nemu-hamburger-white.png";
import Iconcalendar from "../img/icon-calendar.png";
import Iconmoneyhand from "../img/hand-hold-money.png";
import Iconshopbag from "../img/shop-bag.png";
import Iconcoins from "../img/icon-coins.png";
import Iconcalendarwhite from "../img/icon-calendar-white.png";
import Iconweekly from "../img/down-arrow-weekly.png";

function VisaDetail1(){
    return(
        <div className="screen-container">
            <div className="header-visa-detail">
            
            <div className="header-account">
                <div className="nav-icon">
                    <Link to={"/"}>
                    <img className="icon-hamhurger" src={Menuhamburger}/>
                    </Link>
                    
                </div>

                <div className="nav-icon">
                    <img className="icon-hamhurger" src={Iconcalendarwhite}/>
                </div>
            </div>

            <div className="money-count">
                        <p className="available">Available Balance</p>
                        <div className="count-money">
                            <p className="dollar">$</p>
                            <p>7,392.00</p>
                        </div>
                        <p className="date-money">June 9, 2018</p>
            </div>

            <div className="number-card-container">
            <div className="card-section2">
                    <div className="number-card">
                        <p>42012</p><p>3049</p><p>2800</p><p>9815</p>
                    </div>
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
                    <div className="detail-right2">
                        <p>Weekly</p>
                        <img className="icon-calendar" src={Iconweekly}/>
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
                            <p>$800</p>
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
                            <p>$4,200</p>
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
                            <p>$37</p>
                            <i class="gg-arrow-up"></i>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default VisaDetail1;