import LoginFooter from "@/components/Common/LoginFooter";
import LoginSlider from "@/components/Common/LoginSlider";
import { setUser } from "@/redux/features/authSlice";
import requestHandler from "@/services/requestHandler";
import { Form, Input } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const router = useRouter();
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (auth?.user) {
      router.push("/dashboard");
    }
  }, [auth?.user]);

  const onFinish = async (values) => {
    let { username, password } = values;
    console.log("Success: ", values);
    setIsLoading(true);
    try {
      let result = await requestHandler("POST", "auth/login", {
        username,
        password,
      });
      console.log("🚀 ~ onFinish ~ result:", result);
      dispatch(setUser(result));
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error: ", error);
      setIsLoading(false);
    }
  };
  return (
    <>
      <Head>
        <title>Login | Pharmacy POS</title>
      </Head>
      <div className="nk-app-root">
        <div className="nk-main ">
          <div className="nk-wrap nk-wrap-nosidebar">
            <div className="nk-content ">
              <div className="nk-split nk-split-page nk-split-lg">
                <div className="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white">
                  <div className="absolute-top-right d-lg-none p-3 p-sm-5">
                    <a
                      href="#"
                      className="toggle btn-white btn btn-icon btn-light"
                      data-target="athPromo"
                    >
                      <em className="icon ni ni-info"></em>
                    </a>
                  </div>
                  <div className="nk-block nk-block-middle nk-auth-body">
                    <div className="brand-logo pb-5">
                      <a href="html/index.html" className="logo-link">
                        <img
                          className="logo-light logo-img logo-img-lg"
                          src="/assets/images/logo.png"
                          srcSet="/assets/images/logo2x.png 2x"
                          alt="logo"
                        />
                        <img
                          className="logo-dark logo-img logo-img-lg"
                          src="/assets/images/logo-dark.png"
                          srcSet="/assets/images/logo-dark2x.png 2x"
                          alt="logo-dark"
                        />
                      </a>
                    </div>
                    <div className="nk-block-head">
                      <div className="nk-block-head-content">
                        <h5 className="nk-block-title">Sign-In</h5>
                        <div className="nk-block-des">
                          <p>
                            Access the DashLite panel using your email and
                            passcode.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Form
                      action=""
                      className="form-validate is-alter"
                      autoComplete="off"
                      onFinish={onFinish}
                      size="large"
                      form={form}
                    >
                      <div className="form-group">
                        <div className="form-label-group">
                          <label className="form-label" htmlFor="email-address">
                            Email or Username
                          </label>
                          <a
                            className="link link-primary link-sm"
                            tabIndex="-1"
                            href="#"
                          >
                            Need Help?
                          </a>
                        </div>
                        <div className="form-control-wrap">
                          <Form.Item
                            name="username"
                            rules={[
                              {
                                required: true,
                                message: "Please enter username!",
                              },
                            ]}
                          >
                            <Input
                              className="form-control form-control-lg"
                              style={{ borderRadius: "5px" }}
                              placeholder="Enter your email address or username"
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-label-group">
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                          <a
                            className="link link-primary link-sm"
                            tabIndex="-1"
                            href="html/pages/auths/auth-reset.html"
                          >
                            Forgot Code?
                          </a>
                        </div>
                        <div className="form-control-wrap">
                          <a
                            tabIndex="-1"
                            href="#"
                            className="form-icon form-icon-right passcode-switch lg"
                            data-target="password"
                          >
                            <em className="passcode-icon icon-show icon ni ni-eye"></em>
                            <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                          </a>
                          {/* <input
                            autocomplete="new-password"
                            type="password"
                            className="form-control form-control-lg"
                            required
                            id="password"
                            placeholder="Enter your passcode"
                          /> */}
                          <Form.Item
                            name="password"
                            rules={[
                              {
                                required: true,
                                message: "Please enter your password!",
                              },
                            ]}
                          >
                            <Input.Password
                              className="form-control form-control-lg"
                              style={{ borderRadius: "5px", display: "flex" }}
                              placeholder="Enter your passcode"
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="form-group">
                        <button
                          className="btn btn-lg btn-primary btn-block"
                          type="submit"
                        >
                          Sign in
                        </button>
                      </div>
                    </Form>
                    <div className="form-note-s2 pt-4">
                      {" "}
                      New on our platform?{" "}
                      <Link href="/register">Create an account</Link>
                    </div>
                    {/* <div className="text-center pt-4 pb-3">
                      <h6 className="overline-title overline-title-sap">
                        <span>OR</span>
                      </h6>
                    </div>
                    <ul className="nav justify-center gx-4">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Facebook
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Google
                        </a>
                      </li>
                    </ul>
                    <div className="text-center mt-5">
                      <span className="fw-500">
                        I don't have an account?{" "}
                        <a href="#">Try 15 days free</a>
                      </span>
                    </div> */}
                  </div>
                  <LoginFooter />
                </div>
                <LoginSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
