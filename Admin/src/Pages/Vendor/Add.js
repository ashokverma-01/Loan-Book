import React from "react";
import { Container, Button, Form, Row, Col, Card } from "react-bootstrap";
import {
  Formik,
  Field,
  Form as FormikForm,
  ErrorMessage,
  FieldArray,
} from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  companyName: Yup.string().required("Company name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit number")
    .required("Mobile number is required"),
  gstNumber: Yup.string().required("GST number is required"),
  panCard: Yup.string().required("PAN card number is required"),
  subscriptionPeriod: Yup.string().required("Please select a period"),
  subscription: Yup.string().required("Please select a subscription"),
});

const Add = () => {
  const initialValues = {
    companyName: "",
    email: "",
    mobile: "",
    gstNumber: "",
    panCard: "",
    logo: null,
    subscriptionPeriod: "",
    subscription: "",
    vendors: [
      {
        type: "",
        name: "",
        email: "",
        mobile: "",
      },
    ],
  };

  const handleSubmit = (values) => {
    console.log("Form Data:", values);
    alert("Agency added successfully!");
  };

  return (
    <div className="page-content">
      <Container className="py-5">
        <Card className="p-4 shadow">
          <h3 className="mb-4 text-center">Add New Vendor</h3>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values }) => (
              <FormikForm>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>
                        <label className="required">Company Name</label>
                      </Form.Label>
                      <Field name="companyName" className="form-control" />
                      <ErrorMessage
                        name="companyName"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>
                        <label className="required">Email</label>
                      </Form.Label>
                      <Field
                        name="email"
                        type="email"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>
                        <label className="required">Mobile Number</label>
                      </Form.Label>
                      <Field name="mobile" className="form-control" />
                      <ErrorMessage
                        name="mobile"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>
                        <label className="required">GST Number</label>
                      </Form.Label>
                      <Field name="gstNumber" className="form-control" />
                      <ErrorMessage
                        name="gstNumber"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>
                        <label className="required">Pan Card Number</label>
                      </Form.Label>
                      <Field name="panCard" className="form-control" />
                      <ErrorMessage
                        name="panCard"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>
                        <label>Company Logo</label>
                      </Form.Label>
                      <Form.Control
                        type="file"
                        onChange={(event) =>
                          setFieldValue("logo", event.currentTarget.files[0])
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>
                        <label className="required">Subscription Period</label>
                      </Form.Label>
                      <Field
                        as="select"
                        name="subscriptionPeriod"
                        className="form-control"
                      >
                        <option value="">Select Period</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                      </Field>
                      <ErrorMessage
                        name="subscriptionPeriod"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>
                        <label className="required">Subscription</label>
                      </Form.Label>
                      <Field
                        as="select"
                        name="subscription"
                        className="form-control"
                      >
                        <option value="">Select Subscription</option>
                        <option value="basic">Basic</option>
                        <option value="premium">Premium</option>
                      </Field>
                      <ErrorMessage
                        name="subscription"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <hr />
                <h5 className="mb-3">Vendor Information</h5>

                <FieldArray name="vendors">
                  {({ push, remove }) => (
                    <>
                      {values.vendors.map((vendor, index) => (
                        <Row className="mb-3" key={index}>
                          <Col md={3}>
                            <Form.Group>
                              <Form.Label>Name</Form.Label>
                              <Field
                                name={`vendors[${index}].name`}
                                className="form-control"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={3}>
                            <Form.Group>
                              <Form.Label>Email</Form.Label>
                              <Field
                                name={`vendors[${index}].email`}
                                type="email"
                                className="form-control"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={3}>
                            <Form.Group>
                              <Form.Label>Mobile</Form.Label>
                              <Field
                                name={`vendors[${index}].mobile`}
                                className="form-control"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={2}>
                            <Form.Group>
                              <Form.Label>Type</Form.Label>
                              <Field
                                as="select"
                                name={`vendors[${index}].type`}
                                className="form-control"
                              >
                                <option value="">Select</option>
                                <option value="vendor">Vendor</option>
                                <option value="subvendor">Sub Vendor</option>
                              </Field>
                            </Form.Group>
                          </Col>
                          <Col md={1} className="d-flex align-items-end">
                            <Button
                              variant="danger"
                              type="button"
                              onClick={() => remove(index)}
                            >
                              X
                            </Button>
                          </Col>
                        </Row>
                      ))}
                      <div className="mb-3">
                        <Button
                          variant="secondary"
                          type="button"
                          onClick={() =>
                            push({ type: "", name: "", email: "", mobile: "" })
                          }
                        >
                          + Add Vendor
                        </Button>
                      </div>
                    </>
                  )}
                </FieldArray>

                <div className="text-end mt-4">
                  <Button variant="primary" type="submit">
                    Save Vendor
                  </Button>
                </div>
              </FormikForm>
            )}
          </Formik>
        </Card>
      </Container>
    </div>
  );
};

export default Add;
