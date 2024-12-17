import LoginFooter from "@/components/Common/LoginFooter";
import LoginSlider from "@/components/Common/LoginSlider";
import { setUser } from "@/redux/features/authSlice";
import requestHandler from "@/services/requestHandler";
import { SmileOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  notification,
  Select,
} from "antd";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();
  const auth = useSelector((state) => state.auth);
  const router = useRouter();
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [checkTerms, setCheckTerms] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(null);

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  const onFinish = async (values) => {
    let payload = {
      password: values.password,
      user: {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        gender: values.gender,
        dateOfBirth: dateOfBirth,
        address: values.address,
      },
    };
    setIsLoading(true);
    try {
      let result = await requestHandler("POST", "auth/register", payload);
      console.log("🚀 ~ onFinish ~ result:", result);
      api.success({
        message: "Registered in Successfully",
        description: "Please Login to dashboard",
        placement: "bottomLeft",
        duration: 5,
        closable: true,
      });
      setTimeout(() => {
        router.push("/login");
      }, 5000);
    } catch (error) {
      console.error("Registration error: ", error);
      api.error({
        message: error?.message,
        description: error?.response?.data?.message,
        placement: "bottomLeft",
        duration: 5,
        closable: true,
      });
      setIsLoading(false);
    }
  };
  return (
    <>
      <Head>
        <title>Register | Pharmacy POS</title>
      </Head>
      {contextHolder}
      <div className="nk-app-root">
        <div className="nk-main ">
          <div className="nk-wrap nk-wrap-nosidebar">
            <div className="nk-content ">
              <div className="nk-split nk-split-page nk-split-lg">
                <div className="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white w-lg-45">
                  <div className="absolute-top-right d-lg-none p-3 p-sm-5">
                    <a
                      href="#"
                      className="toggle btn btn-white btn-icon btn-light"
                      data-target="athPromo"
                    >
                      <em className="icon ni ni-info"></em>
                    </a>
                  </div>
                  <div className="nk-block nk-block-middle nk-auth-body">
                    <div className="brand-logo pb-5">
                      <Link href="/" className="logo-link">
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
                      </Link>
                    </div>
                    <div className="nk-block-head">
                      <div className="nk-block-head-content">
                        <h5 className="nk-block-title">Register</h5>
                        <div className="nk-block-des">
                          <p>Create New Dashlite Account</p>
                        </div>
                      </div>
                    </div>
                    <Form
                      action=""
                      className="form-validate is-alter"
                      // autocomplete="off"
                      onFinish={onFinish}
                      size="large"
                      form={form}
                      initialValues={{ gender: "male" }}
                    >
                      <div className="form-group">
                        <div className="form-label-group">
                          <label className="form-label" htmlFor="firstName">
                            First Name
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
                            name="firstName"
                            rules={[
                              {
                                required: true,
                                message: "Please enter first name!",
                              },
                            ]}
                          >
                            <Input
                              className="form-control form-control-lg"
                              style={{ borderRadius: "5px" }}
                              placeholder="Enter your first name"
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-label-group">
                          <label className="form-label" htmlFor="lastName">
                            Last Name
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
                            name="lastName"
                            rules={[
                              {
                                required: true,
                                message: "Please enter last name!",
                              },
                            ]}
                          >
                            <Input
                              className="form-control form-control-lg"
                              style={{ borderRadius: "5px" }}
                              placeholder="Enter your last name"
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-label-group">
                          <label className="form-label" htmlFor="email">
                            Email Adress
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
                            name="email"
                            rules={[
                              {
                                required: true,
                                message: "Please enter email address!",
                              },
                            ]}
                          >
                            <Input
                              className="form-control form-control-lg"
                              style={{ borderRadius: "5px" }}
                              placeholder="Enter your email address"
                              type="email"
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-label-group">
                          <label className="form-label" htmlFor="phone">
                            Phone
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
                            name="phone"
                            rules={[
                              {
                                required: true,
                                message: "Please enter phone number!",
                              },
                            ]}
                          >
                            <Input
                              className="form-control form-control-lg"
                              style={{ borderRadius: "5px" }}
                              placeholder="Enter your phone number"
                              type="phone"
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
                              style={{
                                borderRadius: "5px",
                                display: "flex",
                              }}
                              placeholder="Enter your passcode"
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-label-group">
                          <label className="form-label" htmlFor="gender">
                            Gender
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
                            data-target="gender"
                          >
                            <em className="passcode-icon icon-show icon ni ni-eye"></em>
                            <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                          </a>
                          <Form.Item
                            name="gender"
                            rules={[
                              {
                                required: true,
                                message: "Please enter your gender!",
                              },
                            ]}
                          >
                            <Select
                              options={[
                                {
                                  value: "male",
                                  label: "Male",
                                },
                                {
                                  value: "female",
                                  label: "Female",
                                },
                                {
                                  value: "others",
                                  label: "Others",
                                },
                              ]}
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-label-group">
                          <label className="form-label" htmlFor="dateOfBirth">
                            Date of Birth
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
                            data-target="dateOfBirth"
                          >
                            <em className="passcode-icon icon-show icon ni ni-eye"></em>
                            <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                          </a>
                          <Form.Item
                            name="dateOfBirth"
                            rules={[
                              {
                                required: true,
                                message: "Please enter your date of birth!",
                              },
                            ]}
                          >
                            <DatePicker
                              format="DD-MM-YYYY"
                              disabledDate={(current) =>
                                current && current > new Date()
                              }
                              style={{ width: "100%" }}
                              onChange={(date, dateString) => {
                                setDateOfBirth(dateString);
                              }}
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-label-group">
                          <label className="form-label" htmlFor="address">
                            Address
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
                            name="address"
                            rules={[
                              {
                                required: true,
                                message: "Please enter address!",
                              },
                            ]}
                          >
                            <Input
                              className="form-control form-control-lg"
                              style={{ borderRadius: "5px" }}
                              placeholder="Enter your address"
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-control-xs custom-checkbox">
                          <Checkbox
                            checked={checkTerms}
                            onChange={(e) => setCheckTerms(e.target.checked)}
                            className="custom-checkbox"
                          >
                            <span className="terms-text">
                              I agree to Dashlite{" "}
                              <Link href="#" tabIndex="-1">
                                Privacy Policy
                              </Link>{" "}
                              &amp;{" "}
                              <Link href="#" tabIndex="-1">
                                Terms.
                              </Link>
                            </span>
                          </Checkbox>
                        </div>
                      </div>
                      <div className="form-group">
                        <Button
                          htmlType="submit"
                          type="primary"
                          className="btn btn-lg btn-primary btn-block"
                          disabled={!checkTerms}
                        >
                          Register
                        </Button>
                      </div>
                    </Form>
                    <div className="form-note-s2 pt-4">
                      {" "}
                      Already have an account ?{" "}
                      <Link href="/login">
                        <strong>Sign in instead</strong>
                      </Link>
                    </div>
                    {/* <div className="text-center pt-4 pb-3">
                      <h6 className="overline-title overline-title-sap">
                        <span>OR</span>
                      </h6>
                    </div>
                    <ul className="nav justify-center gx-8">
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
                    </ul> */}
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
