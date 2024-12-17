import { Spin } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "@/components/Common/Sidebar";
import Header from "@/components/Common/Header";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const user = useSelector((state) => state?.auth?.user);
  const userPreference = useSelector((state) => state?.userPreferences);
  const [spinning, setSpinning] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else {
      setSpinning(false);
    }
  }, [router]);

  return (
    <>
      {!user ? (
        <>
          <Spin spinning={spinning} fullscreen />
        </>
      ) : (
        <main
          className={`nk-body ui-rounder npc-default has-sidebar${
            userPreference?.isDarkMode ? " dark-mode" : ""
          }`}
        >
          <div className="nk-app-root">
            <Sidebar />
            <div className="nk-main">
              <div className="nk-wrap">
                <Header />
                {children}
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default DashboardLayout;
