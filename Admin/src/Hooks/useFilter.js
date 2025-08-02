import { useState } from "react";

const useFilter = (initialFilters = {}) => {
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    sortField: "createdAt",
    sort: "desc",
    rangeField: "",
    status: "",
    page: 1,
    limit: 10,
    ...initialFilters,
  });
  return [filters, setFilters];
};

export default useFilter;
