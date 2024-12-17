import MessageModalCustom from "./MessageModal";
import NotificationModal from "./NotificationModal";
import UserActionModalHeader from "./UserActionModalHeader";

const Header = () => {
  return (
    <>
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
                <MessageModalCustom />
                <NotificationModal />
                <UserActionModalHeader />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
