import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import MetisMenu from "metismenujs";
import { LoginContext } from "../../../context/LoginContext";

class MM extends Component {
   componentDidMount() {
      this.$el = this.el;
      this.mm = new MetisMenu(this.$el);
   }
   render() {
      return (
         <div className="mm-wrapper">
            <ul className="metismenu" ref={(el) => (this.el = el)}>
               {this.props.children}
            </ul>
         </div>
      );
   }
}

class SideBarx extends Component {
  
   static UserContext = LoginContext;

   componentDidMount() {
      var btn = document.querySelector(".nav-control");
      var aaa = document.querySelector("#main-wrapper");
      function toggleFunc() {
         return aaa.classList.toggle("menu-toggle");
      }
      btn.addEventListener("click", toggleFunc);
   };
   
   render() {
      /// Path
      let path = window.location.pathname;
      path = path.split("/");
      path = path[path.length - 1];
      const role = this.props.role
      /// Active menu
      let deshBoard = [
            "",
            "my-wallet",
            "coin-details",
            "portfolio",
            "transactions",
            "market-capital",
         ],
         app = [
            "app-profile",
            "app-calender",
            "email-compose",
            "email-inbox",
            "email-read",
            "ecom-product-grid",
            "ecom-product-list",
            "ecom-product-list",
            "ecom-product-order",
            "ecom-checkout",
            "ecom-invoice",
            "ecom-customers",
            "post-details",
            "ecom-product-detail",
         ],

         charts = [
            "chart-rechart",
            "chart-flot",
            "chart-chartjs",
            "chart-chartist",
            "chart-sparkline",
            "chart-apexchart",
         ],
         bootstrap = [
            "ui-accordion",
            "ui-badge",
            "ui-alert",
            "ui-button",
            "ui-modal",
            "ui-button-group",
            "ui-list-group",
            "ui-media-object",
            "ui-card",
            "ui-carousel",
            "ui-dropdown",
            "ui-popover",
            "ui-progressbar",
            "ui-tab",
            "ui-typography",
            "ui-pagination",
            "ui-grid",
         ];
         

      return (
         <div className="deznav">
            <PerfectScrollbar className="deznav-scroll">
               <MM className="metismenu" id="menu">
                  { role == 'admin' || role == 'user' ?  '' : 
                  <>
                  <li
                     className={`${
                        deshBoard.includes(path) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to="/"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-networking"></i>
                        <span className="nav-text">Dashboard</span>
                     </Link>
                     
                  </li>
                  <li className={`${app.includes(path) ? "mm-active" : ""}`}>
                     <Link
                        className="has-arrow ai-icon"
                        to="/Company"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-television"></i>
                        <span className="nav-text">Company</span>
                     </Link>

                  </li>
                  <li className={`${charts.includes(path) ? "mm-active" : ""}`}>
                     <Link
                        className="has-arrow ai-icon"
                        to="/Employers"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-controls-3"></i>
                        <span className="nav-text">Employers</span>
                     </Link>

                  </li>
                  </>
   }
                  { role == "superAdmin" ? "" :   
                  <>
                 {role == "user" ? '':
                 <>
                  <li
                     className={`${
                        bootstrap.includes(path) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to="/task"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-internet"></i>
                        <span className="nav-text">Task</span>
                     </Link>
                  </li>
   
                  <li
                     className={`${
                        bootstrap.includes(path) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to="/store"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-star"></i>
                        <span className="nav-text">Store</span>
                     </Link>
                  </li>
                  </>
                  }
                { role == 'user' ?
                  <li
                     className={`${
                        bootstrap.includes(path) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to="/shop"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-price-tag"></i>
                        <span className="nav-text">Shop</span>
                     </Link>
                  </li>
                  : ''  
               }
                  </>
                   }
               </MM>
            </PerfectScrollbar>
         </div>
      );
   }
}


 
 export default function SideBar() {
   let role = localStorage.getItem('role')
   return (
       <div>
          <SideBarx role={role}></SideBarx>
       </div>
    )
 }
 
