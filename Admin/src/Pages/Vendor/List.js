import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "reactstrap";
import CustomTable from "../../components/Common/CustomTable";

const List = () => {
  const Navigate = useNavigate();
  const columns = [
    {
      dataField: "companyName",
      text: "Company Name",
      className: "text-capitalize",
      sort: true,
    },
    {
      dataField: "gstNumber",
      text: "GST Number",
      className: "text-capitalize",
      sort: true,
    },
    {
      dataField: "panCardNumber",
      text: "Pan Card Number",
      className: "text-capitalize",
      sort: true,
    },
    {
      dataField: "bankAccount",
      text: "No. of Bank A/C",
      className: "text-capitalize",
      sort: true,
    },
    {
      dataField: "subVendor",
      text: "No. of Sub Vendor",
      className: "text-capitalize",
      sort: true,
    },
    {
      dataField: "status",
      text: "Status",
      className: "text-capitalize",
      sort: true,
    },
  ];
  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          <CustomTable
            columns={columns}
            buttonAction={() => {
              Navigate("/add");
            }}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default List;
