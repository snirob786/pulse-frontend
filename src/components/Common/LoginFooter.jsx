import React from "react";

const LoginFooter = () => {
  return (
    <>
      <div className="nk-block nk-auth-footer">
        <div className="nk-block-between">
          <ul className="nav nav-sm">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Terms & Condition
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Privacy Policy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Help
              </a>
            </li>
            {/* <li className="nav-item dropup">
                          <a
                            className="dropdown-toggle dropdown-indicator has-indicator nav-link"
                            data-bs-toggle="dropdown"
                            data-offset="0,10"
                          >
                            <small>English</small>
                          </a>
                          <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                            <ul className="language-list">
                              <li>
                                <a href="#" className="language-item">
                                  <img
                                    src="/assets/images/flags/english.png"
                                    alt=""
                                    className="language-flag"
                                  />
                                  <span className="language-name">English</span>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="language-item">
                                  <img
                                    src="/assets/images/flags/spanish.png"
                                    alt=""
                                    className="language-flag"
                                  />
                                  <span className="language-name">Español</span>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="language-item">
                                  <img
                                    src="/assets/images/flags/french.png"
                                    alt=""
                                    className="language-flag"
                                  />
                                  <span className="language-name">Français</span>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="language-item">
                                  <img
                                    src="/assets/images/flags/turkey.png"
                                    alt=""
                                    className="language-flag"
                                  />
                                  <span className="language-name">Türkçe</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li> */}
          </ul>
        </div>
        <div className="mt-3">
          <p>&copy; 2023 DashLite. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default LoginFooter;
