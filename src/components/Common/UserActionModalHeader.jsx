import { setLogout } from "@/redux/features/authSlice";
import { setUserPreference } from "@/redux/features/userPreferenceSlice";
import { getNameInitials } from "@/services/generateNameInitials";
import { roleConstants } from "@/utils/constants";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Switch } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserActionModalHeader = () => {
  const user = useSelector((state) => state.auth.user);
  const userPreference = useSelector((state) => state?.userPreferences);
  const modalRef = useRef(null);
  const modalButtonRef = useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const [toggleUserActionModal, setToggleUserActionModal] = useState(false);
  const [initial, setInitial] = useState(null);
  useEffect(() => {
    console.log("user: ", user);
    setInitial(getNameInitials(`${user?.firstName} ${user?.lastName}`));
  }, [user]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        modalButtonRef.current &&
        !modalButtonRef.current.contains(event.target)
      ) {
        setToggleUserActionModal(false);
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const logoutHandler = () => {
    dispatch(setLogout());
    router.push("/login");
  };

  const darkModeHandler = () => {
    let userPref = {
      ...userPreference,
      isDarkMode: !userPreference?.isDarkMode,
    };
    console.log("🚀 ~ darkModeHandler ~ userPref:", userPref);

    dispatch(setUserPreference(userPref));
  };

  return (
    <>
      <li className="dropdown user-dropdown">
        <Link
          href=""
          className={`dropdown-toggle mr-n1${
            toggleUserActionModal ? " show" : ""
          }`}
          data-bs-toggle="dropdown"
          onClick={(e) => {
            e.preventDefault();
            setToggleUserActionModal(!toggleUserActionModal);
          }}
          aria-expanded={toggleUserActionModal}
          ref={modalButtonRef}
        >
          <div className="user-toggle">
            {/* <div className="user-avatar sm">
              <em className="icon ni ni-user-alt"></em>
            </div> */}
            <Avatar
              style={{
                backgroundColor: "#3fbd9a",
              }}
              icon={<UserOutlined />}
            />
          </div>
        </Link>
        <div
          className={`dropdown-menu dropdown-menu-md dropdown-menu-end${
            toggleUserActionModal ? " show custom-user-modal-action" : ""
          }`}
          ref={modalRef}
        >
          <div className="dropdown-inner user-card-wrap bg-lighter">
            <div className="user-card">
              <div className="user-avatar">
                <span>{initial}</span>
              </div>
              <div className="user-info">
                <span className="lead-text">{`${user?.firstName} ${user?.lastName}`}</span>
                <span className="sub-text">{user?.email}</span>
                <p style={{ fontWeight: "bold" }}>
                  {roleConstants[user?.role]}
                </p>
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
                <Link href="" onClick={darkModeHandler}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <em className="icon ni ni-moon"></em>
                      <span>Dark Mode</span>
                    </div>
                    <Switch
                      checked={userPreference?.isDarkMode}
                      style={{
                        backgroundColor: userPreference?.isDarkMode
                          ? "#0fac81"
                          : undefined,
                      }}
                    />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropdown-inner">
            <ul className="link-list">
              <li>
                <Link
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    logoutHandler();
                  }}
                >
                  <em className="icon ni ni-signout"></em>
                  <span>Sign out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </>
  );
};

export default UserActionModalHeader;
