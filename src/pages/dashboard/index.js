import DataCard from "@/components/Common/Chart/DataCard";
import {
  DefaultCustomerChart,
  DefaultOrderChart,
  DefaultRevenueChart,
  DefaultVisitorChart,
} from "@/components/Common/Chart/DefaultCharts";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Home() {
  return (
    <>
      <DashboardLayout>
        <div className="nk-content">
          <div className="container-fluid">
            <div className="nk-content-inner">
              <div className="nk-content-body">
                <div className="nk-block-head nk-block-head-sm">
                  <div className="nk-block-between">
                    <div className="nk-block-head-content">
                      <h3 className="nk-block-title page-title">Dashboard</h3>
                      <div className="nk-block-des text-soft">
                        <p>Welcome to DashLite Pharmacy Dashboard Template.</p>
                      </div>
                    </div>
                    <div className="nk-block-head-content">
                      <div className="toggle-wrap nk-block-tools-toggle">
                        <a
                          href="#"
                          className="btn btn-icon btn-trigger toggle-expand me-n1"
                          data-target="pageMenu"
                        >
                          <em className="icon ni ni-more-v"></em>
                        </a>
                        <div
                          className="toggle-expand-content"
                          data-content="pageMenu"
                        >
                          <ul className="nk-block-tools g-3">
                            <li>
                              <div className="drodown">
                                <a
                                  href="#"
                                  className="dropdown-toggle btn btn-white btn-dim btn-outline-light"
                                  data-bs-toggle="dropdown"
                                >
                                  <em className="d-none d-sm-inline icon ni ni-calender-date"></em>
                                  <span>
                                    <span className="d-none d-md-inline">
                                      Last
                                    </span>
                                    30 Days
                                  </span>
                                  <em className="dd-indc icon ni ni-chevron-right"></em>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <ul className="link-list-opt no-bdr">
                                    <li>
                                      <a href="#">
                                        <span>Last 30 Days</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span>Last 6 Months</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span>Last 2 Years</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                            <li className="nk-block-tools-opt">
                              <a href="#" className="btn btn-primary">
                                <em className="icon ni ni-reports"></em>
                                <span>Reports</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nk-block">
                  <div className="row g-gs">
                    <div className="col-xxl-3 col-sm-6">
                      <div className="card">
                        <div className="nk-ecwg nk-ecwg6">
                          <div className="card-inner">
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <div>
                                <div className="card-title-group">
                                  <div className="card-title">
                                    <h6 className="title">Today's Sales</h6>
                                  </div>
                                </div>

                                <div className="data">
                                  <div className="data-group">
                                    <div className="amount">$10,945</div>
                                    <div className="nk-ecwg6-ck"></div>
                                  </div>
                                  <div className="info">
                                    <span className="change up text-danger">
                                      <em className="icon ni ni-arrow-long-up"></em>
                                      4.63%
                                    </span>
                                    <span> vs. last week</span>
                                  </div>
                                </div>
                              </div>
                              <DefaultOrderChart />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-sm-6">
                      <div className="card">
                        <div className="nk-ecwg nk-ecwg6">
                          <div className="card-inner">
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <div>
                                <div className="card-title-group">
                                  <div className="card-title">
                                    <h6 className="title">Today's Revenue</h6>
                                  </div>
                                </div>
                                <div className="data">
                                  <div className="data-group">
                                    <div className="amount">$12,338</div>
                                    <div className="nk-ecwg6-ck"></div>
                                  </div>
                                  <div className="info">
                                    <span className="change down text-danger">
                                      <em className="icon ni ni-arrow-long-down"></em>
                                      2.34%
                                    </span>
                                    <span> vs. last week</span>
                                  </div>
                                </div>
                              </div>
                              <DefaultRevenueChart />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-sm-6">
                      <div className="card">
                        <div className="nk-ecwg nk-ecwg6">
                          <div className="card-inner">
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <div>
                                <div className="card-title-group">
                                  <div className="card-title">
                                    <h6 className="title">Today's Customer</h6>
                                  </div>
                                </div>
                                <div className="data">
                                  <div className="data-group">
                                    <div className="amount">$20,847</div>
                                    <div className="nk-ecwg6-ck">
                                      {/* <canvas
                                    className="ecommerce-line-chart-s3"
                                    id="labIncome"
                                  ></canvas> */}
                                    </div>
                                  </div>
                                  <div className="info">
                                    <span className="change up text-danger">
                                      <em className="icon ni ni-arrow-long-up"></em>
                                      4.63%
                                    </span>
                                    <span> vs. last week</span>
                                  </div>
                                </div>
                              </div>
                              <DefaultCustomerChart />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-sm-6">
                      <div className="card">
                        <div className="nk-ecwg nk-ecwg6">
                          <div className="card-inner">
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <div>
                                <div className="card-title-group">
                                  <div className="card-title">
                                    <h6 className="title">Today's Expense</h6>
                                  </div>
                                </div>
                                <div className="data">
                                  <div className="data-group">
                                    <div className="amount">$23,485</div>
                                    <div className="nk-ecwg6-ck">
                                      {/* <canvas
                                    className="ecommerce-line-chart-s3"
                                    id="todayExpense"
                                  ></canvas> */}
                                    </div>
                                  </div>
                                  <div className="info">
                                    <span className="change up text-primary">
                                      <em className="icon ni ni-arrow-long-down"></em>
                                      1.34%
                                    </span>
                                    <span> vs. last week</span>
                                  </div>
                                </div>
                              </div>
                              <DefaultVisitorChart />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-md-6">
                      <div className="card is-dark h-100">
                        <div className="nk-ecwg nk-ecwg1">
                          <div className="card-inner">
                            <div className="card-title-group">
                              <div className="card-title">
                                <h6 className="title">Total Sales</h6>
                              </div>
                              <div className="card-tools">
                                <a href="#" className="link">
                                  View Report
                                </a>
                              </div>
                            </div>
                            <div className="data">
                              <div className="amount">$74,958.49</div>
                              <div className="info">
                                <strong>$7,395.37</strong> in last month
                              </div>
                            </div>
                            <div className="data">
                              <h6 className="sub-title">This week so far</h6>
                              <div className="data-group">
                                <div className="amount">$1,338.72</div>
                                <div className="info text-right">
                                  <span className="change up text-danger">
                                    <em className="icon ni ni-arrow-long-up"></em>
                                    4.63%
                                  </span>
                                  <br />
                                  <span>vs. last week</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="nk-ecwg1-ck">
                            <canvas
                              className="ecommerce-line-chart-s1"
                              id="totalSales"
                            ></canvas>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-5 col-md-6">
                      <div className="card card-full">
                        <div className="nk-ecwg nk-ecwg8 h-100">
                          <div className="card-inner">
                            <div className="card-title-group mb-3">
                              <div className="card-title">
                                <h6 className="title">Store Visitors</h6>
                              </div>
                              <div className="card-tools">
                                <div className="dropdown">
                                  <a
                                    href="#"
                                    className="dropdown-toggle link link-light link-sm dropdown-indicator"
                                    data-bs-toggle="dropdown"
                                  >
                                    Weekly
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                    <ul className="link-list-opt no-bdr">
                                      <li>
                                        <a href="#">
                                          <span>Daily</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" className="active">
                                          <span>Weekly</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span>Monthly</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <ul className="nk-ecwg8-legends">
                              <li>
                                <div className="title">
                                  <span
                                    className="dot dot-lg sq"
                                    data-bg="#0fac81"
                                  ></span>
                                  <span>Physically</span>
                                </div>
                              </li>
                              <li>
                                <div className="title">
                                  <span
                                    className="dot dot-lg sq"
                                    data-bg="#eb6459"
                                  ></span>
                                  <span>Online</span>
                                </div>
                              </li>
                            </ul>
                            <div className="nk-ecwg8-ck">
                              <canvas
                                className="ecommerce-line-chart-s4"
                                id="salesStatistics"
                              ></canvas>
                            </div>
                            <div className="chart-label-group ps-5">
                              <div className="chart-label">01 Jul, 2020</div>
                              <div className="chart-label">30 Jul, 2020</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-md-6">
                      <div className="card h-100">
                        <div className="card-inner">
                          <div className="card-title-group mb-2">
                            <div className="card-title">
                              <h6 className="title">Store Statistics</h6>
                            </div>
                          </div>
                          <ul className="nk-store-statistics">
                            <li className="item">
                              <div className="info">
                                <div className="title">Sales</div>
                                <div className="count">1,795</div>
                              </div>
                              <em className="icon bg-primary-dim ni ni-bag"></em>
                            </li>
                            <li className="item">
                              <div className="info">
                                <div className="title">Customers</div>
                                <div className="count">2,327</div>
                              </div>
                              <em className="icon bg-info-dim ni ni-users"></em>
                            </li>
                            <li className="item">
                              <div className="info">
                                <div className="title">Products</div>
                                <div className="count">674</div>
                              </div>
                              <em className="icon bg-pink-dim ni ni-box"></em>
                            </li>
                            <li className="item">
                              <div className="info">
                                <div className="title">Categories</div>
                                <div className="count">68</div>
                              </div>
                              <em className="icon bg-purple-dim ni ni-server"></em>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xxl-4">
                      <div className="card card-bordered card-full">
                        <div className="card-inner-group">
                          <div className="card-inner">
                            <div className="card-title-group">
                              <div className="card-title">
                                <h6 className="title">New Customers</h6>
                              </div>
                              <div className="card-tools">
                                <a
                                  href="html/pharmacy/customer.html"
                                  className="link"
                                >
                                  View All
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="card-inner card-inner-md">
                            <div className="user-card">
                              <div className="user-avatar bg-primary-dim">
                                <span>AB</span>
                              </div>
                              <div className="user-info">
                                <span className="lead-text">
                                  Abu Bin Ishtiyak
                                </span>
                                <span className="sub-text">
                                  info@softnio.com
                                </span>
                              </div>
                              <div className="user-action">
                                <div className="drodown">
                                  <a
                                    href="#"
                                    className="dropdown-toggle btn btn-icon btn-trigger me-n1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <em className="icon ni ni-more-h"></em>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <ul className="link-list-opt no-bdr">
                                      <li>
                                        <a href="html/pharmacy/general-settings.html">
                                          <em className="icon ni ni-setting"></em>
                                          <span>Action Settings</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em className="icon ni ni-notify"></em>
                                          <span>Push Notification</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-inner card-inner-md">
                            <div className="user-card">
                              <div className="user-avatar bg-pink-dim">
                                <span>SW</span>
                              </div>
                              <div className="user-info">
                                <span className="lead-text">Sharon Walker</span>
                                <span className="sub-text">
                                  sharon-90@example.com
                                </span>
                              </div>
                              <div className="user-action">
                                <div className="drodown">
                                  <a
                                    href="#"
                                    className="dropdown-toggle btn btn-icon btn-trigger me-n1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <em className="icon ni ni-more-h"></em>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <ul className="link-list-opt no-bdr">
                                      <li>
                                        <a href="html/pharmacy/general-settings.html">
                                          <em className="icon ni ni-setting"></em>
                                          <span>Action Settings</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em className="icon ni ni-notify"></em>
                                          <span>Push Notification</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-inner card-inner-md">
                            <div className="user-card">
                              <div className="user-avatar bg-warning-dim">
                                <span>GO</span>
                              </div>
                              <div className="user-info">
                                <span className="lead-text">Gloria Oliver</span>
                                <span className="sub-text">
                                  gloria_72@example.com
                                </span>
                              </div>
                              <div className="user-action">
                                <div className="drodown">
                                  <a
                                    href="#"
                                    className="dropdown-toggle btn btn-icon btn-trigger me-n1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <em className="icon ni ni-more-h"></em>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <ul className="link-list-opt no-bdr">
                                      <li>
                                        <a href="html/pharmacy/general-settings.html">
                                          <em className="icon ni ni-setting"></em>
                                          <span>Action Settings</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em className="icon ni ni-notify"></em>
                                          <span>Push Notification</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-inner card-inner-md">
                            <div className="user-card">
                              <div className="user-avatar bg-success-dim">
                                <span>PS</span>
                              </div>
                              <div className="user-info">
                                <span className="lead-text">
                                  Phillip Sullivan
                                </span>
                                <span className="sub-text">
                                  phillip-85@example.com
                                </span>
                              </div>
                              <div className="user-action">
                                <div className="drodown">
                                  <a
                                    href="#"
                                    className="dropdown-toggle btn btn-icon btn-trigger me-n1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <em className="icon ni ni-more-h"></em>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <ul className="link-list-opt no-bdr">
                                      <li>
                                        <a href="html/pharmacy/general-settings.html">
                                          <em className="icon ni ni-setting"></em>
                                          <span>Action Settings</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em className="icon ni ni-notify"></em>
                                          <span>Push Notification</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-8">
                      <div className="card card-bordered card-full">
                        <div className="card-inner">
                          <div className="card-title-group">
                            <div className="card-title">
                              <h6 className="title">
                                <span className="me-2">Transaction</span>
                                <a href="#" className="link d-none d-sm-inline">
                                  See History
                                </a>
                              </h6>
                            </div>
                            <div className="card-tools">
                              <ul className="card-tools-nav">
                                <li>
                                  <a href="#">
                                    <span>Paid</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span>Pending</span>
                                  </a>
                                </li>
                                <li className="active">
                                  <a href="#">
                                    <span>All</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="card-inner p-0 border-top">
                          <div className="nk-tb-list nk-tb-orders">
                            <div className="nk-tb-item nk-tb-head">
                              <div className="nk-tb-col">
                                <span>Invoice No</span>
                              </div>
                              <div className="nk-tb-col tb-col-sm">
                                <span>Customer</span>
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span>Date</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span>Ref</span>
                              </div>
                              <div className="nk-tb-col">
                                <span>Amount</span>
                              </div>
                              <div className="nk-tb-col">
                                <span className="d-none d-sm-inline">
                                  Status
                                </span>
                              </div>
                              <div className="nk-tb-col">
                                <span>&nbsp;</span>
                              </div>
                            </div>
                            <div className="nk-tb-item">
                              <div className="nk-tb-col">
                                <span className="tb-lead">
                                  <a href="#">#95954</a>
                                </span>
                              </div>
                              <div className="nk-tb-col tb-col-sm">
                                <div className="user-card">
                                  <div className="user-avatar user-avatar-sm bg-purple">
                                    <span>AB</span>
                                  </div>
                                  <div className="user-name">
                                    <span className="tb-lead">
                                      Abu Bin Ishtiyak
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span className="tb-sub">02/11/2020</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span className="tb-sub text-primary">
                                  SUB-2309232
                                </span>
                              </div>
                              <div className="nk-tb-col">
                                <span className="tb-sub tb-amount">
                                  4,596.75 <span>USD</span>
                                </span>
                              </div>
                              <div className="nk-tb-col">
                                <span className="badge badge-dot badge-dot-xs text-success">
                                  Paid
                                </span>
                              </div>
                              <div className="nk-tb-col nk-tb-col-action">
                                <div className="dropdown">
                                  <a
                                    className="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em className="icon ni ni-more-h"></em>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-end dropdown-menu-xs">
                                    <ul className="link-list-plain">
                                      <li>
                                        <a href="#">View</a>
                                      </li>
                                      <li>
                                        <a href="#">Invoice</a>
                                      </li>
                                      <li>
                                        <a href="#">Print</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="nk-tb-item">
                              <div className="nk-tb-col">
                                <span className="tb-lead">
                                  <a href="#">#95812</a>
                                </span>
                              </div>
                              <div className="nk-tb-col tb-col-sm">
                                <div className="user-card">
                                  <div className="user-avatar user-avatar-sm bg-warning">
                                    <img
                                      src="./images/avatar/b-sm.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="user-name">
                                    <span className="tb-lead">
                                      Blanca Schultz
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span className="tb-sub">02/01/2020</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span className="tb-sub text-primary">
                                  SUB-2309143
                                </span>
                              </div>
                              <div className="nk-tb-col">
                                <span className="tb-sub tb-amount">
                                  199.99 <span>USD</span>
                                </span>
                              </div>
                              <div className="nk-tb-col">
                                <span className="badge badge-dot badge-dot-xs text-success">
                                  Paid
                                </span>
                              </div>
                              <div className="nk-tb-col nk-tb-col-action">
                                <div className="dropdown">
                                  <a
                                    className="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em className="icon ni ni-more-h"></em>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-end dropdown-menu-xs">
                                    <ul className="link-list-plain">
                                      <li>
                                        <a href="#">View</a>
                                      </li>
                                      <li>
                                        <a href="#">Invoice</a>
                                      </li>
                                      <li>
                                        <a href="#">Print</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="nk-tb-item">
                              <div className="nk-tb-col">
                                <span className="tb-lead">
                                  <a href="#">#95256</a>
                                </span>
                              </div>
                              <div className="nk-tb-col tb-col-sm">
                                <div className="user-card">
                                  <div className="user-avatar user-avatar-sm bg-purple">
                                    <span>NL</span>
                                  </div>
                                  <div className="user-name">
                                    <span className="tb-lead">
                                      Naomi Lawrence
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span className="tb-sub">01/29/2020</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span className="tb-sub text-primary">
                                  SUB-2305684
                                </span>
                              </div>
                              <div className="nk-tb-col">
                                <span className="tb-sub tb-amount">
                                  1099.99 <span>USD</span>
                                </span>
                              </div>
                              <div className="nk-tb-col">
                                <span className="badge badge-dot badge-dot-xs text-success">
                                  Paid
                                </span>
                              </div>
                              <div className="nk-tb-col nk-tb-col-action">
                                <div className="dropdown">
                                  <a
                                    className="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em className="icon ni ni-more-h"></em>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-end dropdown-menu-xs">
                                    <ul className="link-list-plain">
                                      <li>
                                        <a href="#">View</a>
                                      </li>
                                      <li>
                                        <a href="#">Invoice</a>
                                      </li>
                                      <li>
                                        <a href="#">Print</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="nk-tb-item">
                              <div className="nk-tb-col">
                                <span className="tb-lead">
                                  <a href="#">#95135</a>
                                </span>
                              </div>
                              <div className="nk-tb-col tb-col-sm">
                                <div className="user-card">
                                  <div className="user-avatar user-avatar-sm bg-success">
                                    <span>CH</span>
                                  </div>
                                  <div className="user-name">
                                    <span className="tb-lead">
                                      Cassandra Hogan
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span className="tb-sub">01/29/2020</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span className="tb-sub text-primary">
                                  SUB-2305564
                                </span>
                              </div>
                              <div className="nk-tb-col">
                                <span className="tb-sub tb-amount">
                                  1099.99 <span>USD</span>
                                </span>
                              </div>
                              <div className="nk-tb-col">
                                <span className="badge badge-dot badge-dot-xs text-warning">
                                  Due
                                </span>
                              </div>
                              <div className="nk-tb-col nk-tb-col-action">
                                <div className="dropdown">
                                  <a
                                    className="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em className="icon ni ni-more-h"></em>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-end dropdown-menu-xs">
                                    <ul className="link-list-plain">
                                      <li>
                                        <a href="#">View</a>
                                      </li>
                                      <li>
                                        <a href="#">Invoice</a>
                                      </li>
                                      <li>
                                        <a href="#">Notify</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-inner-sm border-top text-center d-sm-none">
                          <a href="#" className="btn btn-link btn-block">
                            See History
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
