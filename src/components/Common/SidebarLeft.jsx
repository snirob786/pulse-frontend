import Link from "next/link";
import React from "react";
import UserActionModal from "@/components/common/UserActionModal";

const SidebarLeft = () => {
  return (
    <>
      <div className="nk-sidebar-bar">
        <div className="nk-apps-brand">
          <Link href="/" className="logo-link">
            <img
              className="logo-light logo-img"
              src="/assets/images/logo-small.png"
              srcSet="/assets/images/logo-small2x.png 2x"
              alt="logo"
            />
            <img
              className="logo-dark logo-img"
              src="/assets/images/logo-dark-small.png"
              srcSet="/assets/images/logo-dark-small2x.png 2x"
              alt="logo-dark"
            />
          </Link>
        </div>
        <div className="nk-sidebar-element">
          <div className="nk-sidebar-body">
            <div className="nk-sidebar-content" data-simplebar>
              {/* <div className="nk-sidebar-menu">
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
              </div> */}
              <div className="nk-sidebar-footer">
                <ul className="nk-menu nk-menu-md apps-menu">
                  <li className="nk-menu-item">
                    <Link
                      href="/dashboard/user-profile-setting"
                      className="nk-menu-link"
                      title="Settings"
                    >
                      <span className="nk-menu-icon">
                        <em className="icon ni ni-setting"></em>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <UserActionModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarLeft;
