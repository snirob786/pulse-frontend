import DashboardLayout from "@/components/Layouts/DashboardLayout";
import React from "react";

const UserProfileSetting = () => {
  return (
    <>
      <DashboardLayout>
        <div className="nk-content ">
          <div className="container-fluid">
            <div className="nk-content-inner">
              <div className="nk-content-body">
                <div className="nk-block">
                  <div className="card card-bordered">
                    <div className="card-aside-wrap">
                      <div className="card-inner card-inner-lg">
                        <div className="nk-block-head nk-block-head-lg">
                          <div className="nk-block-between">
                            <div className="nk-block-head-content">
                              <h4 className="nk-block-title">
                                Security Settings
                              </h4>
                              <div className="nk-block-des">
                                <p>
                                  These settings are helps you keep your account
                                  secure.
                                </p>
                              </div>
                            </div>
                            <div className="nk-block-head-content align-self-start d-lg-none">
                              <a
                                href="#"
                                className="toggle btn btn-icon btn-trigger mt-n1"
                                data-toggle-body="true"
                                data-target="userAside"
                              >
                                <em className="icon ni ni-menu-alt-r" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="nk-block">
                          <div className="card card-bordered">
                            <div className="card-inner-group">
                              <div className="card-inner">
                                <div className="between-center flex-wrap flex-md-nowrap g-3">
                                  <div className="nk-block-text">
                                    <h6>Save my Activity Logs</h6>
                                    <p>
                                      You can save your all activity logs
                                      including unusual activity detected.
                                    </p>
                                  </div>
                                  <div className="nk-block-actions">
                                    <ul className="align-center gx-3">
                                      <li className="order-md-last">
                                        <div className="custom-control custom-switch me-n2">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            defaultChecked=""
                                            id="activity-log"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="activity-log"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              <div className="card-inner">
                                <div className="between-center flex-wrap g-3">
                                  <div className="nk-block-text">
                                    <h6>Change Password</h6>
                                    <p>
                                      Set a unique password to protect your
                                      account.
                                    </p>
                                  </div>
                                  <div className="nk-block-actions flex-shrink-sm-0">
                                    <ul className="align-center flex-wrap flex-sm-nowrap gx-3 gy-2">
                                      <li className="order-md-last">
                                        <a href="#" className="btn btn-primary">
                                          Change Password
                                        </a>
                                      </li>
                                      <li>
                                        <em className="text-soft text-date fs-12px">
                                          Last changed: <span>Oct 2, 2019</span>
                                        </em>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              <div className="card-inner">
                                <div className="between-center flex-wrap flex-md-nowrap g-3">
                                  <div className="nk-block-text">
                                    <h6>
                                      2 Factor Auth &nbsp;{" "}
                                      <span className="badge bg-success ms-0">
                                        Enabled
                                      </span>
                                    </h6>
                                    <p>
                                      Secure your account with 2FA security.
                                      When it is activated you will need to
                                      enter not only your password, but also a
                                      special code using app. You can receive
                                      this code by in mobile app.{" "}
                                    </p>
                                  </div>
                                  <div className="nk-block-actions">
                                    <a href="#" className="btn btn-primary">
                                      Disable
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg"
                        data-toggle-body="true"
                        data-content="userAside"
                        data-toggle-screen="lg"
                        data-toggle-overlay="true"
                      >
                        <div className="card-inner-group">
                          <div className="card-inner">
                            <div className="user-card">
                              <div className="user-avatar bg-primary">
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
                                <div className="dropdown">
                                  <a
                                    className="btn btn-icon btn-trigger me-n2"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                  >
                                    <em className="icon ni ni-more-v" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <ul className="link-list-opt no-bdr">
                                      <li>
                                        <a href="#">
                                          <em className="icon ni ni-camera-fill" />
                                          <span>Change Photo</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em className="icon ni ni-edit-fill" />
                                          <span>Update Profile</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="card-inner">
                            <div className="user-account-info py-0">
                              <h6 className="overline-title-alt">
                                Nio Wallet Account
                              </h6>
                              <div className="user-balance">
                                12.395769{" "}
                                <small className="currency currency-btc">
                                  BTC
                                </small>
                              </div>
                              <div className="user-balance-sub">
                                Locked{" "}
                                <span>
                                  0.344939{" "}
                                  <span className="currency currency-btc">
                                    BTC
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="card-inner p-0">
                            <ul className="link-list-menu">
                              <li>
                                <a href="html/user-profile-regular.html">
                                  <em className="icon ni ni-user-fill-c" />
                                  <span>Personal Infomation</span>
                                </a>
                              </li>
                              <li>
                                <a href="html/user-profile-notification.html">
                                  <em className="icon ni ni-bell-fill" />
                                  <span>Notifications</span>
                                </a>
                              </li>
                              <li>
                                <a href="html/user-profile-activity.html">
                                  <em className="icon ni ni-activity-round-fill" />
                                  <span>Account Activity</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="active"
                                  href="html/user-profile-setting.html"
                                >
                                  <em className="icon ni ni-lock-alt-fill" />
                                  <span>Security Settings</span>
                                </a>
                              </li>
                              <li>
                                <a href="html/user-profile-social.html">
                                  <em className="icon ni ni-grid-add-fill-c" />
                                  <span>Connected with Social</span>
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
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default UserProfileSetting;
