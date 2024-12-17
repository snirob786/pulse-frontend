import Image from "next/image";
import localFont from "next/font/local";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard");
  }, [router]);
  return (
    <>
      <div className="nk-app-root">
        <div className="nk-sidebar" data-content="sidebarMenu">
          <div className="nk-sidebar-bar">
            <div className="nk-apps-brand">
              <a href="html/index.html" className="logo-link">
                <img
                  className="logo-light logo-img"
                  src="./images/logo-small.png"
                  srcSet="./images/logo-small2x.png 2x"
                  alt="logo"
                />
                <img
                  className="logo-dark logo-img"
                  src="./images/logo-dark-small.png"
                  srcSet="./images/logo-dark-small2x.png 2x"
                  alt="logo-dark"
                />
              </a>
            </div>
            <div className="nk-sidebar-element">
              <div className="nk-sidebar-body">
                <div className="nk-sidebar-content" data-simplebar>
                  <div className="nk-sidebar-menu">
                    <ul className="nk-menu apps-menu">
                      <li className="nk-menu-item active">
                        <a
                          href="#"
                          className="nk-menu-link nk-menu-switch"
                          data-target="navPharmacy"
                        >
                          <span className="nk-menu-icon">
                            <em className="icon ni ni-capsule"></em>
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="#"
                          className="nk-menu-link nk-menu-switch"
                          data-target="navHospital"
                        >
                          <span className="nk-menu-icon">
                            <em className="icon ni ni-plus-medi"></em>
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="#"
                          className="nk-menu-link nk-menu-switch"
                          data-target="navDashboards"
                        >
                          <span className="nk-menu-icon">
                            <em className="icon ni ni-dashboard"></em>
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="#"
                          className="nk-menu-link nk-menu-switch"
                          data-target="navApps"
                        >
                          <span className="nk-menu-icon">
                            <em className="icon ni ni-menu-circled"></em>
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="#"
                          className="nk-menu-link nk-menu-switch"
                          data-target="navPages"
                        >
                          <span className="nk-menu-icon">
                            <em className="icon ni ni-files"></em>
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="#"
                          className="nk-menu-link nk-menu-switch"
                          data-target="navMisc"
                        >
                          <span className="nk-menu-icon">
                            <em className="icon ni ni-server"></em>
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="#"
                          className="nk-menu-link nk-menu-switch"
                          data-target="navError"
                        >
                          <span className="nk-menu-icon">
                            <em className="icon ni ni-alert-c"></em>
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-hr"></li>
                      <li className="nk-menu-item">
                        <a
                          href="#"
                          className="nk-menu-link nk-menu-switch"
                          data-target="navComponents"
                        >
                          <span className="nk-menu-icon">
                            <em className="icon ni ni-layers"></em>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="nk-sidebar-footer">
                    <ul className="nk-menu nk-menu-md apps-menu">
                      <li className="nk-menu-item">
                        <a href="#" className="nk-menu-link" title="Settings">
                          <span className="nk-menu-icon">
                            <em className="icon ni ni-setting"></em>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="nk-sidebar-profile nk-sidebar-profile-fixed dropdown">
                  <a href="#" data-bs-toggle="dropdown" data-offset="50,-50">
                    <div className="user-avatar">
                      <span>AB</span>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-md ml-4">
                    <div className="dropdown-inner user-card-wrap d-none d-md-block">
                      <div className="user-card">
                        <div className="user-avatar">
                          <span>AB</span>
                        </div>
                        <div className="user-info">
                          <span className="lead-text">Abu Bin Ishtiyak</span>
                          <span className="sub-text text-soft">
                            info@softnio.com
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-inner">
                      <ul className="link-list">
                        <li>
                          <a href="html/user-profile-regular.html">
                            <em className="icon ni ni-user-alt"></em>
                            <span>View Profile</span>
                          </a>
                        </li>
                        <li>
                          <a href="html/user-profile-setting.html">
                            <em className="icon ni ni-setting-alt"></em>
                            <span>Account Setting</span>
                          </a>
                        </li>
                        <li>
                          <a href="html/user-profile-activity.html">
                            <em className="icon ni ni-activity-alt"></em>
                            <span>Login Activity</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown-inner">
                      <ul className="link-list">
                        <li>
                          <a href="#">
                            <em className="icon ni ni-signout"></em>
                            <span>Sign out</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nk-sidebar-main is-light">
            <div className="nk-sidebar-inner" data-simplebar>
              <div
                className="nk-menu-content menu-active"
                data-content="navPharmacy"
              >
                <h5 className="title">Pharmacy</h5>
                <ul className="nk-menu">
                  <li className="nk-menu-item">
                    <a href="html/pharmacy/index.html" className="nk-menu-link">
                      <span className="nk-menu-icon">
                        <em className="icon ni ni-dashboard-fill"></em>
                      </span>
                      <span className="nk-menu-text">Dashboard</span>
                    </a>
                  </li>
                  <li className="nk-menu-item has-sub">
                    <a href="#" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-icon">
                        <em className="icon ni ni-users-fill"></em>
                      </span>
                      <span className="nk-menu-text">Customer</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/add-customer.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Add Customer</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/customer.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Customer List</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/customer-ledger.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Customer Ledger</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item has-sub">
                    <a href="#" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-icon">
                        <em className="icon ni ni-capsule-fill"></em>
                      </span>
                      <span className="nk-menu-text">Medicine</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/add-medicine.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Add Medicine</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/medicine-list.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Medicine List</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/medicine-details.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Medicine Details</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item has-sub">
                    <a href="#" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-icon">
                        <em className="icon ni ni-home-fill"></em>
                      </span>
                      <span className="nk-menu-text">Manufacturer</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/manufacturer.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">
                            Manufacturer List
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/manufacturer-ledger.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">
                            Manufacturer Ledger
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item has-sub">
                    <a href="#" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-icon">
                        <em className="icon ni ni-repeat"></em>
                      </span>
                      <span className="nk-menu-text">Return</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/add-wastage-return.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">
                            Add Wastage Return
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/wastage-return.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">
                            Wastage Return List
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/add-manufacturer-return.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">
                            Add Manufacture Return
                          </span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/manufacturer-return.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">
                            Manufacturer Return List
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item has-sub">
                    <a href="#" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-icon">
                        <em className="icon ni ni-user-circle-fill"></em>
                      </span>
                      <span className="nk-menu-text">Human resource</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/member.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Member</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/members-profile-regular.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Members Profile</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/attendence.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Attendence</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/salary.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Salary</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item has-sub">
                    <a href="#" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-icon">
                        <em className="icon ni ni-coin-alt-fill"></em>
                      </span>
                      <span className="nk-menu-text">Finance</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/income-list.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Income</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/expense-list.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Expence</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/invoice-list.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Invoice List</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/invoice-details.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Invoice Details</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item has-sub">
                    <a href="#" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-icon">
                        <em className="icon ni ni-activity-round-fill"></em>
                      </span>
                      <span className="nk-menu-text">Report</span>
                    </a>
                    <ul className="nk-menu-sub">
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/sales-report.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Sales Report</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/purchase-report.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Purchase Report</span>
                        </a>
                      </li>
                      <li className="nk-menu-item">
                        <a
                          href="html/pharmacy/stock-report.html"
                          className="nk-menu-link"
                        >
                          <span className="nk-menu-text">Stock Report</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nk-menu-item">
                    <a
                      href="html/pharmacy/support.html"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-icon">
                        <em className="icon ni ni-msg-fill"></em>
                      </span>
                      <span className="nk-menu-text">Support</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a
                      href="html/pharmacy/general-settings.html"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-icon">
                        <em className="icon ni ni-setting-fill"></em>
                      </span>
                      <span className="nk-menu-text">Setting</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="nk-main">
          <div className="nk-wrap">
            <div className="nk-header nk-header-fixed nk-header-fluid is-light">
              <div className="container-fluid">
                <div className="nk-header-wrap">
                  <div className="nk-menu-trigger d-xl-none ml-n1">
                    <a
                      href="#"
                      className="nk-nav-toggle nk-quick-nav-icon"
                      data-target="sidebarMenu"
                    >
                      <em className="icon ni ni-menu"></em>
                    </a>
                  </div>
                  <div className="nk-header-brand d-xl-none">
                    <a href="html/index.html" className="logo-link">
                      <img
                        className="logo-light logo-img"
                        src="/assets/images/logo.png"
                        srcSet="./images/logo2x.png 2x"
                        alt="logo"
                      />
                      <img
                        className="logo-dark logo-img"
                        src="./images/logo-dark.png"
                        srcSet="./images/logo-dark2x.png 2x"
                        alt="logo-dark"
                      />
                    </a>
                  </div>
                  <div className="nk-header-search ml-3 ml-xl-0">
                    <em className="icon ni ni-search"></em>
                    <input
                      type="text"
                      className="form-control border-transparent form-focus-none"
                      placeholder="Search anything"
                    />
                  </div>
                  <div className="nk-header-tools">
                    <ul className="nk-quick-nav">
                      <li className="dropdown chats-dropdown hide-mb-xs">
                        <a
                          href="#"
                          className="dropdown-toggle nk-quick-nav-icon"
                          data-bs-toggle="dropdown"
                        >
                          <div className="icon-status icon-status-na">
                            <em className="icon ni ni-comments"></em>
                          </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end">
                          <div className="dropdown-head">
                            <span className="sub-title nk-dropdown-title">
                              Recent Chats
                            </span>
                            <a href="#">Setting</a>
                          </div>
                          <div className="dropdown-body">
                            <ul className="chat-list">
                              <li className="chat-item">
                                <a
                                  className="chat-link"
                                  href="html/pharmacy/support.html"
                                >
                                  <div className="chat-media user-avatar">
                                    <span>IH</span>
                                    <span className="status dot dot-lg dot-gray"></span>
                                  </div>
                                  <div className="chat-info">
                                    <div className="chat-from">
                                      <div className="name">Iliash Hossain</div>
                                      <span className="time">Now</span>
                                    </div>
                                    <div className="chat-context">
                                      <div className="text">
                                        You: Please confrim if you got my last
                                        messages.
                                      </div>
                                      <div className="status delivered">
                                        <em className="icon ni ni-check-circle-fill"></em>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item is-unread">
                                <a
                                  className="chat-link"
                                  href="html/pharmacy/support.html"
                                >
                                  <div className="chat-media user-avatar bg-pink">
                                    <span>AB</span>
                                    <span className="status dot dot-lg dot-success"></span>
                                  </div>
                                  <div className="chat-info">
                                    <div className="chat-from">
                                      <div className="name">
                                        Abu Bin Ishtiyak
                                      </div>
                                      <span className="time">4:49 AM</span>
                                    </div>
                                    <div className="chat-context">
                                      <div className="text">
                                        Hi, I am Ishtiyak, can you help me with
                                        this problem ?
                                      </div>
                                      <div className="status unread">
                                        <em className="icon ni ni-bullet-fill"></em>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item">
                                <a
                                  className="chat-link"
                                  href="html/pharmacy/support.html"
                                >
                                  <div className="chat-media user-avatar">
                                    <img
                                      src="./images/avatar/b-sm.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="chat-info">
                                    <div className="chat-from">
                                      <div className="name">George Philips</div>
                                      <span className="time">6 Apr</span>
                                    </div>
                                    <div className="chat-context">
                                      <div className="text">
                                        Have you seens the claim from Rose?
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item">
                                <a
                                  className="chat-link"
                                  href="html/pharmacy/support.html"
                                >
                                  <div className="chat-media user-avatar user-avatar-multiple">
                                    <div className="user-avatar">
                                      <img
                                        src="./images/avatar/c-sm.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="user-avatar">
                                      <span>AB</span>
                                    </div>
                                  </div>
                                  <div className="chat-info">
                                    <div className="chat-from">
                                      <div className="name">Softnio Group</div>
                                      <span className="time">27 Mar</span>
                                    </div>
                                    <div className="chat-context">
                                      <div className="text">
                                        You: I just bought a new computer but i
                                        am having some problem
                                      </div>
                                      <div className="status sent">
                                        <em className="icon ni ni-check-circle"></em>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item">
                                <a
                                  className="chat-link"
                                  href="html/pharmacy/support.html"
                                >
                                  <div className="chat-media user-avatar">
                                    <img
                                      src="./images/avatar/a-sm.jpg"
                                      alt=""
                                    />
                                    <span className="status dot dot-lg dot-success"></span>
                                  </div>
                                  <div className="chat-info">
                                    <div className="chat-from">
                                      <div className="name">Larry Hughes</div>
                                      <span className="time">3 Apr</span>
                                    </div>
                                    <div className="chat-context">
                                      <div className="text">
                                        Hi Frank! How is you doing?
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item">
                                <a
                                  className="chat-link"
                                  href="html/pharmacy/support.html"
                                >
                                  <div className="chat-media user-avatar bg-purple">
                                    <span>TW</span>
                                  </div>
                                  <div className="chat-info">
                                    <div className="chat-from">
                                      <div className="name">Tammy Wilson</div>
                                      <span className="time">27 Mar</span>
                                    </div>
                                    <div className="chat-context">
                                      <div className="text">
                                        You: I just bought a new computer but i
                                        am having some problem
                                      </div>
                                      <div className="status sent">
                                        <em className="icon ni ni-check-circle"></em>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown-foot center">
                            <a href="html/pharmacy/support.html">View All</a>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown notification-dropdown">
                        <a
                          href="#"
                          className="dropdown-toggle nk-quick-nav-icon"
                          data-bs-toggle="dropdown"
                        >
                          <div className="icon-status icon-status-info">
                            <em className="icon ni ni-bell"></em>
                          </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end">
                          <div className="dropdown-head">
                            <span className="sub-title nk-dropdown-title">
                              Notifications
                            </span>
                            <a href="#">Mark All as Read</a>
                          </div>
                          <div className="dropdown-body">
                            <div className="nk-notification">
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    You have requested to{" "}
                                    <span>Widthdrawl</span>
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    Your <span>Deposit Order</span> is placed
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    You have requested to{" "}
                                    <span>Widthdrawl</span>
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    Your <span>Deposit Order</span> is placed
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    You have requested to{" "}
                                    <span>Widthdrawl</span>
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    Your <span>Deposit Order</span> is placed
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dropdown-foot center">
                            <a href="#">View All</a>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown user-dropdown">
                        <a
                          href="#"
                          className="dropdown-toggle mr-n1"
                          data-bs-toggle="dropdown"
                        >
                          <div className="user-toggle">
                            <div className="user-avatar sm">
                              <em className="icon ni ni-user-alt"></em>
                            </div>
                          </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-end">
                          <div className="dropdown-inner user-card-wrap bg-lighter">
                            <div className="user-card">
                              <div className="user-avatar">
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
                            </div>
                          </div>
                          <div className="dropdown-inner">
                            <ul className="link-list">
                              <li>
                                <a href="html/pharmacy/members-profile-regular.html">
                                  <em className="icon ni ni-user-alt"></em>
                                  <span>View Profile</span>
                                </a>
                              </li>
                              <li>
                                <a href="html/pharmacy/general-settings.html">
                                  <em className="icon ni ni-setting-alt"></em>
                                  <span>Account Setting</span>
                                </a>
                              </li>
                              <li>
                                <a href="html/pharmacy/account-log.html">
                                  <em className="icon ni ni-activity-alt"></em>
                                  <span>Login Activity</span>
                                </a>
                              </li>
                              <li>
                                <a className="dark-switch" href="#">
                                  <em className="icon ni ni-moon"></em>
                                  <span>Dark Mode</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown-inner">
                            <ul className="link-list">
                              <li>
                                <a href="#">
                                  <em className="icon ni ni-signout"></em>
                                  <span>Sign out</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="nk-content">
              <div className="container-fluid">
                <div className="nk-content-inner">
                  <div className="nk-content-body">
                    <div className="nk-block-head nk-block-head-sm">
                      <div className="nk-block-between">
                        <div className="nk-block-head-content">
                          <h3 className="nk-block-title page-title">
                            Dashboard
                          </h3>
                          <div className="nk-block-des text-soft">
                            <p>
                              Welcome to DashLite Pharmacy Dashboard Template.
                            </p>
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
                                <div className="card-title-group">
                                  <div className="card-title">
                                    <h6 className="title">Today's Sales</h6>
                                  </div>
                                </div>
                                <div className="data">
                                  <div className="data-group">
                                    <div className="amount">$10,945</div>
                                    <div className="nk-ecwg6-ck">
                                      <canvas
                                        className="ecommerce-line-chart-s3"
                                        id="ipdIncome"
                                      ></canvas>
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
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-3 col-sm-6">
                          <div className="card">
                            <div className="nk-ecwg nk-ecwg6">
                              <div className="card-inner">
                                <div className="card-title-group">
                                  <div className="card-title">
                                    <h6 className="title">Today's Revenue</h6>
                                  </div>
                                </div>
                                <div className="data">
                                  <div className="data-group">
                                    <div className="amount">$12,338</div>
                                    <div className="nk-ecwg6-ck">
                                      <canvas
                                        className="ecommerce-line-chart-s3"
                                        id="opdIncome"
                                      ></canvas>
                                    </div>
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
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-3 col-sm-6">
                          <div className="card">
                            <div className="nk-ecwg nk-ecwg6">
                              <div className="card-inner">
                                <div className="card-title-group">
                                  <div className="card-title">
                                    <h6 className="title">Today's Customer</h6>
                                  </div>
                                </div>
                                <div className="data">
                                  <div className="data-group">
                                    <div className="amount">$20,847</div>
                                    <div className="nk-ecwg6-ck">
                                      <canvas
                                        className="ecommerce-line-chart-s3"
                                        id="labIncome"
                                      ></canvas>
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
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-3 col-sm-6">
                          <div className="card">
                            <div className="nk-ecwg nk-ecwg6">
                              <div className="card-inner">
                                <div className="card-title-group">
                                  <div className="card-title">
                                    <h6 className="title">Today's Expense</h6>
                                  </div>
                                </div>
                                <div className="data">
                                  <div className="data-group">
                                    <div className="amount">$23,485</div>
                                    <div className="nk-ecwg6-ck">
                                      <canvas
                                        className="ecommerce-line-chart-s3"
                                        id="todayExpense"
                                      ></canvas>
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
                                  <h6 className="sub-title">
                                    This week so far
                                  </h6>
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
                                  <div className="chart-label">
                                    01 Jul, 2020
                                  </div>
                                  <div className="chart-label">
                                    30 Jul, 2020
                                  </div>
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
                                    <span className="lead-text">
                                      Sharon Walker
                                    </span>
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
                                    <span className="lead-text">
                                      Gloria Oliver
                                    </span>
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
                                    <a
                                      href="#"
                                      className="link d-none d-sm-inline"
                                    >
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
          </div>
        </div>
      </div>
    </>
  );
}
