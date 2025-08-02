import React from "react";
import { Container } from "reactstrap";
import List from "./List";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const Vendor = () => {
  document.title = "Vendor | Loan - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Vendor" breadcrumbItem="List" />
          <List />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Vendor;
