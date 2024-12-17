import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const GeneralSettingsInsideSidebar = () => {
  const router = useRouter();
  return (
    <>
      <div
        className="card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg"
        data-content="userAside"
        data-toggle-screen="lg"
        data-toggle-overlay="true"
      >
        <div className="card-inner-group" data-simplebar="">
          <div className="card-inner">
            <h3 className="nk-block-title page-title">Settings</h3>
            <div className="nk-block-des text-soft">
              <p>Here you can change and edit your needs</p>
            </div>
          </div>

          <div className="card-inner p-0">
            <ul className="link-list-menu">
              <li>
                <Link
                  className={`${
                    router.asPath.includes("general-settings") ? "active" : ""
                  }`}
                  href="general-settings"
                >
                  <em className="icon ni ni-setting-alt-fill" />
                  <span>General</span>
                </Link>
              </li>
              <li>
                <a href="html/pharmacy/member-settings.html">
                  <em className="icon ni ni-account-setting" />
                  <span>Members</span>
                </a>
              </li>
              <li>
                <a href="html/pharmacy/email-settings.html">
                  <em className="icon ni ni-lock-alt-fill" />
                  <span>E-mail</span>
                </a>
              </li>
              <li>
                <a href="html/pharmacy/security-settings.html">
                  <em className="icon ni ni-shield-star-fill" />
                  <span>Security</span>
                </a>
              </li>
              <li>
                <a href="html/pharmacy/account-log.html">
                  <em className="icon ni ni-activity-round-fill" />
                  <span>Account activity</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralSettingsInsideSidebar;
