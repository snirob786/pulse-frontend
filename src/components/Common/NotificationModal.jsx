import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const NotificationModal = () => {
  const modalRef = useRef(null);
  const modalButtonRef = useRef(null);
  const [showNotificationModal, setShowNotificationModal] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        modalButtonRef.current &&
        !modalButtonRef.current.contains(event.target)
      ) {
        setShowNotificationModal(false);
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <li className="dropdown notification-dropdown">
        <Link
          href=""
          className={`dropdown-toggle nk-quick-nav-icon${
            showNotificationModal ? " show" : ""
          }`}
          data-bs-toggle="dropdown"
          onClick={(e) => {
            e.preventDefault();
            setShowNotificationModal(!showNotificationModal);
          }}
          ref={modalButtonRef}
        >
          <div className="icon-status icon-status-info">
            <em className="icon ni ni-bell"></em>
          </div>
        </Link>
        <div
          className={`dropdown-menu dropdown-menu-xl dropdown-menu-end${
            showNotificationModal ? " show notification-modal-custom" : ""
          }`}
          ref={modalRef}
        >
          <div className="dropdown-head">
            <span className="sub-title nk-dropdown-title">Notifications</span>
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
                    You have requested to <span>Widthdrawl</span>
                  </div>
                  <div className="nk-notification-time">2 hrs ago</div>
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
                  <div className="nk-notification-time">2 hrs ago</div>
                </div>
              </div>
              <div className="nk-notification-item dropdown-inner">
                <div className="nk-notification-icon">
                  <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                </div>
                <div className="nk-notification-content">
                  <div className="nk-notification-text">
                    You have requested to <span>Widthdrawl</span>
                  </div>
                  <div className="nk-notification-time">2 hrs ago</div>
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
                  <div className="nk-notification-time">2 hrs ago</div>
                </div>
              </div>
              <div className="nk-notification-item dropdown-inner">
                <div className="nk-notification-icon">
                  <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                </div>
                <div className="nk-notification-content">
                  <div className="nk-notification-text">
                    You have requested to <span>Widthdrawl</span>
                  </div>
                  <div className="nk-notification-time">2 hrs ago</div>
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
                  <div className="nk-notification-time">2 hrs ago</div>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown-foot center">
            <a href="#">View All</a>
          </div>
        </div>
      </li>
    </>
  );
};

export default NotificationModal;
