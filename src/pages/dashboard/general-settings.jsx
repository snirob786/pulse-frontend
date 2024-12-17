import GeneralSettingsInsideSidebar from "@/components/Common/GeneralSettingsInsideSidebar";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import React from "react";

const GeneralSettings = () => {
  return (
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
                            <h5 className="title fw-medium">
                              Pharmacy Settings
                            </h5>
                            <span>
                              These settings helps you modify pharmacy details.
                            </span>
                          </div>

                          <div className="nk-block-head-content align-self-start d-lg-none">
                            <a
                              href="#"
                              className="toggle btn btn-icon btn-trigger mt-n1"
                              data-target="userAside"
                            >
                              <em className="icon ni ni-menu-alt-r" />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="nk-block">
                        <form action="#" className="form-settings gy-3">
                          <div className="row g-3 align-center">
                            <div className="col-lg-5">
                              <div className="form-group">
                                <label
                                  className="form-label"
                                  htmlFor="site-name"
                                >
                                  Pharmacy Name
                                </label>
                                <span className="form-note">
                                  Specify the name of your pharmacy.
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-7">
                              <div className="form-group">
                                <div className="form-control-wrap">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="site-name"
                                    defaultValue="Dashlite"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row g-3 align-center">
                            <div className="col-lg-5">
                              <div className="form-group">
                                <label
                                  className="form-label"
                                  htmlFor="site-email"
                                >
                                  Pharmacy Address
                                </label>
                                <span className="form-note">
                                  Specify the key of your pharmacy address
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-7">
                              <div className="form-group">
                                <div className="form-control-wrap">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="site-email"
                                    defaultValue="Softnio Street 3"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row g-3 align-center">
                            <div className="col-lg-5">
                              <div className="form-group">
                                <label
                                  className="form-label"
                                  htmlFor="site-copyright"
                                >
                                  Copyright
                                </label>
                                <span className="form-note">
                                  Copyright information of your pharmacy.
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-7">
                              <div className="form-group">
                                <div className="form-control-wrap">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="site-copyright"
                                    defaultValue="© 2019, DashLite. All Rights Reserved."
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row g-3 align-center">
                            <div className="col-lg-5">
                              <div className="form-group">
                                <label className="form-label">
                                  Allow Registration
                                </label>
                                <span className="form-note">
                                  Enable or disable registration from site.
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-7">
                              <ul className="custom-control-group g-3 align-center flex-wrap">
                                <li>
                                  <div className="custom-control custom-radio">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      defaultChecked=""
                                      name="reg-public"
                                      id="reg-enable"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="reg-enable"
                                    >
                                      Enable
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="custom-control custom-radio">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      name="reg-public"
                                      id="reg-disable"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="reg-disable"
                                    >
                                      Disable
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="custom-control custom-radio">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      name="reg-public"
                                      id="reg-request"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="reg-request"
                                    >
                                      On Request
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="row g-3 align-center">
                            <div className="col-lg-5">
                              <div className="form-group">
                                <label className="form-label">Main Site</label>
                                <span className="form-note">
                                  Specify the URL if your main website is
                                  external.
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-7">
                              <div className="form-group">
                                <div className="form-control-wrap">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="site-url"
                                    defaultValue="https://www.softnio.com"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row g-3 align-center">
                            <div className="col-lg-5">
                              <div className="form-group">
                                <label
                                  className="form-label"
                                  htmlFor="site-name"
                                >
                                  {" "}
                                  Description
                                </label>
                                <span className="form-note">
                                  Describe your pharmacy information.
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-7">
                              <div className="form-group">
                                <div className="form-control-wrap">
                                  <div className="form-control-wrap">
                                    <textarea
                                      className="form-control form-control no-resize"
                                      id="fv-message"
                                      name="fv-message"
                                      placeholder="Hello World!"
                                      defaultValue={
                                        "                                                 "
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row g-3 align-center">
                            <div className="col-lg-5">
                              <div className="form-group">
                                <label
                                  className="form-label"
                                  htmlFor="site-off"
                                >
                                  Maintanance Mode
                                </label>
                                <span className="form-note">
                                  Enable to make Project make offline.
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-7">
                              <div className="form-group">
                                <div className="custom-control custom-switch">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    name="reg-public"
                                    id="site-off"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="site-off"
                                  >
                                    Offline
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row g-3">
                            <div className="col-lg-7">
                              <div className="form-group mt-2">
                                <button
                                  type="submit"
                                  className="btn btn-lg btn-primary"
                                >
                                  Update
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* Inside Sibebar */}
                    <GeneralSettingsInsideSidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default GeneralSettings;
