import Link from "next/link";
import React from "react";

const SidebarRight = () => {
  return (
    <>
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
                      <span className="nk-menu-text">Manufacturer List</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a
                      href="html/pharmacy/manufacturer-ledger.html"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">Manufacturer Ledger</span>
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
                      <span className="nk-menu-text">Add Wastage Return</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a
                      href="html/pharmacy/wastage-return.html"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">Wastage Return List</span>
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
                <a href="html/pharmacy/support.html" className="nk-menu-link">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-msg-fill"></em>
                  </span>
                  <span className="nk-menu-text">Support</span>
                </a>
              </li>
              <li className="nk-menu-item">
                <Link href="general-settings" className="nk-menu-link">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-setting-fill"></em>
                  </span>
                  <span className="nk-menu-text">Setting</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarRight;
