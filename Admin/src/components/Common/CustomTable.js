import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, {
  textFilter,
  selectFilter,
} from "react-bootstrap-table2-filter";
import { Alert, Button, Card, Row, Col } from "react-bootstrap";
import { FormGroup, InputGroup, Label } from "reactstrap";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import { CiCircleInfo } from "react-icons/ci";

const CustomTable = ({
  data,
  columns,
  onStatusChange,
  buttonLabel = "ADD",
  buttonAction,
  tableTitle,
  showRangePicker = true,
  showAddButton = true,
}) => {
  function headerFormatter(column, { sortElement, filterElement }) {
    return (
      <div>
        {filterElement}
        <strong className="white-wrap"> {column.text}</strong>
        {sortElement}
      </div>
    );
  }

  const [isFilterEnabled, setIsFilterEnabled] = useState(true);
  const [paginationState, setPaginationState] = useState({
    ...data,
  });

  useEffect(() => {
    setPaginationState({ ...data });
  }, [data]);
  const handleTableChange = (type, { page, sizePerPage }) => {
    setPaginationState({ page, sizePerPage });
    if (onStatusChange) {
      onStatusChange((prev) => ({ ...prev, page, limit: sizePerPage }));
    }
  };
  const paginationOptions = {
    totalSize: paginationState?.totalDocs || 0,
    sizePerPage: paginationState?.limit || 10,
    showTotal: true,
    page: paginationState?.page || 1,
    onPageChange: handleTableChange,
  };
  const handleToggleFilters = () => {
    setIsFilterEnabled(!isFilterEnabled);
  };
  const enhancedColumns = columns.map((col) => {
    if (isFilterEnabled && col.filterable) {
      if (col.filterType === "text") {
        return { ...col, filter: textFilter() };
      } else if (col.filterType === "select") {
        return { ...col, filter: selectFilter({ options: col.filterOptions }) };
      }
    }
    return {
      ...col,
      filter: undefined,
      headerFormatter,
      classes: "white-wrap",
    };
  });

  return (
    <div>
      <Card>
        <Card.Header>
          <Row className="align-items-center justify-content-between">
            <Col md="10">
              {tableTitle && <Card.Title>{tableTitle}</Card.Title>}
              {showAddButton && (
                <Button variant="primary btn-sm" onClick={buttonAction}>
                  {buttonLabel}
                </Button>
              )}
            </Col>

            <Col md="2" className="text-end">
              {showRangePicker && (
                <FormGroup className="mb-0">
                  <Label>Date Range</Label>
                  <InputGroup>
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="dd mm, yyyy"
                      options={{
                        mode: "range",
                        dateFormat: "Y-m-d",
                      }}
                    />
                  </InputGroup>
                </FormGroup>
              )}
            </Col>
          </Row>
        </Card.Header>

        <Card.Body>
          <BootstrapTable
            responsive
            wrapperClasses="table-responsive"
            remote
            bootstrap4
            keyField="id"
            data={data?.list || []}
            columns={enhancedColumns}
            pagination={paginationFactory(paginationOptions)}
            filter={filterFactory()}
            bordered={false}
            onTableChange={handleTableChange}
            headerClasses="strong"
            noDataIndication={
              <Alert variant="info" className="alert-dismissible fade show">
                <CiCircleInfo /> No Data Found
              </Alert>
            }
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomTable;
