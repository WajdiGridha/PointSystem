import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import bit_2 from "../../../images/svg/ethereum-1.svg";
import WidgetChart1 from "../Dhrev/Home/chart/WidgetChart1";
import WidetChart2 from "../Dhrev/Home/chart/WidetChart2";

const Home = () => {
   const [companies, setCompanies] = useState([]); 
   const [users, setUsers] = useState([]); 
   const c_url = 'http://143.110.210.169:4000/societes/'
   const user_url = 'http://143.110.210.169:4000/users'
   const fetchCompanies = () => {  
     axios
       .get(c_url).then((response) => {setCompanies(response.data);})
   };
   const fetchUsers = () => {  
      axios
        .get(user_url).then((response) => {setUsers(response.data);
        })
    };
 
   useEffect(() => {
 
      fetchCompanies();
      fetchUsers();
 
   }, []);
   return (
      <Fragment>
         <>
            <div className="row">
               <div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
                  <div className="card overflow-hidden">
                     <div className="card-header border-0 pb-0">
                        <div className="mr-auto">
                           <h2 className="text-black mb-2 font-w600">
                              Companies
                           </h2>

                           <p className="mb-1 fs-13">
                              <svg
                                 width={21}
                                 height={15}
                                 viewBox="0 0 21 15"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M1 13.5C1.91797 12.4157 4.89728 9.22772 6.5 7.5L12.5 10.5L19.5 1.5"
                                    stroke="#2BC155"
                                    strokeWidth={2}
                                 />
                                 <path d="M6.5 7.5C4.89728 9.22772 1.91797 12.4157 1 13.5H19.5V1.5L12.5 10.5L6.5 7.5Z" />
                                 <defs>
                                    <linearGradient
                                       x1="10.25"
                                       y1={3}
                                       x2={11}
                                       y2="13.5"
                                       gradientUnits="userSpaceOnUse"
                                    >
                                       <stop
                                          stopColor="#2BC155"
                                          offset={1}
                                          stopOpacity="0.73"
                                       />
                                       <stop
                                          offset={1}
                                          stopColor="#2BC155"
                                          stopOpacity={0}
                                       />
                                    </linearGradient>
                                 </defs>
                              </svg>
                              4%(30 days)
                           </p>
                        </div>
                        <img src="https://icon-library.com/images/corporate-icon/corporate-icon-10.jpg" width="60" height="60" alt="" />
                     </div>
                     <div className="card-body p-0">
                        {/* <canvas id="widgetChart1" height={75} /> */}
                        <WidgetChart1 />
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
                  <div className="card overflow-hidden">
                     <div className="card-header border-0 pb-0">
                        <div className="mr-auto">
                           <h2 className="text-black mb-2 font-w600">Employers</h2>
                           <p className="mb-1 fs-13">
                              <svg
                                 width={21}
                                 height={15}
                                 viewBox="0 0 21 15"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M1 13.5C1.91797 12.4157 4.89728 9.22772 6.5 7.5L12.5 10.5L19.5 1.5"
                                    stroke="#2BC155"
                                    strokeWidth={2}
                                 />
                                 <path d="M6.5 7.5C4.89728 9.22772 1.91797 12.4157 1 13.5H19.5V1.5L12.5 10.5L6.5 7.5Z" />
                                 <defs>
                                    <linearGradient
                                       x1="10.25"
                                       y1={3}
                                       x2={11}
                                       y2="13.5"
                                       gradientUnits="userSpaceOnUse"
                                    >
                                       <stop
                                          stopColor="#2BC155"
                                          offset={1}
                                          stopOpacity="0.73"
                                       />
                                       <stop
                                          offset={1}
                                          stopColor="#2BC155"
                                          stopOpacity={0}
                                       />
                                    </linearGradient>
                                 </defs>
                              </svg>
                              4%(30 days)
                           </p>
                        </div>
                        <img src={bit_2} alt="" />
                     </div>
                     <div className="card-body p-0">
                        {/* <canvas id="widgetChart2" height={75} /> */}
                        <WidetChart2 />
                     </div>
                  </div>
               </div>


               
               <div className="col-xl-6 col-xxl-8 col-lg-8">
                  <div className="card">
                     <Tab.Container defaultActiveKey="monthly">
                        <div className="card-header d-block d-sm-flex border-0">
                           <div>
                              <h4 className="fs-20 text-black">
                                 Recent companies
                              </h4>

                           </div>

                        </div>
                        <div className="card-body tab-content p-0">
                           <Tab.Content>
                              <Tab.Pane eventKey="monthly">
                                 <div className="table-responsive">
                                    <table className="table shadow-hover card-table">
                                       <tbody>
                                       {companies && companies.map((item) =>
                                       <>
                                          <tr>
                                             <td>
                                                <div className="font-w600 wspace-no">
                                                {item.Nom}
                                                </div>
                                             </td>
                                             <td className="font-w500">
                                                {item._id} 
                                             </td>
                                             <td className="font-w600 text-center">
                                                {item.createdAt.substring(0, 10)}
                                             </td>
                                             <td>
                                                <Link
                                                   className="btn-link text-success float-right"
                                                   to="/"
                                                >
                                                   {item.SUPAD}
                                                </Link>
                                             </td>
                                          </tr>
                                          </>
                                          )}
                                       </tbody>
                                    </table>
                                 </div>
                              </Tab.Pane>
                           </Tab.Content>
                        </div>
                     </Tab.Container>
                  </div>
               </div>
               <div className="col-xl-3 col-xxl-4 col-lg-4 col-sm-6">
                  <div className="card">
                     <div className="card-header border-0">
                        <h4 className="mb-0 text-black fs-20">Recent Employers</h4>
                     </div>
                     <div className="card-body p-0">
                        <div className="table-responsive">
                           <table className="table text-center bg-secondary-hover card-table">
                              <thead>

                                 <tr>
                                    <th className="text-left">Price</th>
                                    <th>Amount</th>
                                    <th className="text-right">Total</th>
                                 </tr>
                              </thead>
                              <tbody>
                              {users && users.map((item) =>
                                       <>
                                 <tr>
                                    <td className="text-left">{users.name}</td>
                                    <td>{users.city}</td>
                                    <td className="text-right">{users.phone}</td>
                                 </tr>
                                 </>
                              )}
                              </tbody>
                           </table>
                        </div>
                     </div>
  
                  </div>
               </div>

            </div>
         </>
      </Fragment>
   );
}
export default Home;
