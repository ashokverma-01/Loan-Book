import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

import {
  Row,
  Col,
  CardBody,
  Card,
  Container,
  Form,
  Input,
  FormFeedback,
  Label,
} from "reactstrap";

import logolight from "../../assets/images/logo-light.png";
import logodark from "../../assets/images/logo-dark.png";
import callApi from "../../helpers/CallApi";
import { getLogging } from "../../helpers/API";
import withRouter from "../../components/Common/withRouter";

const Login = () => {
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  useEffect(() => {
    const token = localStorage.getItem("authUser");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    await callApi({
      callback: getLogging,
      payload: values,
      onSuccess: ({ tokens, user }) => {
        localStorage.setItem("accessToken", tokens?.access?.token);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      },
      onError: (error) => {
        setErrors({ general: "Incorrect email or password" });
        setSubmitting(false);
      },
    });
  };

  return (
    <React.Fragment>
      <div className="bg-overlay"></div>
      <div className="account-pages my-5 pt-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} md={8} xl={4}>
              <Card>
                <CardBody className="p-4">
                  <div className="text-center mb-4">
                    <Link to="/">
                      <img
                        src={logodark}
                        alt=""
                        height="24"
                        className="auth-logo logo-dark mx-auto"
                      />
                      <img
                        src={logolight}
                        alt=""
                        height="24"
                        className="auth-logo logo-light mx-auto"
                      />
                    </Link>
                    <h4 className="font-size-18 text-muted mt-2">
                      Welcome Back!
                    </h4>
                    <p className="mb-5">Sign in to continue to Upzet.</p>
                  </div>

                  <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      values,
                      errors,
                      touched,
                      isSubmitting,
                    }) => (
                      <Form onSubmit={handleSubmit}>
                        {errors.general && (
                          <div className="text-danger text-center mb-3">
                            {errors.general}
                          </div>
                        )}

                        <div className="mb-3">
                          <Label className="form-label">Email</Label>
                          <Input
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            invalid={
                              touched.email && errors.email ? true : false
                            }
                          />
                          {touched.email && errors.email && (
                            <FormFeedback>{errors.email}</FormFeedback>
                          )}
                        </div>

                        <div className="mb-3">
                          <Label className="form-label">Password</Label>
                          <div className="input-group">
                            <Input
                              name="password"
                              type={passwordType}
                              placeholder="Enter password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              invalid={
                                touched.password && errors.password
                                  ? true
                                  : false
                              }
                            />
                            <button
                              type="button"
                              onClick={togglePasswordVisibility}
                              className="btn btn-outline-secondary"
                            >
                              {passwordType === "password" ? "Show" : "Hide"}
                            </button>
                          </div>
                          {touched.password && errors.password && (
                            <FormFeedback>{errors.password}</FormFeedback>
                          )}
                        </div>

                        <Row className="mb-3">
                          <Col xs="6">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="rememberMe"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="rememberMe"
                              >
                                Remember me
                              </Label>
                            </div>
                          </Col>
                          <Col xs="6" className="text-end">
                            <Link to="/auth-recoverpw" className="text-muted">
                              Forgot password?
                            </Link>
                          </Col>
                        </Row>

                        <div className="d-grid">
                          <button
                            className="btn btn-primary"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Logging in..." : "Log In"}
                          </button>
                        </div>
                        <Row>
                          <Col>
                            <div className="mt-5 text-center">
                              <p className="text-black-50">
                                Don't have an account?
                                <Link
                                  to="/register"
                                  className="fw-medium text-primary"
                                >
                                  Register
                                </Link>
                              </p>
                              <p className="text-black-50">
                                © {new Date().getFullYear()} Upzet. Crafted with
                                <i className="mdi mdi-heart text-danger"></i> by
                                Themesdesign
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    )}
                  </Formik>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Login);

Login.propTypes = {
  history: PropTypes.object,
};
